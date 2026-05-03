const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const config = require('../utils/config');

test('User can add and remove item from cart', async ({page})=>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
 
    await loginPage.goto(config.baseURL);
    await loginPage.login(config.username, config.password);

    await productPage.addItemToCart();
    await productPage.goToCart();

    await expect(page).toHaveURL(/cart\.html/)
    await expect(page.locator('.cart_item')).toBeVisible();

    await productPage.clickContinueShopping();
    await productPage.removeItemFromCart();
    await productPage.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(0);

})