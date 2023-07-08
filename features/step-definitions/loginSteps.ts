import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/loginPage.js';
import MyAccountPage from '../pageobjects/myAccountPage.js';

When(/^I login with "([^"]*)?" and "([^"]*)?"$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see user is unable to login and an error message is displayed$/, async () => {
    await expect(LoginPage.errorMessageOnInvalidData).toBeExisting();
    await expect(LoginPage.errorMessageOnInvalidData).toHaveTextContaining("Je gebruikersnaam en wachtwoord matchen niet");
});

Then(/^I should see user is logged in successfully$/, async () => {
    await expect(MyAccountPage.btnMyAccount).toBeExisting();
    await MyAccountPage.getMyAccountText()
});

When(/^I enter the email as "([^"]*)?" in email text field$/, async (username) => {
    await LoginPage.enterEmailAddress(username);
});

Then(/^I should see an error message for the password text box$/, async () => {
    await expect(LoginPage.errorMessagePasswordTextField).toBeExisting();
    await expect(LoginPage.errorMessagePasswordTextField).toHaveTextContaining("Vul het veld in");
});

When(/^I enter the password as "([^"]*)?" in password text field$/, async (password) => {
    await LoginPage.enterPassword(password);
});

Then(/^I should see an error message for the email text box$/, async () => {
    await expect(LoginPage.errorMessageEmailTextField).toBeExisting();
    await expect(LoginPage.errorMessageEmailTextField).toHaveTextContaining("Voer een e-mailadres in alstublieft");
});
