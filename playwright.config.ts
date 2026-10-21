
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',

  use: {
    baseURL: 'https://serverest.dev',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
});
