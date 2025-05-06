const { I } = inject();
const MainPage = require('../pages/mainPage')
let response;

Given('I have a URL {string}', function (url) {
    this.url = url;
});

When('I visit the URL', function () {
    I.amOnPage(this.url);
});

Then('the URL should be valid', async function () {
    response = await I.sendGetRequest(this.url);

    console.log(`Status Code Received: ${response.status}`);

    if (response.status !== 200) {
        throw new Error(`Expected status 200 but got ${response.status}`);
    }

    I.seeInCurrentUrl(this.url);
});

Then('I should see loginButton', function () {
    I.waitForVisible(MainPage.loginButton, 10)
});







