const { I } = inject();

class MainPage {
    constructor() {
        this.loginButton = "//*[@class='HPHeaderLogin']";
        this.emailField = "//*[@id='ctl00_MainContent_LoginControl1_TextBoxEmail']";
        this.passwordField = "//*[@id='ctl00_MainContent_LoginControl1_TextBoxPassword']";
        this.checkbox = "//*[@id='ctl00_MainContent_LoginControl1_CbRemember']";
        this.submitCredentialsButton = "//*[@id='ctl00_MainContent_LoginControl1_ButtonLogin']";
        this.inboxLogo = "//li[@id='ItemId_0']";
        this.errorMessage = '#ErrorMessageText';

    }

    async fillField(selector, text) {
        await I.fillField(selector, text);
    }

    async loginWithCredentials(username, password) {
        await this.fillField(this.emailField, username);
        await this.fillField(this.passwordField, password);
    }

    async submitLogin() {
        await I.click(this.checkbox);
        await I.click(this.submitCredentialsButton);
    }
}

module.exports = new MainPage();
