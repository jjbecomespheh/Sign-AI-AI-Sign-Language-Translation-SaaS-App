class CreateChats < ActiveRecord::Migration[4.2]
  def change
    create_table 'chats' do |t|
      t.string 'sender'
      t.integer 'conversation_id'
      t.text 'message'
      # Add fields that let Rails automatically keep track
      # of when movies are added or modified:
      t.timestamps 
    end
  end
end