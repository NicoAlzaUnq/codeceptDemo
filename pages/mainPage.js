const { I } = inject();

class MainPage {
    constructor(){
        this.loginButton = "//*[@class='HPHeaderLogin']";
        this.emailField = "//*[@id='ctl00_MainContent_LoginControl1_TextBoxEmail']";
        this.passwordField = "//*[@id='ctl00_MainContent_LoginControl1_TextBoxPassword']";
        this.submitCredentialsButton = "//*[@id='ctl00_MainContent_LoginControl1_ButtonLogin']";
        this.inboxLogo = "//li[@id='ItemId_0']";
        this.checkbox="//input[@id='ctl00_MainContent_LoginControl1_CbRemember']"
    }

    fillField(Selector, text){
        I.fillField(Selector, text);
    }

}

module.exports = new MainPage();

