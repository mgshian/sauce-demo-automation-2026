const {test, expect} = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const config = require('../utils/config');

test('Login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(config.baseURL);
    await loginPage.login(config.username, config.password);
    await expect(page).toHaveURL(/inventory\.html/);
});