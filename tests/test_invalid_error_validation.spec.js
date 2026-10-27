import {test, expect} from '@playwright/test'

//Objective: Verify that the Saucedemo rejects the invalid password and displays an error message

//Expected result: Login is rejected, Error banner is visible, Expected error message is displayed
test('Test for Invalid credentails error', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("wrong_sauce");
    await page.getByRole('button', {name: "Login"}).click();

    //Sauce demo exposes the error message using data-test='error'.
    let error = await page.locator('[data-test="error"]');

    expect(error).toBeVisible();
    expect(error).toContainText("Username and password do not match any user in this service");

});