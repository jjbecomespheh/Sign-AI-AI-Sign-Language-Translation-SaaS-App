Feature: User should be able to translate the sign language to natural language

    Scenario: All buttons working correctly
        Given the user navigates to the translate page
        When he signs "<status>" 
        Then he should be notified

    Examples:
        |status               |
        |successfully         |
        |failed               |
    
    Scenario: Return to Home Page
        Given the user navigates to the translate page
        When he clicks on the home page button
        Then he should be redirected back to home page