Feature: Testing Selenium
    Scenario: Finding some cheese
        Given I am on the Google search page
        When I search for "Cheese!"
        Then the page title should start with "cheese"

    Scenario: Viewing the chat history
        Given I am on the chat history page
        When I click on the button with date
        Then i should be able to see the conversation history