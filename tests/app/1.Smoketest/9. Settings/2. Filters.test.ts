import { test, expect } from '../../../shared/testFixtures';
import config from '../../../../config';


test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.filters
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Filters', () => {

    test('Filters Loads as expected', async ({ page, testTools, navigationMap }) => {
        const Map = navigationMap.Settings.filters
        await testTools.checkText(Map)
        await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Filters'})
    });
    test('Checks Filter Options', async ({ testTools, navigationMap}) => {
        const Map = navigationMap.Settings.filters
        await testTools.checkText(Map.vesselFilters)
        await testTools.checkText(Map.vesselFilters.myFilters)
        await testTools.checkText(Map.vesselFilters.systemFilters)
        await testTools.checkText(Map.alertFilters.myFilters)
        await testTools.checkText(Map.alertFilters.systemFilters)
    })

    test('New Filter & Back Button work as expected', async( { testTools}) => {
        await testTools.clickLinkByText__AnyRole('New Filter','button','/new')
        await testTools.clickByText('button','BACK')
        await testTools.locatorExists('.Dialog__dialog')
        await testTools.clickLinkByText__AnyRole('Yes', 'button' ,'/settings/filter/vessel/mine')
    })

    test('Filter Tabs work as expected', async ({ testTools, navigationMap}) => {
        const Map = navigationMap.Settings.filters
        await testTools.clickLinkByText(Map.vesselFilters)
        await testTools.clickLinkByText(Map.vesselFilters.systemFilters)
        await testTools.clickLinkByText(Map.vesselFilters.myFilters)
        await testTools.clickLinkByText(Map.alertFilters)
        await testTools.clickLinkByText(Map.alertFilters.systemFilters)
        await testTools.clickLinkByText(Map.alertFilters.myFilters)
    })
});