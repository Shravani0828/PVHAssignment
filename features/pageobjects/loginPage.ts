class LoginPage {
    public get inputEmail () {
        return $('#email-login-form');
    }

    public get inputPassword () {
        return $('#password-login-form');
    }

    public get btnToLogin () {
        return $('button[data-testid="login-form-submit-pvh-button"]');
    }

    public get errorMessageEmailTextField () {
        return $('div=Voer een e-mailadres in alstublieft')
    }

    public get errorMessagePasswordTextField () {
        return $('div=Vul het veld in')
    }

    public get errorMessageOnInvalidData () {
        return $('div*=Je gebruikersnaam en wachtwoord matchen niet')
    }

    public async login (username: string, password: string) {
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnToLogin.isClickable();
        await this.btnToLogin.click();
    }

    public async enterEmailAddress (username: string) {
        await this.inputEmail.setValue(username);
    }

    public async enterPassword (password: string) {
        await this.inputPassword.setValue(password);
    }

    public async clickButtonToLogin () {
        await this.btnToLogin.click();
    }

}

export default new LoginPage();
