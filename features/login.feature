Feature: To verify the Login Page functionality

  Background:
    Given I launch the url
    And I accept all the cookies

  Scenario: Verify user can login to the application successfully
    And I click on login button element
    When I login with "test123test@gmail.com" and "abcd@12345"
    Then I should see user is logged in successfully

  Scenario: Verify the behaviour of login functionality when invalid inputs are provided
    And I click on login button element
    When I login with "test123test@gmail.com" and "123456"
    Then I should see user is unable to login and an error message is displayed

  Scenario: Verify the behaviour of login functionality when only email field is provided
    And I click on login button element
    When I enter the email as "ptest123test@gmail.com" in email text field
    And I click on login button for user to login
    Then I should see an error message for the password text box

  Scenario: Verify the behaviour of login functionality when only password field is provided
    And I click on login button element
    When I enter the password as "12345" in password text field
    And I click on login button for user to login
    Then I should see an error message for the email text box
