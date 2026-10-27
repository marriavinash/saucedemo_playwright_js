import { expect } from "@playwright/test";

class InventoryPage{
        constructor(page){
            this.page = page;
            this.backpackAddButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
            this.cartbadge = page.locator('[data-test="shopping-cart-badge"]');
        }

        async addBackpackToCart(){
            this.backpackAddButton.click();
        }
        async verifyCartCount(expectedCount){
            expect(this.cartbadge).toHaveCount(expectedCount);
        }
}
module.exports = {InventoryPage};