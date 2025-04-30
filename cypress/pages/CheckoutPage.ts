export class CheckoutPage {
    // Locator for checkout title
    checkoutTitle = () => cy.contains('mat-card-title', 'Check Out ');
  
    // Locators for form inputs
    nameInput = () => cy.get('input[formcontrolname="name"]');
    firstAddressInput = () => cy.get('input[aria-required="true"]').eq(1);
    secondAddressInput = () => cy.get('input[aria-required="true"]').eq(2);
    pincodeInput = () => cy.get('input[formcontrolname="pincode"]');
    stateInput = () => cy.get('input[formcontrolname="state"]');
    placeOrderButton = () => cy.contains('span', ' Place Order ');
  
    // Verifies the user is on the checkout page
    verifyOnCheckoutPage() {
      this.checkoutTitle().should('exist');
    }
  
    // Fills out the checkout form with predefined data
    fillForm() {
      this.nameInput().type('Cypress User');
      this.firstAddressInput().type('First Address');
      this.secondAddressInput().type('Second Address');
      this.pincodeInput().type('123456');
      this.stateInput().type('USA');
    }
  
    // Clicks the "Place Order" button
    placeOrder() {
      this.placeOrderButton().click();
    }
  }
  