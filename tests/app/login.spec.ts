import { Browser, chromium, expect, test } from '@playwright/test';

test.describe('Login Page', () => {
  let browser: Browser;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://localhost/login');
  });

  test('should display core page elements', async ({ page }) => {

    // Verify main logo
    await expect(page.locator('.Login__logo')).toBeVisible();
    await expect(page.locator('.Login__logo')).toHaveAttribute('src', '/assets/img/GeoVS_logo.png');

    // Verify form elements
    // await expect(page
    //   .getByTestId('login-username')
    //   .and(page.locator('input:visible'))
    // ).toBeVisible({ timeout: 10000 });
    // await expect(page.getByTestId('login-username')).toHaveAttribute('placeholder', 'Username');
    
    await expect(page
      .getByTestId('login-password')
    ).toBeVisible();
    // await expect(page.getByTestId('login-password')).toHaveAttribute('placeholder', 'Password');
    
    // Verify login button
    const loginButton = page.locator('button.Button:has-text("Login")');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    // // Verify copyright text
     await expect(page.locator('.Login__copyright')).toContainText('© SRT Marine Systems, UK');
    
    // Verify powered by logo
    await expect(page.locator('.App__logo')).toBeVisible();
    await expect(page.locator('.App__logo')).toHaveAttribute('src', '/assets/img/powered-by-srt.png');

  });

});
