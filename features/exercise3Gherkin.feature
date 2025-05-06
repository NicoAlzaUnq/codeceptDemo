Feature: Login Validation Scenarios
  I want to test multiple credential combinations to validate the login system.

  Scenario Outline: User attempts to login with different credentials
    Given I am on page
    When I click log in
    And I fill in "<username>" and "<password>"
    And I click submit button
    Then I should <expected_status>

    Examples:
      | username              | password | expected_status           |
      | test@testing65.com    | 12345    | see my inbox              |
      | validuser@example.com | validpw  | see my inbox              |
      | wronguser@example.com | wrongpw  | see an error message      |
