// Page Object for Swagger menu and login API verification
export class SwaggerPage {
    // LOCATORS
  
    /** Locator for the Swagger menu link in the sidebar */
    swaggerMenuLink = () => cy.get('a[href="/swagger/index.html"] span').eq(1);
  
    /** Locator for the login API element in Swagger UI */
    loginApiEndpoint = () => cy.get('div[id="operations-Login-post_api_Login"] span').eq(2);
  
    // METHODS
  
    /**
     * Clicks the Swagger link to open the Swagger UI in a new tab.
     * Cypress cannot switch tabs, so it will remove target attribute and visit the link directly.
     */
    openSwaggerPageInSameTab() {
      cy.get('a[href="/swagger/index.html"]').invoke('removeAttr', 'target').click();
    }
  
    /**
     * Verifies that the Login API endpoint is present in the Swagger UI.
     */
    verifyLoginApiExists() {
      this.loginApiEndpoint().should('contain.text', '/api/Login');
    }
  }
  