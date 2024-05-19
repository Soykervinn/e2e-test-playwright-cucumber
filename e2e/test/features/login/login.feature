Feature: Login Flow. 

Scenario: User logs in with valid credentials.
    Given the user is on the login page.
    When the user enters their Username and Password.
    And click on the login button.
    Then the user should be loged in successfully.

Scenario: Login with invalid Credentials.
    Given the user is on the login view.
    When the user enters the Username and invalid Password.
    And click on the login button to proceed.
    Then the user should see an error message.