Feature: Automation Test
  I want to learn more - course

  Scenario: User should be able to Login - todo.ly when using valid credentials
    Given I am on page
    When I click log in
    And I use valid credentials
    And I click submit button
    Then I should be able to see my inbox