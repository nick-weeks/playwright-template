import { test, expect } from '../../../shared/testFixtures';
import config from '../../../../config';


//It's probably worth splitting the 'New & Back' Tests into 'New', 'Back' & 'Cancel'


test.beforeEach(async ({ page, navigationMap }) => {
    const Map = navigationMap.Settings.users
    await page.goto(`${config.homeUrl}${Map.urlPath}`)
})

test.describe('Settings - Users', () => {
        test('Users Loads as Expected', async ({ testTools, navigationMap }) => {
            const Map = navigationMap.Settings.users
            await testTools.checkText(Map)
            await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Users'})
        });

        test.describe('My Profile', () => {
            test('My Profile Works as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                const labels = ['Username', 'First Name', 'Last Name', 'Role', 'Group', 'Language']
                await testTools.clickLinkByText(Map.myProfile)
                await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'My Profile', nth: 1})
                await testTools.checkText({locator: '.SubsectionHeader', navigationText: 'User Details'})

                await Promise.all(
                    labels.map((label, index) => 
                        testTools.checkText({locator: '.Field__label', navigationText: label, nth: index})
                    )
                )
            })
        })
        test.describe('Users', () => {
            test('Users Loads as Expected', async ({testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.users)
                await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Users', nth: 1})
            })
            test('New User Button & Back Button work as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.users)
                await testTools.clickLinkByText__AnyRole('New User','button','/new')
                await testTools.clickByText('button', 'BACK')
                await testTools.locatorExists('.Dialog__dialog')
                await testTools.clickLinkByText__AnyRole('Yes', 'button', '/settings/users/list')
            })
        })
        test.describe('Groups', () => {
            test('Groups Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.groups)
                await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Groups', nth: 1})
            })
            test('New Group Button & Back Button work as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools. clickLinkByText(Map.groups)
                await testTools.clickLinkByText__AnyRole('New Group', 'button', '/new')
                await testTools.clickByText('button', 'BACK')
                await testTools.locatorExists('.Dialog__dialog')
                await testTools.clickLinkByText__AnyRole('Yes', 'button', 'settings/users/groups')
            })

        })
        test.describe('Agency', () => {
            test('Agency Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.Agency)
                await testTools.checkText({locator: '.PageHeader__title-text', navigationText: 'Agency', nth: 1})
            })
            test('Add New Agency works as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.Agency)
                await testTools.clickByText('button', 'Add New')
                await testTools.locatorExists('.Dialog__dialog')
                await testTools.checkText({ locator: '.Dialog__title', navigationText: 'New Agency'})
                await testTools.clickByText('button', 'Cancel')
            })
            test('Add New Agency A Members works as expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.Agency)
                await testTools.clickByText('button', 'Add New', 1)
                await testTools.locatorExists('.Dialog__dialog')
                await testTools.checkText({ locator: '.Dialog__title', navigationText: 'Add Agency Member'})
                await testTools.clickByText('button', 'Cancel')
            })
        })
        test.describe('User Audit', () => {
            test('User Audit Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.userAudit)
                await testTools.checkText({ locator: '.PageHeader__title-text', navigationText: 'User Audit', nth: 1})
            })
        })
        test.describe('Active Users', () => {
            test('Active Users Loads as Expected', async ({ testTools, navigationMap}) => {
                const Map = navigationMap.Settings.users
                await testTools.clickLinkByText(Map.activeUsers)
                await testTools.checkText({ locator: '.PageHeader__title-text', navigationText: 'Active Users', nth: 1})
            })
        })
});