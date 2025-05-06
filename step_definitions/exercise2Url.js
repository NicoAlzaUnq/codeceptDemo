const { I } = inject();

Given('I have a URL {string}', function (url) {
    this.url = url;
});

When('I visit the URL', function () {
    I.amOnPage(this.url);
});

Then('the URL should be valid', function () {
    I.seeInCurrentUrl(this.url);
});
