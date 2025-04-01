const { I } = inject();
const MainPage = require('../pages/mainPage')

Given(/^I am on page$/, function () {
    I.amOnPage('https://todo.ly/');
});
When(/^I click log in$/, function () {
    I.click(MainPage.loginButton);
});
When(/^I use valid credentials$/, function () {
    I.waitForVisible(MainPage.emailField, 10)
    MainPage.fillField(MainPage.emailField, "test@testing65.com");
    MainPage.fillField(MainPage.passwordField, "12345");
});
When(/^I click submit button$/, function () {
    I.click(MainPage.submitCredentialsButton);
});
Then(/^I should be able to see my inbox$/, function () {
    I.waitForVisible(MainPage.inboxLogo, 10)
    I.seeElement(MainPage.inboxLogo);
});