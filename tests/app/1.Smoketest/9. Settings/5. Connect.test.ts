import { test, expect } from '../../../shared/testFixtures';
import config from '../../../../config';

test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.connect
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Connect', () => {
        test('Connect Loads as expected', async ({ page, testTools, navigationMap }) => {
            const Map = navigationMap.Settings.connect
            await testTools.checkText(Map)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Connect'})
        });
        test('Connect-Fish - Port Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.port)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Port'})
        })
        test('Connect-Fish - Species Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.species)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Species'})
        })
        test('Connect-Fish - Transhipment Vessel Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.transhipmentVessel)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Transhipment Vessel'})
        })
        test('Connect-Fish - Association Code Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.associationCode)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Association Code'})
        })
        test('Connect-Fish - Discard 0 Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.discard0)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Discard 0'})
        })
        test('Connect-Fish - Discard 1 Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.discard1)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Discard 1'})
        })
        test('Connect-Fish - Agent Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.agent)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Agent'})
        })
        test('Connect-Fish - Bunkering Vessel Tab works as expected', async ({ testTools, navigationMap}) => {
            const Map = navigationMap.Settings.connect
            await testTools.clickLinkByText(Map.connectFish.bunkeringVessel)
            await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Details for: Bunkering Vessel'})
        })
});