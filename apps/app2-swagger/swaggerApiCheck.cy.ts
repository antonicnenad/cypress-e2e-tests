// E2E test for verifying the login API in Swagger UI
import { LoginPage } from '../../cypress/pages/LoginPage';
import { SwaggerPage } from '../../cypress/pages/SwaggerPage';

// Instantiate page objects
const loginPage = new LoginPage();
const swaggerPage = new SwaggerPage();

describe('Second App Test - Swagger Login API Check', () => {

  beforeEach(() => {
    // Use Cypress session for login
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

  it('opens Swagger UI and confirms login API is present', () => {
    // Step 1: Click Swagger menu link and open in the same tab
    swaggerPage.openSwaggerPageInSameTab();

    // Step 2: Verify the /api/Login endpoint is shown
    swaggerPage.verifyLoginApiExists();
  });
});
