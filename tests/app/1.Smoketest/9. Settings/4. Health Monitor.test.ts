import { test, expect } from '../../../shared/testFixtures';
import config from '../../../../config';

test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.healthMonitor
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Health Monitor', () => {
        test('Health Monitor Loads as expected', async ({ page, testTools, navigationMap }) => {
            const Map = navigationMap.Settings.healthMonitor
            await testTools.checkText(Map)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Health Monitor'})
        });
        test('New Activities works as Expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.healthMonitor
            await testTools.clickLinkByText__AnyRole(Map.newActivities.navigationText, 'button', Map.newActivities.urlPath)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Activities', nth:1})
        })
        test('Coast Stations works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.healthMonitor
            await testTools.clickLinkByText__AnyRole(Map.coastStations.navigationText, 'button', Map.coastStations.urlPath)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Activities', nth: 1})
        })
        test('Users Online works as expected', async ({ page, testTools, navigationMap}) => {
            const Map = navigationMap.Settings.healthMonitor
            await testTools.clickLinkByText__AnyRole(Map.usersOnline.navigationText, 'button', Map.usersOnline.urlPath)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Users'})
        })
});