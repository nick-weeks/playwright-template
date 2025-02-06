import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';


test.beforeEach(async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Camera.multiScreen  
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Camera Page', () => {
  test('Camera Page loads as expected', async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Camera.multiScreen
    await testTools.checkText(Map)
  });
  test('Back Button works as expected', async ({ testTools, navigationMap}) => {
    const Map = navigationMap.Camera.multiScreen
    await testTools.clickLinkByText__AnyRole( 'BACK','button', navigationMap.Alerts.myAlerts.urlPath)
  })
});