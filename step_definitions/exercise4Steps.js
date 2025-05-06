const assert = require('chai').assert;

let cartItems = [];
let total = 0;

Given(/^the following items in the cart: (.*)$/, (cartItemsString) => {
    cartItems = cartItemsString.split(';').map(item => {
        const [name, quantity] = item.split(',');
        return { name, quantity: parseInt(quantity, 10) };
    });
});

When('I calculate the total price', () => {
    total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    console.log(total);
});

Then('the total price should be {int}', (expectedTotal) => {
    console.log(expectedTotal);
    assert.equal(total, expectedTotal);
});
