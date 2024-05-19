Feature: Login Flow. 

Scenario: User logs in with valid credentials.
    Given the user is on the login page.
    When the user enters their Username and Password.
    And click on the login button.
    Then the user should be loged in successfully.