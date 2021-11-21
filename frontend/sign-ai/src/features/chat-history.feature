Feature: View Chat History
    Scenario: Viewing the chat history
        Given I am on the chat history page
        When I click on the button with date
        Then i should be able to see the conversation history

    Scenario: A new msg is instantly recorded in the database
        Given the user started a new conversation
        When he input a message
        Then the message should be recorded immediately