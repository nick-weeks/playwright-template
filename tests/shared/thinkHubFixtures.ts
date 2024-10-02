import type { Page, BrowserContext } from '@playwright/test'
import { expect } from '@playwright/test'
import { standardTestTools } from './fixtureClasses'
import config from '../../config'

//standard tools for testing.
export class thinkHubTestTools {
    private readonly testTools: standardTestTools
//This is required for the page object to not close when accessing the class.
constructor(public readonly page:Page, public readonly context: BrowserContext){
    this.testTools = new standardTestTools(page)
    }
    async loginExpertAdvice() {
        await this.page.locator('#user_email').fill(config.successfulLogin.username)
        await this.page.locator('#user_password').fill(config.successfulLogin.password)
        await this.page.locator('#sign-in-submit-button').click()
        await expect(this.page).toHaveURL('https://expertadvice-dev.rs-thinkhub.com/hc/en-gb')
        await expect(this.page).toHaveTitle('RS Think Hub | What the Expert Says')
        await this.page.getByRole('button', {name: 'Close consent Widget'}).click()
    }
}
