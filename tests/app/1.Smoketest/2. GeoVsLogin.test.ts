import { test, expect } from '../../shared/testFixtures';
import { findLocation } from '../../shared/helperFunctions';
import config from '../../../config';

test.describe('GeoVs Login', () => {
  test.use({ useSessionStorage: false})
  test('Log in works as expected', async ({ page }) => {
    await page.getByTestId('login-username').fill(config.successfulLogin.username)
    await page.getByTestId('login-password').fill(config.successfulLogin.password)
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page).toHaveURL(`${config.homeUrl}/alert/my-alerts?page=0`)
  });
})

test.describe('Check Nav', () => {
  test('GeoVs Contains all Nav Buttons', async ({ page, testTools, navigationMap}) => {
    const navArray = [
        'ALERTS', 'TARGETS', 'COMMS', 'MESSAGES', 'RT', 'DSC', 'RECORDINGS', 'REPORTS', 'CONNECT-OBSERV',
        'CAMERA', 'MULTISCREEN', 'SETTINGS', 'ALERTS & EVENTS', 'FILTERS', 'USERS', 'HEALTH MONITOR',
        'CONNECT', 'TRANSCEIVERS', 'CONFIGURATION', 'DATA EXTRACTION', 'SENSORS',
        'WEATHER', 'NOTIFICATIONS'
    ]
    for (let i = 0; i < navArray.length; i++) {
        const location = navArray[i]
        const object = findLocation(navigationMap, location)
        if (object) {
          await testTools.checkText(object)
        }
    }
  })
});
