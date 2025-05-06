Feature: URL Validation

  Scenario: Verify that the URL is valid
    Given I have a URL "https://todo.ly/"
    When I visit the URL
    Then the URL should be valid
