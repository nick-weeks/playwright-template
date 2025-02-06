import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';

test.describe('Check GeoVS Landing Page', () => {
  test.use({ useSessionStorage: false})
  test('Landing Page shows as expected', async ({ page, testTools}) => {
    await expect(page).toHaveURL(`${config.homeUrl}/login`)
    await expect(page).toHaveTitle('GeoVS Dashboard')
    await expect(page.getByTestId('login-username')).toHaveAttribute('placeholder', 'Username')
    await expect(page.getByTestId('login-password')).toHaveAttribute('placeholder', 'Password')
    await expect(page.getByRole('button', {name: 'Login'})).toBeVisible()
  });

  test('Landing Page Screenshot', async ({ testTools }) => {
    await testTools.fullPageScreenshot('Landing Page')
  })

  test('Login to GeoVS', async ({ testTools}) => {
    await testTools.loginToGeoVS()
  })
});