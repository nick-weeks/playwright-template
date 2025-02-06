import { test as base } from '@playwright/test';
import { standardTestTools } from './fixtureClasses';
import { fetchAuthToken } from './authUtils';
import { COOKIES } from '../../secrets/cookies';
import config from '../../config';
import { navigationMap } from './navigationMap';
/**
 * Groups all imports into one Fixture to extend test.
 */
type standardFixtures = {
    testTools: standardTestTools
    navigationMap: typeof navigationMap;
}

/**
 * Updates the Page Fixture with Cookies.
 * Adds the testTools Fixture
 */

export const test = base.extend<standardFixtures & { useSessionStorage: boolean}>({
    useSessionStorage: [true, { option: true}],
    page: async ({page, context, useSessionStorage}, use) => {
        const authToken = await fetchAuthToken();
        await page.goto(config.homeUrl)
        if (useSessionStorage) {
            await page.evaluate((token) => {
                console.log("Session Storage Token:", sessionStorage.getItem('dashboard.authToken'))
                sessionStorage.setItem('dashboard.authToken', token);
            }, authToken)
        await page.reload()
        }
        await use(page);
    },
    testTools: async ({page}, use) => {
        const testTools = new standardTestTools(page);
        await use(testTools);
    },
    navigationMap: async ({}, use) => {
        await use(navigationMap)
    }
})

export { expect } from '@playwright/test'
