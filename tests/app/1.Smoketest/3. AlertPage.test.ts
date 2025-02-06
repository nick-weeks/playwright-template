import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';


test.beforeEach(async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Alerts      
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
    await expect(page).toHaveURL(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Alert Page', () => {
  test('Alert Page loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Alerts  
    await testTools.checkText(Map.myAlerts)
    await testTools.checkText(Map.allAlerts)
    await testTools.checkText(Map.closedAlerts)
  });

  test('My Alerts Loads as Expected', async ({testTools, navigationMap}) => {
    const Map = navigationMap.Alerts  
    await testTools.clickLinkByText(Map.myAlerts)
  })
  test('Active Alerts Loads as Expected', async ({testTools, navigationMap}) => {
    const Map = navigationMap.Alerts  
    await testTools.clickLinkByText(Map.allAlerts)
  })
  test('Closed Alerts Loads as Expected', async ({testTools, navigationMap}) => {
    const Map = navigationMap.Alerts  
    await testTools.clickLinkByText(Map.closedAlerts)
  })
});
