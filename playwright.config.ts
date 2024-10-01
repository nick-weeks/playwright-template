// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const isCI = !!process.env.CI;

Object.assign(global, {
  BASE_URL: process.env.BASE_URL ?? 'https://playwright.dev/',
  ENV: process.env.ENVIRONMENT ?? '',
});
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters 
  Set to:'never', change to 'always' to launch report automatically after execution */
  reporter: [ 
      ['html', {
        open: 'never',
      }],
    ['junit', {outputFile: 'results.xml'}] //required for Azure DevOps Pipeline
  ],
  

  use: {
    /* Maximum time each action such as `click()` can take. 
        Defaults to 0 (no limit). */
    actionTimeout: 60 * 1000,
    navigationTimeout: 30 * 1000,

    /* Collect trace when retrying the failed test. 
    See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    screenshot: 'only-on-failure',
    video: {
      mode: 'off'
    },
    headless: true,
    viewport: { width: 1900, height: 940 },
    launchOptions: {
        slowMo: 500,
    },
  },
  
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});