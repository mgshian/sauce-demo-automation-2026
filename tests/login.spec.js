const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const config = require('../utils/config');

test('User can login with valid credentials', async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.goto(config.BASE_URL);
    await loginPage.login(config.SAUCE_USERNAME, config.SAUCE_PASSWORD);
    await expect(page).toHaveURL(/inventory\.html/);
})