const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');  
const ProductPage = require('../pages/productPage');
const CheckoutPage = require('../pages/checkoutPage');
const config = require('../utils/config');
const checkoutData = require('../test-data/checkoutData.json');


let productPage;
let checkoutPage;

test.beforeEach(async ({page})=>{
    const loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);  

    await loginPage.goto(config.baseURL);
    await loginPage.login(config.username, config.password);    
})


test('User can complete checkout successfully', async ({page})=>{

    await productPage.addItemToCart();
    await productPage.goToCart();

    await checkoutPage.clickCheckoutButton();
    await checkoutPage.fillCheckoutInformation(
        checkoutData.validUser.firstName,
        checkoutData.validUser.lastName,
        checkoutData.validUser.postalCode
    );
    await checkoutPage.finishOrder();

    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');

})

test('User cannot complete checkout with missing information', async ({page})=>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);    

    await loginPage.goto(config.baseURL);
    await loginPage.login(config.username, config.password);    

    await productPage.addItemToCart();
    await productPage.goToCart();
    await checkoutPage.clickCheckoutButton();
    await checkoutPage.fillCheckoutInformation('', '', '');
    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required');
})