import { Given, When, Then } from '@wdio/cucumber-framework';
import MyAccountPage from '../pageobjects/myAccountPage.js';
import AddressPage from '../pageobjects/addressPage.js';

When(/^I click on address option available in my account section$/, async() => {
    await MyAccountPage.clickOnAddressesButton();
});

Then(/^I should see address page is opened and I click on add new address button$/, async() => {
    await expect(AddressPage.title).toBeExisting();
    await AddressPage.btnOfferPopupClose.waitForDisplayed();
    await AddressPage.btnOfferPopupClose.click();
    await expect(AddressPage.btnAddNewAddress).toBeExisting();
    await AddressPage.btnAddNewAddress.click();
    
});

When(/^I fill all the required information for new address and save it$/, async() => {
    await AddressPage.addNewAddressAndSave();
});

Then(/^I should see a new address is being displayed for the user$/, async() => {
    await expect(AddressPage.sectionNewAddressAdded).toBeExisting();
});
