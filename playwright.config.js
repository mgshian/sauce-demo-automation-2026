
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  
  use: {
  
    headless: !!process.env.CI,   // !!process.env.CI | false headless in CI, headed locally for debugging
    screenshot: 'only-on-failure', // Automatically take screenshot when a test fails
    video: 'retain-on-failure', // Record video only when a test fails
    slowMo: 700,      

  
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

 
});

