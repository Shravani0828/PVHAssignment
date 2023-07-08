import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homePage.js';
import LoginPage from '../pageobjects/loginPage.js';

Given(/^I launch the url$/, async () => {
    await browser.url('https://www.calvinklein.nl/');
});

When(/^I click on login button element$/, async() => {
    await HomePage.clickOnLoginButton()
});

When(/^I accept all the cookies$/, async() => {
    await HomePage.clickOnAcceptCookiesButton()
});

When(/^I click on login button for user to login$/, async () => {
    await LoginPage.clickButtonToLogin();
});
