import {defineConfig, devices} from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  timeout: 1000 * 60,
  workers: isCI ? 1 : '50%',
  retries: isCI ? 2 : 0,
  forbidOnly: isCI,

  outputDir: '.test/spec/output',
  snapshotPathTemplate: '.test/spec/snaps/{projectName}/{testFilePath}/{arg}{ext}',
  testMatch: '*.spec.{ts,tsx}',

  reporter: [
    ['html', {
      outputFolder: '.test/spec/results', 
      open: 'never',
    }],
    isCI ? ['github'] : ['line'],
  ],
});
