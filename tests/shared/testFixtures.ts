import { test as base } from '@playwright/test';
import { standardTestTools } from './fixtureClasses';
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
        await page.goto(config.homeUrl)
        if (useSessionStorage) {
        await page.evaluate(() => {
            sessionStorage.setItem('dashboard.authToken','eyJhbGciOiJIUzI1NiJ9.eyJhIjpbInJlcG9ydHMuZXZlbnRfYWxlcnQiLCJ0YXJnZXQudmRyX2RhdGFfZGVsZXRlIiwiYWxlcnRzLm1hbmFnZSIsInJlcG9ydHMudmVzc2VsX2hpc3RvcnkiLCJvYnNlcnZlciIsImdlb2ZlbmNlcy5yZXN0cmljdGVkIiwiaW5zcGVjdGlvbl9jYWxlbmRhciIsIndhdGNobGlzdC5tYW5hZ2UiLCJjb21tcy5tYW5hZ2UiLCJjYXRjaCIsImV2ZW50cyIsImFsZXJ0cy5hc3NpZ25lZSIsInN5c3RlbS1tYW5hZ2VtZW50IiwidGFyZ2V0cy52ZHJfZGF0YV9kZWxldGUiLCJ0YWdzIiwiYWxlcnRzIiwiZ3JvdXBzLm1hbmFnZSIsImFsZXJ0cy5hc3NpZ25lciIsInJhZGFyLnN5c3RlbSIsImFsZXJ0cy5jbG9zZSIsInVzZXJzLmF1ZGl0IiwiYWxlcnRzLndlYXRoZXIiLCJyZXBvcnRzLmNwdWUiLCJzZW5zb3JzLm1hbmFnZSIsInJlcG9ydHMuZWxvZyIsImNvbW1zIiwidmF0b25zIiwiZmlsdGVycy52ZXNzZWxzIiwiZmlsdGVycy5zeXN0ZW0iLCJteS1wcm9maWxlIiwidGFyZ2V0cyIsInVzZXJzLmFjdGl2ZV91c2VycyIsInRyYW5zY2VpdmVycyIsImFnZW5jaWVzLm1hbmFnZSIsImluc3RhbGxhdGlvbiIsImluc3BlY3Rpb25fY2FsZW5kYXIubWFuYWdlIiwiY29ubmVjdCIsImhlYWx0aCIsInJlcG9ydHMubG9naW5fYWN0aXZpdHkiLCJyZXBvcnRzLm1hbmFnZSIsInBhbGV0dGVzLnN5c3RlbSIsInJhZGFyIiwiY29tbXMubWVzc2FnZSIsInVzZXJzLm1hbmFnZSIsImNjdHYubWFuYWdlIiwicmVwb3J0cyIsIndhdGNobGlzdC5yZXN0cmljdGVkIiwiY2F0Y2gubWFuYWdlIiwiY29tbXMucmVjb3JkaW5ncyIsInBhbGV0dGVzIiwiaW5zcGVjdGlvbnMiLCJyZXBvcnRzLnRyYWZmaWMiLCJyZXBvcnRzLndjcGZjIiwidGFyZ2V0cy5jaGFuZ2VfcmVxdWVzdHMiLCJlbG9nIiwiZWxvZy5lZGl0IiwiaW5zcGVjdGlvbnMubWFuYWdlIiwiY29tbXMucmFkaW8iLCJyZXBvcnRzLmFsZXJ0cyIsInJlcG9ydHMuYWxlcnRfc3VtbWFyeSIsIm9ic2VydmVyLm1hbmFnZSIsImxpY2VuY2UiLCJsaWNlbmNlLm1hbmFnZSIsImFsZXJ0cy5hc3NldHMiLCJmaWx0ZXJzLmFsZXJ0cyIsImFsZXJ0cy5zaG93X3Jlc29sdmVkIiwicmVwbGF5IiwidXNlcnMiLCJyZXBvcnRzLnNjaGVkdWxlZCIsImdlb2ZlbmNlcy5tYW5hZ2UiLCJyZXBvcnRzLnZlc3NlbF90cmFmZmljIiwiYWxlcnRzLm15X2JhdGNoX2Nsb3NlIiwid2F0Y2hsaXN0IiwiYWxlcnRzLnNob3dfcmVzb2x2ZWRfZWxvZyIsInJlcG9ydHMuY2F0Y2hfZWZmb3J0IiwiY29uZmlndXJhdGlvbiIsImVsb2cudXN2IiwiY2N0diIsInJlcG9ydHMuc2F0ZWxsaXRlIiwic3lzdGVtLW1hbmFnZW1lbnQuZ2VhciIsInRhZ3MubWFuYWdlIiwicmVwb3J0cy4zMF9kYXlzIiwicmFkYXIubWFuYWdlIiwiYWxlcnRzLmFjdGlvbnMiLCJ0cmFuc2NlaXZlcnMubWFuYWdlIiwiYWxlcnRzLmJhdGNoX2Nsb3NlIiwiZ3JvdXBzIiwiYWdlbmNpZXMiLCJmaWx0ZXJzIiwiYXRvbnMiLCJ2ZXNzZWwtdHJhY2tzIiwiYWxlcnRzLnJlYXNzaWduZXIiLCJyZXBvcnRzLnZlc3NlbCIsImNvbmZpZ3VyYXRpb24uZ2VvZmVuY2UtZGVmYXVsdHMiLCJzZW5zb3JzIiwiZ2VvZmVuY2VzIiwiZGF0YS1zaGFyaW5nIl0sInIiOiJzeXNhZG1pbiIsImwiOiJlbiIsImV4cCI6MTczODc5MDkxMCwidSI6Im5pY2t3In0.Qjt9-54xi1u631omQxJsgia5GXeE7nPlYR1_BinUaHY')
        })
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
