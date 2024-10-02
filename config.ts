import getDevelopConfig from "./config/develop";
import getLocalConfig from "./config/local";
import getPreProdConfig from "./config/preprod";
import getProductionConfig from "./config/production";

import dotenv from 'dotenv';
import path from 'path';

import type { Config } from './types/config.type';
const environment = process.env['ENV'] ?? 'develop';
const isCI = !!process.env.CI;

if(!isCI) {
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
