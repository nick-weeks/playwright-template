import { test, expect } from '../../../shared/testFixtures';
import config from '../../../../config';

test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.alertsAndEvents
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Alerts & Events', () => {
        test('Alerts & Events Loads as expected', async ({ page, testTools, navigationMap }) => {
            const Map = navigationMap.Settings.alertsAndEvents
            await testTools.checkText(Map)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Alerts & Events'})
        });
        test('Geofence Works as Expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.alertsAndEvents
            await testTools.clickLinkByText(Map.geofenceManagement)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Geofence Management', nth: 1})
            await testTools.clickByText('button', 'New Geofence')
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'New geofence - Name and Appearance ', nth: 1})
        })
});