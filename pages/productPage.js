class ProductPage{
    constructor(page){
        this.page = page;
        this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
        this.cartIcon = '.shopping_cart_link';
        this.removeButton = '#remove-sauce-labs-backpack';
        this.continueShoppingButton = '#continue-shopping';

    }

    async addItemToCart(){
        await this.page.click(this.addToCartButton);
    }

    async goToCart(){
        await this.page.click(this.cartIcon);
    }

    async clickContinueShopping(){
        await this.page.click(this.continueShoppingButton);
    }

    async removeItemFromCart(){
        await this.page.click(this.removeButton);
    }


}

module.exports = ProductPage;