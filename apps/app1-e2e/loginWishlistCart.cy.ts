import { LoginPage } from '../../cypress/pages/LoginPage';
import { HomePage } from '../../cypress/pages/HomePage';
import { WishlistPage } from '../../cypress/pages/WishlistPage';
import { CartPage } from '../../cypress/pages/CartPage';
import { CheckoutPage } from '../../cypress/pages/CheckoutPage';
import { ToastMsg } from '../../cypress/pages/ToastMsg';
import { OrderPage } from '../../cypress/pages/OrderPage';
import { CleanupPage } from '../../cypress/pages/CleanupPage';

// Instantiate all page objects
const loginPage = new LoginPage();
const homePage = new HomePage();
const wishlistPage = new WishlistPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const toast = new ToastMsg();
const orderPage = new OrderPage();
const cleanupPage = new CleanupPage();

describe('Wishlist to Checkout Flow with Cleanup and Session', () => {

  beforeEach(() => {
    // Login using Cypress session for caching
    cy.fixture('user').then((user) => {
      cy.session([user.username, user.password], () => {
        cy.visit('/');
        loginPage.openLogin();
        loginPage.fillCredentials(user.username, user.password);
        loginPage.submit();
        loginPage.verifyLoginSuccess(user.username);
      });
    });
    cy.visit('/');
  });

  afterEach(() => {
    // Clear wishlist after each test using custom page class
    cleanupPage.clearWishlistFromUI();
  });

  it('adds specific books to wishlist, checks out, and verifies order', () => {
    // Load book names from fixture
    cy.fixture('books').then((books) => {
      // Step 1: Add book1 to wishlist
      cy.contains('strong', books.book1).click(); // Click book title in homepage
      wishlistPage.addToWishlistFromDetails();   // Click "Add to Wishlist" in detail page
      homePage.goBackToHome();                   // Return to Book Cart page

      // Step 2: Add book2 to wishlist
      cy.contains('strong', books.book2).click();
      wishlistPage.addToWishlistFromDetails();
      homePage.goBackToHome();

      // Step 3: Navigate to wishlist
      homePage.goToWishlist();
      wishlistPage.verifyOnWishlistPage();

      // Step 4: Move first book to cart
      wishlistPage.addToCart(0);
      toast.verifyContains('One Item added to cart');

      // Step 5: Remove same book from wishlist
      wishlistPage.removeFromWishlist(0);
      toast.verifyContains('Removed from Wishlist!!!');

      // Step 6: Verify badges
      homePage.verifyWishlistBadge(1);
      homePage.verifyCartBadge(1);

      // Step 7: Go to cart
      homePage.goToCart();
      cartPage.verifyOnCartPage();

      // Step 8: Checkout
      cartPage.proceedToCheckout();
      checkoutPage.verifyOnCheckoutPage();
      checkoutPage.fillForm();
      checkoutPage.placeOrder();

      // Step 9: Confirm success toasts
      toast.verifyContains('Order palced successfully!!!');
      toast.verifyContains('Cart cleared');

      // Step 10: Verify redirection to "My Orders"
      orderPage.verifyOnOrderPage();
    });
  });
});
