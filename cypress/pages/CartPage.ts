export class CartPage {
    // Locator for the cart page title
    cartTitle = () => cy.contains('mat-card-title', ' Shopping cart ');
  
    // Locator for the "CheckOut" button
    checkoutButton = () => cy.contains('span', ' CheckOut ');
  
    // Verifies the user is currently on the cart page
    verifyOnCartPage() {
      this.cartTitle().should('exist');
    }
  
    // Clicks the "CheckOut" button to proceed to checkout
    proceedToCheckout() {
      this.checkoutButton().click();
    }
  }
  