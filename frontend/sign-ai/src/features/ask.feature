Feature: User should be able to ask a question

    Scenario: Office should get the deaf public consent before start asking
        Given the officer navigates to the home page
        When he gets the deaf public's consent
        Then he should be able to click a total of 3 buttons to get the consent
        And he should be able to start asking question

    Scenario: User not allow to submit an empty question
        Given the user navigates to the ask page
        When he submits empty question
        Then he is prompted to re-enter the question 

    Scenario: Questions verified with database
        Given the user navigates to the ask page
        When he types in the textfield and submits the question
        Then the question is reflected in the chat-history