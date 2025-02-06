import type { Config } from "../types/config.type";

/**
 * The Config page used to declare any default variables.
 * These are defined in /types/config.type.ts from the root folder. 
 * If a variables value differs based on the environment then it should be declared as ''
 */


const defaultConfig: Config = {
	homeUrl: '', //Sets homeUrl to blank as default
	storyBookUrl: '', //Sets a second Url to blank as default. In this example it is the url for StoryBook
	successfulLogin: {
		username: process.env['TEST_USER_EMAIL'] ?? 'Sysadmin', //Either sets username to the Email defined in the relevant .env file or sets it to blank
		password: process.env['TEST_USER_PASSWORD'] ?? 'password', //Either sets Password to the Password defined in the relevant .env file or sets it to blank
	},
}

export default defaultConfig;
