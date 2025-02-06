import { test } from '../../../shared/testFixtures';
import config from '../../../../config';
import { navigationMap } from '../../../shared/navigationMap';

test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.configuration
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Configuration', () => {
        test('Configuration Loads as expected', async ({ testTools, navigationMap }) => {
            const Map = navigationMap.Settings.configuration
            await testTools.checkText(Map)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Configuration'})
        });
        test.describe('Vessel Tracks', () => {
            test('Vessel Tracks Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.vesselTracks)
                await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Vessel Tracks', nth: 1})
                await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Standard AIS Track'})
                await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Fishing Activity', nth: 1})
                await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Track Speed', nth: 2})
                await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'Alert Status', nth: 3})
            })
        }) 
        test.describe('Camera', () => {
            test('Camera Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.camera)
                await testTools.checkText({locator:'.Field__label', navigationText: 'Camera'})
            })
        }) 
        test.describe('Radar', () => {
            test('Radar Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.radar)
                await testTools.checkText({locator:'.Field__label', navigationText: 'Radar'})
            })
        }) 
        test.describe('Palettes', () => {
            test('Palettes Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.palettes)
                await testTools.checkText({locator:'.Field__label', navigationText: 'Name'})
                await testTools.clickLinkByText(Map.palettes.systemPalettes)
                await testTools.checkText({locator:'.Field__label', navigationText: 'Name'})
                await testTools.clickLinkByText(Map.palettes.myPalettes)
            })
            test('My Palettes - Add New Button works as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.palettes)
                await testTools.clickLinkByText(Map.palettes.myPalettes)
                await testTools.clickByText('button', 'Add New')
                await testTools.locatorExists('.Dialog__dialog')
                await testTools.checkText({locator: '.Dialog__title', navigationText: 'New Palette' })
                await testTools.checkText({locator: '.Field__label', navigationText: 'Type *', nth: 1 })
                await testTools.checkText({locator: '.Field__label', navigationText: 'Name *', nth: 2 })
                await testTools.clickByText('button', 'Cancel')
            })
            test('System Palettes - Add New Button works as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.palettes)
                await testTools.clickLinkByText(Map.palettes.systemPalettes)
                await testTools.clickByText('button', 'Add New')
                await testTools.locatorExists('.Dialog__dialog')
                await testTools.checkText({locator: '.Dialog__title', navigationText: 'New Palette' })
                await testTools.checkText({locator: '.Field__label', navigationText: 'Type *', nth: 1 })
                await testTools.checkText({locator: '.Field__label', navigationText: 'Name *', nth: 2 })
                await testTools.clickByText('button', 'Cancel')
            })
        }) 
        test.describe('Home Flags', () => {
            test('Home Flags Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.configuration
                await testTools.clickLinkByText(Map.homeFlags)
                await testTools.checkText({locator:'.HomeFlags__title', navigationText: 'Home Flags', nth: 1})
                await testTools.locatorExists('.SearchableChips__chip')
            })
        }) 
});
