import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';

test.beforeEach(async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.ConnectObserv    
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Connect-Observ Page', () => {
  test('Connect-Observ Page loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.ConnectObserv
    await testTools.checkText(Map)
    await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'CONNECT-OBSERV'})
  });

  test('Observers Loads as Expected', async ({ testTools, navigationMap}) => {
    const Map = navigationMap.ConnectObserv
    await testTools.clickLinkByText(Map.observers)
    await testTools.clickByText('button', 'New Observer')
    await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Observer Details', nth: 1})
  })
  test('Trips Loads as Expected', async ({ testTools, navigationMap}) => {
    const Map = navigationMap.ConnectObserv
    await testTools.clickLinkByText(Map.trips)
    await testTools.clickByText('button', 'New Trip')
    await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'New Trip', nth: 1})
  })
});