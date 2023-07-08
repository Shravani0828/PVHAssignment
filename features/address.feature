Feature: To verify Add New Address functionality

  Background:
    Given I launch the url
    And I accept all the cookies


  Scenario: Verify user is able to add a new address
    And I click on login button element
    And I login with "test123test@gmail.com" and "abcd@12345"
    And I should see user is logged in successfully
    And I click on address option available in my account section
    And I should see address page is opened and I click on add new address button
    When I fill all the required information for new address and save it
    Then I should see a new address is being displayed for the user
