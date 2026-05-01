class CheckoutPage{
    constructor(page){
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('[data-test="finish"]');
        this.successMessage = page.locator('[data-test="complete-header"]');
        this.errorMessage = page.locator("h3[data-test='error']");

    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

    async fillCheckoutInformation(firstname, lastname, postalCode){
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async finishOrder(){
        await this.finishButton.click();
    }
}

module.exports = CheckoutPage;