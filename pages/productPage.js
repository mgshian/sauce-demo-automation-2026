class ProductPage{
    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.removeButton = page.locator('#remove-sauce-labs-backpack');
        this.continueShoppingButton = page.locator('#continue-shopping');

    }

    async addItemToCart(){
        await this.addToCartButton.click();
    }

    async goToCart(){
        await this.cartIcon.click();
    }

    async clickContinueShopping(){
        await this.continueShoppingButton.click();
    }

    async removeItemFromCart(){
        await this.removeButton.click();
    }


}

module.exports = ProductPage;