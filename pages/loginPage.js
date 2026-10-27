import { expect } from "@playwright/test";
class LoginPage{
        constructor(page){
            this.page=page;

        //Centralized locators
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name: "Login"});
        this.error = page.locator('[data-test="error"]');

        }

        async open(){
            await this.page.goto('https://www.saucedemo.com/');

        }

        async login(username, password){
            await this.username.fill(username);
            await this.password.fill(password);
            await this.loginButton.click();
        }

        async verifyLoginSuccess(){
            await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await expect(this.page.getByText('Products')).toBeVisible();
        }

}

module.exports = {LoginPage};