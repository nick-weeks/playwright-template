import { test, expect } from '../../../shared/testFixtures';
import config from '../../../../config';

test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.transceivers
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Transceivers', () => {
        test('Transceivers Loads as expected', async ({ testTools, navigationMap }) => {
            const Map = navigationMap.Settings.transceivers
            await testTools.checkText(Map)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Transceivers'})
        });
});