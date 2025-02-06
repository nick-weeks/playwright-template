import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';

test.beforeEach(async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Comms    
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Comms Page', () => {
  test('Comms Page loads as expected', async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Comms 
    await testTools.checkText(Map)
    await testTools.checkText(Map.Messages)
    await testTools.clickByText('button','COMMS')
    await testTools.clickLinkByText(Map.Messages)
    await expect(page.locator('.PageHeader__title-text')).toHaveText('Messages')
  });
});