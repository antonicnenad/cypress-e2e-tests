export class OrderPage {
    // Locator for the My Orders page title
    orderPageTitle = () => cy.contains('mat-card-title', 'My Orders ');
  
    // Method to verify the user has landed on the My Orders page
    verifyOnOrderPage() {
      this.orderPageTitle().should('be.visible');
    }
  }
  