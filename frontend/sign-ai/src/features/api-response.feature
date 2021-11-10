Feature: Check API Response
    Scenario: Check API Response 
        Given I make a GET request to "<url>"
        When I receive a response
        Then response should have a status 500

    Examples:
        | url                               |
        | http://localhost:8000/chats.json  |