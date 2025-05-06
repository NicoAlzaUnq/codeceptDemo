Feature: Shopping Cart Total

  Scenario Outline: Calculate total price for a shopping cart
    Given the following items in the cart: <cartItems>
    When I calculate the total price
    Then the total price should be <total>

    Examples:
      | cartItems                                  | total |
      | "apple,2;banana,1;orange,3"                 | 6     |
      | "milk,4;bread,3;cheese,5"                   | 12    |
