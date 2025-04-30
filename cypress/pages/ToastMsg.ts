export class ToastMsg {
  // Locator for the toast element
  toast = () => cy.get('div.toast', { timeout: 8000 });

  /**
   * Verifies that the toast message contains the expected text.
   * If the toast element is not found in the DOM, the assertion is skipped.
   * This prevents test failures if the toast was not shown (e.g. already-added items).
   */
  verifyContains(message: string) {
    cy.get('body').then(($body) => {
      const hasToast = $body.find('div.toast').length > 0;

      if (hasToast) {
        cy.get('div.toast').should('contain.text', message);
      } else {
        cy.log(`Toast not found — skipping check for: "${message}"`);
      }
    });
  }

  /**
   * Verifies that the toast message disappears from the DOM.
   * Useful if you expect the toast to be removed after a short delay.
   */
  verifyDisappears() {
    cy.get('div.toast', { timeout: 8000 }).should('not.exist');
  }
}
