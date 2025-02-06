import { test, expect } from '../../shared/testFixtures';
import config from '../../../config';

test.beforeEach(async ({ page, testTools, navigationMap }) => {
    const Map = navigationMap.Targets     
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Vessels Page', () => {
  test('Vessels Page loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets 
    await testTools.checkText(Map.inChart)
    await testTools.checkText(Map.vessels)
    await testTools.checkText(Map.atoNs)
    await testTools.checkText(Map.unidentified)
    await testTools.checkText(Map.inspections)
  });

  test('In Chart loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.inChart)
  })
  test('All Vessels loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.vessels)
  })
  test('AtoNs loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.atoNs)
  })
  test('Unidentified loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.unidentified)
  })
  test('Inspections loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.inspections)
  })
  test('Change Requests loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.changeRequests)
  })
  test('Unmanned Surface Vessels loads as expected', async ({ testTools, navigationMap }) => {
    const Map = navigationMap.Targets
    await testTools.clickLinkByText(Map.vessels)
  })
})
