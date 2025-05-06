const { I } = inject();
const MainPage = require('../pages/mainPage');

Given('I am on page', async () => {
    await I.amOnPage('https://todo.ly/');
});

When('I click log in', async () => {
    await I.click(MainPage.loginButton);
});

When('I fill in {string} and {string}', async (username, password) => {
    await MainPage.loginWithCredentials(username, password);
});

When('I click submit button', async () => {
    await MainPage.submitLogin();
});

Then(/^I should (.*)$/, async (expectedStatus) => {
    if (expectedStatus === 'see my inbox') {
        await I.seeElement(MainPage.inboxLogo);
    } else if (expectedStatus === 'see an error message') {
        await I.seeElement(MainPage.errorMessage);
    } else {
        throw new Error(`Unknown expected status: ${expectedStatus}`);
    }
});
