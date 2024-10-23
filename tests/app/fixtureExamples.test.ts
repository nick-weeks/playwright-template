/**
 * To use the predefined fixtures. you must import test & expect from the below folder.
 * This differs from the standard install.
 * config is imported from the config folder. This is for any variables declared before execution.
*/
import { test, expect } from '../shared/testFixtures';
import config from '../../config';

test.beforeEach(async ({page, testTools}) => {
    await page.goto('https://www.w3schools.com')
    await expect(page).toHaveTitle( //Ensure the correct page has loaded by checking the title.
        'W3Schools Online Web Tutorials'
    )
    /**
     * Click by Locator Example is in beforeEach to close the cookie banner.
     * clickByLocator shouldn't be used for navigation.
     */
    await testTools.clickByLocator('#accept-choices') 
})

/* The below describe block gives examples of all the fixtures available and shows them in use.
   I've tried to make them all work on W3schools homepage. Any Navigation will be noted.
 */
test.describe('Fixture Examples', () => {

    /**
     * Check Input Text
     * Navigates to HTML forms page on w3schools
     * Takes Locator and Text to check as inputs.
     * Checks the text exists in the locator provided.
     * On success will output to the console. 
     */
    test('Check Input Text', async({page, testTools}) => {
        await page.goto('https://www.w3schools.com/html/html_forms.asp')
        await testTools.checkInputText('#fname','John')
    }) 

    /**
     * Check Text
     * Use this to ensure that specific text on the page is correct.
     * This is useful for testing a page and also ensure a page has loaded.
     * Takes a Locator and the Text to check. 
     * Optionally you can add a number if the text appears multiple times on the page.
     * Checks the text on the page matches the input provided. 
     * On success will output to the console.
     */
    test('Check Text', async({testTools}) => {
        await testTools.checkText('.learntocodeh1','Learn to Code')
    }) 

    /**
     * Clicks on an object using it's text to locate it.
     * This should not be used for navigation as it has no checks to ensure page load. 
     * Takes a role and the Text to check. Text must be exact and is case-sensitive
     * Common roles are button & link.
     * Optionally a number can be added if the text appears multiple times on the page.
     * The number will default to the first iteration (0) if it is not entered.
     */
    test('Click with text', async({page,testTools}) => {
        await testTools.clickByText('button','Tutorials')
    }) 

    /**
     * Clicks on a checkbox using the checkbox locator to locate it.
     * Example Navigates to the w3Schools signup form. 
     * Takes a Locator as input.
     * Example locator uses '>' to find a locator based on it's parent.
     * e.g checkBoxClassName > checkBox
     */
    test('Click Checkbox By Locator', async({page,testTools}) => {
        await page.goto('https://profile.w3schools.com/signup')
        await testTools.clickCheckBoxByLocator('.SignUpForm_email_consent_checkbox__O3Dxt > input')
    }) 

    /**
     * Clicks a link based on its Locator and ensures the correct page loads.
     * Takes a Locator, a URL and the Page Title as inputs. 
     * Uses the Locator to click a link. This must always be a link element.
     * If the element is not a link. Use Click Link By Locator - any Role.
     * Once the navigation completes checks the URL & title match the input from the user.
     */
    test('Click Link By Locator', async({page,testTools}) => {
        await testTools.clickLinkByLocator(
            '.learntocodeh4 > .ga-fp',
            'https://www.w3schools.com/where_to_start.asp',
            'W3Schools - How To Become a Web Developer (Complete Beginners Getting Started With Web Development)'
        )
    }) 

    /**
     * Clicks a link based on what it says. Ensures the correct page loads.
     * Takes a Text, URL and Page Title as inputs. 
     * Text is case sensitive and should be exactly what is displayed on the site.
     * The text must be a link and not a different type of object e.g Button
     * Clicks the Link, Once navigation completes uses the URL & Title to ensure the correct page loads
     */
    test('Click Link By Text', async({testTools}) => {
        await testTools.clickLinkByText(
            'Not Sure Where To Begin?',
            'https://www.w3schools.com/where_to_start.asp',
            'W3Schools - How To Become a Web Developer (Complete Beginners Getting Started With Web Development)'
        )
    })

    /**
     * The below block shows two uses of the Click Link By Locator - Any Role 
     * There are a lot of roles available and they differ on each site.
     * This tool is designed to be used for clicking and remaining on a page or navigation. 
     * Takes Text and Role as default. These must be included.
     * URL and Title can also be added to ensure navigation is correct.
     * This is a versatile tool and should be used whenever a standard tool doesn't fit.
     */
    test.describe('Click Link By Locator - Any Role', () => {
        //Example with no navigation.
        test('No Navigation', async ({testTools}) => {
            await testTools.clickLinkByText__AnyRole(
                'Tutorials',
                'button'
            )
        })
        //Example with navigation.
        test('Navigation', async ({testTools}) => {
            await testTools.clickLinkByText__AnyRole(
                'Not Sure Where To Begin?',
                'link',
                'https://www.w3schools.com/where_to_start.asp',
                'W3Schools - How To Become a Web Developer (Complete Beginners Getting Started With Web Development)'
            )
        })
    })

    /**
     * Used to fill in a textbox or inputbox.
     * Takes a Locator and the text to input.
     * Can be used to fill in a password. This should be stored in .env declared and used via config.
     */
    test('Fill Textbox', async ({testTools}) => {
        await testTools.fillTextBox('#tnb-google-search-input','Test String')
    })

    /**
     * Used to take a screenshot of the page at the current stage of the test.
     * Uses Fullscreen mode. Has a threshold of 0.1 and tests will always continue if the screenshot fail.
     * Uses the ENV variable and has a Title parameter to ensure all screenshots have unique names.
     * This should be used when building visual regression.
     * Use the --update-snapshots command when running tests to update-snapshots.
     * Will always fail on first use as it will have nothing to compare with.
     */
    test('Full Page Screenshot', async({ testTools }) => {
        await testTools.fullPageScreenshot('Test Page Screenshot')
    })

    /**
     * Finds and ensures a locator exists on a page. 
     * Useful for ensuring a page has loaded an element before using it.
     * Takes a Locator as a parameter.
     * Uses count > 0 to ensure at least one instance exists on the page.
     * Outputs to console that locator exists on the page.
     */
    test('Locator Exists', async ({testTools}) => {
        await testTools.locatorExists('.learntocodeh1')
    })

    /**
     * Used to take a screenshot of a location on the page at the current stage of the test.
     * Has a threshold of 0.1 and tests will always continue if the screenshot fail.
     * Takes a Locator and a Title as parameters
     * Uses the ENV variable and Title parameter to ensure all screenshots have unique names.
     * This should not be used when building visual regression.
     * Use the --update-snapshots command when running tests to update-snapshots.
     * Will always fail on first use as it will have nothing to compare with.
     */
    test('Locator Screenshot', async ({testTools}) => {
        await testTools.locatorScreenshot('.learntocodeh1','Locator Screenshot test')
    })

    /**
     * I have had to navigate to a different site to find a version of this that worked.
     * This selects an option in a dropdown.
     * Takes a Locator and an Option as parameters.
     * Option should be an option in the dropdown.
     * The locator for this test uses Xpath.
     * Xpath should only be used when no other options exists.
     */
    test('Select from Dropdown', async ({testTools,page}) => {
        await page.goto('https://www.html.am/html-codes/forms/html-select-lists.cfm')
        await testTools.clickByText('button','Consent')
        await testTools.selectFromDropdown('//div[1]/article/table[1]/tbody/tr[2]/td[2]/select','Papaya')
    })

    /**
     * This tool checks that text exists on the page.
     * Similar to the Locator exists. This is good for ensuring the page has loaded. 
     * This takes Text as a parameter.
     * Checks the Text is Visible on the page.
     */
    test('Text Exists on Page', async ({testTools}) => {
        await testTools.textExistOnPage('Learn to Code')
    })
})
