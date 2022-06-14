import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1400,
    viewportHeight: 900,
    baseUrl: 'http://localhost:8000',
    setupNodeEvents(on, config) {
    },
  },
});
