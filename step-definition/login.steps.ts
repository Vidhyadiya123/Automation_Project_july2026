import {Given,When,Then} from '@cucumber/cucumber';
import { BrowserManager } from "../utils/BrowserManager";
import { LoginPage } from '../pages/login.page';
import { Page } from 'playwright';

    let page:Page;
    let loginPage:LoginPage;

Given('User launches the application',async function () {
     page = await BrowserManager.launchBrowser();
     loginPage = new LoginPage(page);
    await loginPage.launchApplication();
});

When('User enters valid username and password', async function () {
    await loginPage.enterLoginDetails();
});

When('User clicks on login button',async function () {
    await loginPage.clickLogin();
});

Then('User should navigate to search hotel page',async function () {
    await BrowserManager.closeBrowser();
});
