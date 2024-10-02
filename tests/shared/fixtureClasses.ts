import type { Page} from '@playwright/test'
import { expect } from '@playwright/test'

/**
 * standard tools for testing.
*/
export class standardTestTools {

/**
 * This is required for the page object to not close when accessing the class.
*/
constructor(public readonly page:Page){

}

/**
 * Takes a locator and checks that the count is greater than 0. Confirming it exists
 * Works if the locator exists more than once
 * @param {string} locator The page Locator. Including syntax
 */

async locatorExists(locator: string) {
    expect(await this.page.locator(locator).count()).toBeGreaterThan(0)
    console.log(locator + ' exists on page')
}

/**
 *  Checks the correct text exists on the page in the correct place. Case sensitive
 * @param {string} locator The Page Locator. Including syntax
 * @param {string} text The text to check exists
 * @param {number} count if the locator exists more than once. Counts start at 0 
*/
async checkText(locator: string, text: string, count?: number) {
    await expect(this.page.locator(locator).nth(count ?? 0)).toContainText(text)
    console.log(locator + ' exists on page containing ' + text)
}

/**
 * Clicks a link by it's text. Checks the new url and Page title are correct.
 * @param {string} text The text to find and click - Case sensitive - Must be exact.
 * @param {string} url a unique piece of the url to check. Try to avoid any symbols 
 * @param {string} pageTitle The new page title 
 */
async clickLinkByText(text: string, url:string, pageTitle: string ) {
    await this.page.getByRole('link', {name: text, exact: true}).click()
    await expect(this.page).toHaveURL(new RegExp('.*' + url + '.*'))
    await expect(this.page).toHaveTitle(pageTitle)
}

/**
 * 
 * @param {string} locator The Page Locator. Including syntax
 * @param {string} url a unique piece of the url to check. Try to avoid any symbols 
 * @param {string} pageTitle The new page title
 */
async clickLinkByLocator(locator: string, url:string, pageTitle: string ) {
    await this.page.locator(locator).click()
    await expect(this.page).toHaveURL(new RegExp('.*' + url + '.*'))
    await expect(this.page).toHaveTitle(pageTitle)
}

/**
 * Clicks a button. This shouldn't be used for navigation
 * @param {string} text The text to find and click - Case sensitive - Must be exact.
 */
async clickByText(role: Parameters<typeof this.page.getByRole>[0], text:string, num?:number) {
    await this.page.getByRole(role, {name: text, exact: true}).nth(num ?? 0).click()
}

/**
 * Clicks a button. This shouldn't be used for navigation
 * @param {string} locator The Page Locator. Including Syntax
 */
async clickByLocator(locator:string) {
    await this.page.locator(locator).click()
}

/**
 * Takes a fullpage Screenshot and compares it to the previous Screenshot.
 * Will fail if no screenshot exists and create a screenshot
 * run --update-snapshots to update
 * Files will be stored in a folder named after the env variable
 * @param {string} ScreenshotTitle A unique Screenshot File name
 */
async fullPageScreenshot(ScreenshotTitle:string) {
    await this.page.waitForLoadState('domcontentloaded')
    const env = process.env['ENV'] ?? 'develop'
    await expect.soft(this.page)
    .toHaveScreenshot([env + '-snapshots', ScreenshotTitle +'.png'],{fullPage: true, maxDiffPixelRatio: 0.1 })
    //console.log('Screenshot ' + ScreenshotTitle + ' Successful')
}

/**
 * Takes a Screenshot of a particular locator and compares it to the previous Screenshot.
 * Will fail if no screenshot exists and create a screenshot
 * run --update-snapshots to update
 * Files will be stored in a folder named after the env variable
 * @param {string} locator The Page Locator. Including syntax 
 * @param {string} ScreenshotTitle A unique Screenshot File name
 */
async locatorScreenshot(locator:string,ScreenshotTitle:string) {
    const env = process.env['ENV'] ?? 'qa'
    await expect.soft(this.page.locator(locator)).toHaveScreenshot([env + '-snapshots', ScreenshotTitle +'.png'])
    //console.log('Screenshot of ' + locator + ' Successful')
}


/**
 * Fills in an input based on the information provided
 * @param {string} locator The Page Locator, Including syntax 
 * @param {string} text The text to enter.  
 */
async fillTextBox(locator:string,text:string) {
    await this.page.locator(locator).fill(text)
}

/**
 * Selects an option from a `select` dropdown. This won't work on customer dropdowns
 * @param {string} locator The Page Locator, Including syntax 
 * @param {string} text The text to select from the dropdown. 
 */
async selectFromDropdown(locator:string,text:string) {
    await this.page.locator(locator).selectOption(text)
}

/**
 * Clicks a checkbox by locator. Careful of labels. 
 * @param {string} locator The Page Locator. Including syntax
 */
async clickCheckBoxByLocator(locator:string) {
    await this.page.locator(locator).check()
    await expect(this.page.locator(locator)).toBeChecked()
}

/**
 * Checks the value of a Input Box. This is not the same as normal text checks.
 * @param {string} locator The Page Locator. Including syntax
 * @param {string} text The text expected in the Input Box. 
 */
async checkInputText(locator:string, text:string) {
    await expect(this.page.locator(locator)).toHaveValue(text)
    console.log(locator + 'contains text ' + text)
}

async textExistOnPage(text:string) {
    await this.page.getByText(text).isVisible()
}

async clickByText__AnyRole(text:string,
    role: Parameters<typeof this.page.getByRole>[0] ,url?:string,pageTitle?:string ) {
    await this.page.getByRole(role, {name:text}).click()
    if(url && pageTitle) {
    await expect(this.page).toHaveURL(url)
    await expect(this.page).toHaveTitle(pageTitle)
    }
}
}
