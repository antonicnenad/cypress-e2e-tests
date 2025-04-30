// Page Object for the Home (Book Cart) page
export class HomePage {
  // LOCATORS

  /** Locator for wishlist (heart) icon for a book by index */
  wishlistIcon = (index: number) => cy.get('span.favourite-unselected').eq(index);

  /** Locator for wishlist badge count in header */
  wishlistBadge = () => cy.get('#mat-badge-content-1');

  /** Locator for cart badge count in header */
  cartBadge = () => cy.get('#mat-badge-content-0');

  /** Locator for wishlist icon in top navigation */
  wishlistButton = () => cy.get('mat-icon[matbadgecolor="warn"]').eq(0);

  /** Locator for cart icon in top navigation */
  cartButton = () => cy.get('mat-icon[matbadgecolor="warn"]').eq(1);

  /** Locator for book title element by name */
  bookTitle = (title: string) => cy.contains('strong', title);

  /** Locator for 'Book Cart' button used to return to home */
  backToHomeButton = () => cy.contains('span', ' Book Cart ');

  // METHODS

  /** Clicks wishlist icon on a book */
  addBookToWishlist(index: number) {
    this.wishlistIcon(index).click();
  }

  /** Asserts wishlist badge shows given count */
  verifyWishlistBadge(count: number) {
    this.wishlistBadge().should('have.text', count.toString());
  }

  /** Asserts cart badge shows given count */
  verifyCartBadge(count: number) {
    this.cartBadge().should('have.text', count.toString());
  }

  /** Navigates to wishlist page */
  goToWishlist() {
    this.wishlistButton().click();
  }

  /** Navigates to cart page */
  goToCart() {
    this.cartButton().click();
  }

  /** Clicks book by its title (from homepage list) */
  openBookByTitle(title: string) {
    this.bookTitle(title).click();
  }

  /** Clicks the "Book Cart" button to return to homepage */
  goBackToHome() {
    this.backToHomeButton().click();
  }
}
