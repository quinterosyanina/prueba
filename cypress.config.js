const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app',
    defaultCommandTimeout: 12000,
    watchForFileChanges: false,
    projectId: "iap6id",
  },
});
//
