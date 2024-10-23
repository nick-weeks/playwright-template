//All set up is configured on this page. All config files are imported including those from .env
//Based on the ENV variable used, the correct config will be used for the test suite.
import getDevelopConfig from "./config/develop";
import getLocalConfig from "./config/local";
import getPreProdConfig from "./config/preprod";
import getProductionConfig from "./config/production";

//dotenv and path are used and imported in this file.
import dotenv from 'dotenv';
import path from 'path';

import type { Config } from './types/config.type'; //imports config types
const environment = process.env['ENV'] ?? 'develop'; //sets environment to ENV variable or develop
const isCI = !!process.env.CI; //Checks if the environment is CI

if(!isCI) { //import .env if environment is not CI. If it is secrets should be stored in a vault.
// Import the environment variables from the .env file in the tests folder
dotenv.config({ path: './secrets/' + environment + '.env' });
// Import the environment variables from the .env file in the root folder
dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env')});
}
/**
 * Gets the config based on the environment variables.
 * 
 * @returns {Config} Config object
 * 
 * @throws {Error} If the environment is not supported
 */
function getConfig(): Config {
	switch (environment) {
		case 'production':
			return getProductionConfig();
		case 'preprod':
			return getPreProdConfig();
		case 'develop':
			return getDevelopConfig();
		case 'local':
			return getLocalConfig()
		default:
			throw new Error(`Environment ${environment} is not supported`);
	}
}

// Export the config
const config = getConfig();
export default config;
