Feature: User should be able to ask a question

    Scenario: User submitting a question
        Given the user navigates to the ask page
        When he submits the question after typing in it
        Then he is redirected to translate page and question is added to database