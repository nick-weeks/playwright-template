# playwright-skeleton

This is a simple setup for Playwright - It does not contain Docker or other installs and is designed for creating tests and easily starting a new project.

## Installation

If you don't have docker installed, you will need to [install Node.js and npm](https://nodejs.org/). 
You will also need to install Playwright and it's dependencies if you haven't already.
```bash
npx playwright install --with-deps
```
If you already have playwright installed on the device. Run `npm install` to install the correct dependencies.
```bash
npm install
```
## Running Tests

The tests can be run by running
```bash
npx playwright test
```

### Running a specific test
You can add `-g "<testname>"` allows for a specific test name. The following example with run the Page Opens test Eg:
```bash
 npx playwright test -g "Page Opens"
```
You can also use `-g "<partname>"` to run a specific group of tests. The following example will run all tests containing the word page. Eg:
```bash
npx playwright test -g "Page"
```

You can specify a file to test by adding the name of the file `<filename>` The following example will run all tests in the example.spec.ts file Eg:
```bash
npx playwright test example
```
You can use `--grep-invert "<testname>"` to specify tests that you do not want to run. This will run all tests except for the one specified. Like `-g` you can also use a part name to not run a group of tests. Eg:
```bash
npx playwright test --grep-invert "Page Opens"
npx playwright test --grep-invert "Page"
```

### Environment Variables 
Most test suites will require Environment Variables to run on the correct environment. To prevent error messages in the template defaults have been added to all configured variables. There are a number that are already configured. Explore the `/config` and `/secrets` folder to discover what variables exist. 
The two most common variables are `ENV` and `APP`
The `ENV` variable is used to select a config file and defaults to `develop` add the `ENV` variable when running tests will allow the user to change the environment the tests are run on. This example folder is all linked to the same site. 
The `APP` variable allows the user to switch between testing the application and usually styleguides. Adding a folder to the `/tests` folder will allow the user to add a new location for `APP` to test. 
```bash
ENV=develop APP=app npx playwright test
```

### Using Fixtures
This template comes with a collection of fixtures that allows the user to create tests easier. They also make the tests easier to read. The fixtures can be found in the fixtureClass.ts file in `/tests/shared/` 

Fixtures are added to a test page in the first line of the files:
```typescript
import { test, expect } from '../shared/testFixtures';
```

To use fixtures in your test, declare `testTools` in the async function. Then use `testTools.fixtureName` to add the fixture to your test. The fixtures will require instructions to run, this information will exist in the fixture file and can be seen in the help text. 
```typescript
test('Test Name', async({page, testTools}) => {
    await testTools.fixtureName("Example")
})
```
Working examples of fixtures exist in the example file in this template. Each fixture has been commented with full information on how they work and run. 

### Snapshots

Two of the most important fixtures are the `fullPageScreenshot()` and `locatorScreenshot` fixtures. These fixtures have been created to allow the user to run screenshot tests with all options correctly configured already. This includes a margin for error, continuing a test if a screenshot fails, masking all images on the page to prevent false fails.  

This example shows you how to take a fullpage screenshot. This will capture the entire webpage and not just the window. It is the main fixture used for Visual Regression
```typescript
test('Screenshot Example', async ({testTools}) => {
    await testTools.fullPageScreenshot('Example Screenshot Title')
})
```
This example shows you how to take a screenshot of a specific locator. This is useful when a webpage changes how it looks and only a specific location is useful. 
```typescript
test('Locator Screenshot Example', async ({testTools}) => {
    await testTools.locatorScreenshot('Footer', 'locatorScreenshot Title')
})
```
### Updating Snapshots
Snapshots can be updated when running tests. This will need to happen as the site changes and evolves. When a visual regression test fails. Confirm if the failure is due to a correct update or a bug. If the baseline image requires updating run the following command. 

```bash
npx playwright test --update-snapshots
```
