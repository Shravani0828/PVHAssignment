class MyAccountPage {

    public get btnMyAccount () {
        return $('button=Mijn account');
    }

    public get btnAddresses () {
        return $('a=Adressen');
    }

    public async getMyAccountText (){
        await expect(this.btnMyAccount).toHaveText('Mijn account')
    }

    public async clickOnAddressesButton () {
        await this.btnMyAccount.click();
        await expect(this.btnAddresses).toBeDisplayed();
        await this.btnAddresses.click();
    }

}

export default new MyAccountPage();
