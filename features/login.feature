Feature: Login functionality
    Scenario:verify user login with valid credentials
        Given User launches the application
        When User enters valid username and password
        And User clicks on login button
        Then User should navigate to search hotel page