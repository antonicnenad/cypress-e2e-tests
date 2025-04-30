// Page Object for Wishlist page
export class WishlistPage {
  // LOCATORS

  /** Locator for the wishlist page title */
  wishlistTitle = () => cy.contains('mat-card-title', ' My wishlist ');

  /** Locator for 'Add to Cart' button by index */
  addToCartButton = (index: number) => cy.contains('span', ' Add to Cart ').eq(index);

  /** Locator for 'Remove from Wishlist' button by index */
  removeFromWishlistButton = (index: number) => cy.contains('span', ' Remove from Wishlist ').eq(index);

  /** Locator for 'Add to Wishlist' button on detail page */
  addToWishlistDetail = () => cy.contains('span', ' Add to Wishlist ');

  /** Locator for 'Clear Wishlist' button */
  clearWishlistButton = () => cy.contains('span', ' Clear Wishlist ');

  // METHODS

  /** Verifies the user is on the wishlist page */
  verifyOnWishlistPage() {
    this.wishlistTitle().should('exist');
  }

  /** Adds a book from wishlist to cart */
  addToCart(index: number) {
    this.addToCartButton(index).click();
  }

  /** Removes a book from wishlist */
  removeFromWishlist(index: number) {
    this.removeFromWishlistButton(index).click();
  }

  /** Clicks 'Add to Wishlist' from book detail view */
  addToWishlistFromDetails() {
    this.addToWishlistDetail().click();
  }

  /** Clears all books from the wishlist */
  clearWishlist() {
    this.clearWishlistButton().click();
  }
}
