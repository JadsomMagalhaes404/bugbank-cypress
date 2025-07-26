const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bugbank.netlify.app/",
    setupNodeEvents(on, config) {
      // eventos customizados aqui (se necessário)
    },
  },
});
