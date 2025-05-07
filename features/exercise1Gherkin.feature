@pass
Feature: Number Extraction

  Scenario: Extract the first number from a sentence
    Given the sentence is "Your order number is 9876"
    When I extract the first number from the sentence
    Then the extracted number should be 9876
