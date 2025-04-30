export class LoginPage {
    // --- LOCATORS ---
    loginButton = () => cy.contains('span', 'Login'); // Opens login modal
    usernameInput = () => cy.get('input[formcontrolname="username"]'); // Username input field
    passwordInput = () => cy.get('input[formcontrolname="password"]'); // Password input field
    submitButton = () => cy.contains('mat-card-actions button span', 'Login');
 // Login button inside form
    loggedInUser = (username: string) => cy.contains('span', username); // Logged-in username display
  
    // --- METHODS ---
    openLogin() {
      this.loginButton().click(); // Open login modal
    }
  
    fillCredentials(username: string, password: string) {
      this.usernameInput().type(username); // Enter username
      this.passwordInput().type(password); // Enter password
    }
  
    submit() {
      this.submitButton().click(); // Submit login form
    }
  
    verifyLoginSuccess(username: string) {
        // Wait for something that changes only after login (e.g. navigation bar, URL)
        cy.get('mat-toolbar').should('be.visible'); 
        cy.contains('span', username, { timeout: 10000 }).should('exist'); //  timeout
      }
      
      
  }
  