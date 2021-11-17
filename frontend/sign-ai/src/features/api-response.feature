Feature: Check API Response
    Scenario: Check API Response 
        Given I make a GET request to "<url>"
        When I receive a response
        Then response should have a status 200

    Examples:
        | url                               |
        | /chats.json                       |