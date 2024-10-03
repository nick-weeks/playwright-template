import { test, expect } from '../shared/testFixtures';
import config from '../../config';

test.describe('Thinkhub Footer Links', () => {
    test.describe('Cookie Policy', () => {
        test('Page Opens', async({page}) => {
            console.log(process.env['TEST_USER_EMAIL'])
            console.log(process.env['TEST_USER_PASSWORD'])
         //   await page.goto(config.homeUrl + '/cookie-policy')
         //   await expect(page).toHaveTitle('Think Hub | Cookie policy')
        })  
    })
    /*
    test.describe('Privacy Policy', () => {
        test('Page Opens', async({page}) => {
            await page.goto(config.homeUrl + '/privacy-policy')
            await expect(page).toHaveTitle('Think Hub | Privacy policy')
        })  
    })
    test.describe('Terms and Conditions', () => {
        test('Page Opens', async({page}) => {
            await page.goto(config.homeUrl + '/terms-and-conditions')
            await expect(page).toHaveTitle('Think Hub | Terms and conditions')
        })  
    })
    */
})
