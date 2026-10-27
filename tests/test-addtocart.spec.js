import {LoginPage} from '../pages/loginPage.js'
import {InventoryPage} from "../pages/inventoryPage.js"
import {test, expect} from '@playwright/test'

test('Valid Login with POM', async({page})=>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyCartCount(1);
});