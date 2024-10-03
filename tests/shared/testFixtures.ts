import { test as base } from '@playwright/test';
import { standardTestTools } from './fixtureClasses';
import { COOKIES } from '../../secrets/cookies';
import { thinkHubTestTools } from './thinkHubFixtures';
import config from '../../config';

/**
 * Groups all imports into one Fixture to extend test.
 */
type standardFixtures = {
    testTools: standardTestTools
    thinkHubTools: thinkHubTestTools
}

/**
 * Updates the Page Fixture with Cookies.
 * Adds the testTools Fixture
 * Adds the DSTools Fixture
 */

export const test = base.extend<standardFixtures>({
    page: async ({page, context}, use) => {
        await context.addCookies(COOKIES)
        await page.goto(config.homeUrl)
        await page.getByRole('textbox',{name: 'Username'}).fill(config.successfulLogin.username)
        await page.getByRole('textbox',{name: 'Password'}).fill(config.successfulLogin.password)
        await page.getByRole('button', {name: 'Submit'}).click()
        await use(page);
    },
    testTools: async ({page}, use) => {
        const testTools = new standardTestTools(page);
        await use(testTools);
    },
    thinkHubTools: async ({page, context}, use) => {
        const thinkHubTools = new thinkHubTestTools(page, context)
        await use(thinkHubTools)
    }
})
export { expect } from '@playwright/test'
