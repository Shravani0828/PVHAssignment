class HomePage {

    public get btnLogIn () {
        return $('button=Aanmelden / Registreren');
    }

    public get btnAcceptCookies () {
        return $('button[data-testid="accept-cookies-pvh-button"]');
    }

    public async clickOnLoginButton (){
        await this.btnLogIn.click();
    }

    public async clickOnAcceptCookiesButton (){
        await this.btnAcceptCookies.click();
    }

}

export default new HomePage();
