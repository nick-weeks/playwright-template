/**
 * To use the predefined fixtures. you must import test & expect from the below folder.
 * This differs from the standard install.
 * config is imported from the config folder. This is for any variables declared before execution.
*/
import { test, expect } from '../shared/testFixtures';
import config from '../../config';

/**
 * test.beforeEach is used to run any steps that are repeated for each test in the file.
 * Normally this will navigate to a specific page.
 * The homepage is automatically navigated to as part of 'page' More info in /shared/testfixtures.
 */
test.beforeEach(async ({page}) => {
    await page.goto(config.homeUrl) //Go to the url defined in config.homeUrl
    await expect(page).toHaveTitle( //Ensure the correct page has loaded by checking the title.
        'Fast and reliable end-to-end testing for modern web apps | Playwright'
    )
})

/**
 * Tests should always be wrapped in a describe group. 
 * This helps with reporting and allows tests to share a name across the project.
 */
test.describe('Used to describe a group of tests', () => {
        /**
         * test is where any instructions for testing are added.
         * the format is test('test name', async({config}) => {})
         * Page, testTools, context are all examples of config
         * The below tests don't show anything new. But match the tests in the README.
         */
        test('Page Opens', async({page}) => {
            await page.goto(config.homeUrl)
            await expect(page).toHaveTitle(
                'Fast and reliable end-to-end testing for modern web apps | Playwright'
            )
        })  
        test('Page Closes', async({page, testTools}) => {
            await page.goto(config.homeUrl)
            await expect(page).toHaveTitle(
                'Fast and reliable end-to-end testing for modern web apps | Playwright'
            )
        })  
})


