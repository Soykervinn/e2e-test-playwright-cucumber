Feature: Exercise Automation Web Site. 

Scenario: User signs up for a new account.
    Given the user is on the signup page.
    When the user enters their Name and Email.
    And completes the form with personal information.
    And submits the account creation form.
    Then the user's account should be created successfully.