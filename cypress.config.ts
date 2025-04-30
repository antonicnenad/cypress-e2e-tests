import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement event listeners here
    },
    baseUrl: 'https://bookcart.azurewebsites.net',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'apps/**/*.cy.ts',
  }
});
