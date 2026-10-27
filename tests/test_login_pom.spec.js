import {LoginPage} from '../pages/loginPage.js'
import {test, expect} from '@playwright/test'

test('Valid Login with POM', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
});
