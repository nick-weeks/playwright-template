import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';

test.beforeEach(async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Reports   
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Reports Page', () => {
  test('Reports Page loads as expected', async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Reports
    await testTools.checkText(Map)
    await expect(page.locator('.PageHeader__title-text').first()).toHaveText('Reports')
  });

  test('My Reports Works as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Reports
    await testTools.clickLinkByText(Map.myReports)
    await testTools.clickLinkByText(Map.myReports.Scheduled)
    await testTools.clickLinkByText(Map.myReports.last30Days)
  })

  test('All Reports Works as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Reports
    await testTools.clickLinkByText(Map.allReports)
    await testTools.clickLinkByText(Map.allReports.Scheduled)
    await testTools.clickLinkByText(Map.allReports.last30Days)
  })

  test('Manage Reports Works as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Reports
    await testTools.clickLinkByText(Map.manageReports)
    await testTools.clickLinkByText(Map.manageReports.Alert)
    await testTools.clickLinkByText(Map.manageReports.eLog)
    await testTools.clickLinkByText(Map.manageReports.WCPFC)
    await testTools.clickLinkByText(Map.manageReports.vesselHistory)
    await testTools.clickLinkByText(Map.manageReports.catchPerUnitEffort)
    await testTools.clickLinkByText(Map.manageReports.vesselTraffic)
  })

});