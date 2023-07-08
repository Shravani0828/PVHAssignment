class AddressPage {

    public get title () {
        return $('h1=Adresboek');
    }

    public get btnAddNewAddress () {
        return $('svg[data-testid="icon-utility-account-add-address-svg"]');
    }

    public get titleAddNewAddress () {
        return $('h3=Voeg nieuw adres toe');
    }

    public get btnMrs () {
        return $('button=Mrs');
    }

    public get inputFirstName () {
        return $('#firstName-Bform');
    }

    public get inputLastName () {
        return $('#lastName-Bform');
    }

    public get inputStreet () {
        return $('#address1-Bform');
    }

    public get inputHouseNumber () {
        return $('#address2-Bform');
    }

    public get inputPlace () {
        return $('#city-Bform');
    }

    public get inputPostalCode () {
        return $('#zipCode-Bform');
    }

    public get btnAddNewAddressSubmit () {
        return $('button[data-testid="address-form-add-pvh-button"]');
    }

    public get sectionNewAddressAdded () {
        return $('section[data-testid="pvh-content-switch-card"]')
    }

    public get btnOfferPopupClose () {
        return $('svg[data-testid="icon-utility-cross-svg"]')
    }

    public async addNewAddressAndSave () {
        
        await this.btnMrs.click();
        await this.inputFirstName.setValue("test");
        await this.inputLastName.setValue("ABC");
        await this.inputStreet.setValue("Osdorp");
        await this.inputHouseNumber.setValue("900");
        await this.inputPlace.setValue("Amsterdam");
        await this.inputPostalCode.setValue("1068NS");
        await expect(this.btnAddNewAddressSubmit).toBeClickable();
        await this.btnAddNewAddressSubmit.click();
    }

}

export default new AddressPage();
