Feature: User should be able to translate the sign language to natural language

    Scenario: Sign succesfully/failed
        Given the user navigates to the translate page
        When he signs "<status_1>" 
        Then he should be notified of "<status_2>" translation

    Examples:
        |status_1             |status_2        |
        |successfully         |successful      |
        |failed               |failed          |
    
    Scenario: Return to Home Page
        Given the user navigates to the translate page
        When he clicks on the end convo page button
        Then he should be redirected back to home page

    Scenario: User to ask question
        Given the user navigates to the translate page
        When he clicks on the ask question button
        Then he should be redirected to the page