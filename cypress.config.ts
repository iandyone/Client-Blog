import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    video: false,
    testIsolation: false,
    setupNodeEvents(on, config) {},
  },
});
