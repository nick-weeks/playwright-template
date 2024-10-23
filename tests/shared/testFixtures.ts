import { test as base } from '@playwright/test';
import { standardTestTools } from './fixtureClasses';
import { COOKIES } from '../../secrets/cookies';
import config from '../../config';

/**
 * Groups all imports into one Fixture to extend test.
 */
type standardFixtures = {
    testTools: standardTestTools
}

/**
 * Updates the Page Fixture with Cookies.
 * Adds the testTools Fixture
 */

export const test = base.extend<standardFixtures>({
    page: async ({page, context}, use) => {
        await context.addCookies(COOKIES)
        await page.goto(config.homeUrl)
        //if your site uses a popup credentials box for login. Uncomment the below code
        //await page.getByRole('textbox',{name: 'Username'}).fill(config.successfulLogin.username)
        //await page.getByRole('textbox',{name: 'Password'}).fill(config.successfulLogin.password)
        //await page.getByRole('button', {name: 'Submit'}).click()
        await use(page);
    },
    testTools: async ({page}, use) => {
        const testTools = new standardTestTools(page);
        await use(testTools);
    },
})
export { expect } from '@playwright/test'
