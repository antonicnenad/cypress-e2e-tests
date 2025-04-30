import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://bookcart.azurewebsites.net',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'apps/**/*.cy.ts',

    setupNodeEvents(on, config) {
      // implement event listeners here if needed
    },
  },

  // Recommended viewport for CI (GitHub Actions / Docker)
  viewportWidth: 1280,
  viewportHeight: 720,

  // Optional: improve debugging and prevent videos if not needed
  video: false,
  screenshotOnRunFailure: true,
});
