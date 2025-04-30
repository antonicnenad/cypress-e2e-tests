// Page Object for test cleanup related to wishlist
export class CleanupPage {
    // LOCATORS
  
    /** Locator for wishlist icon in the header (used to navigate) */
    wishlistIcon = () => cy.get('mat-icon[matbadgecolor="warn"]').eq(0);
  
    /** Locator for wishlist page title */
    wishlistTitle = () => cy.contains('mat-card-title', ' My wishlist ');
  
    /** Locator for 'Clear Wishlist' button */
    clearWishlistButton = () => cy.contains('span', ' Clear Wishlist ');
  
    // METHOD
  
    /** Navigates to the wishlist and clears it if present */
    clearWishlistFromUI() {
      this.wishlistIcon().click();
      this.wishlistTitle().should('exist');
      this.clearWishlistButton().click();
    }
  }
  