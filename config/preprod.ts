import type { Config } from "../types/config.type";

import defaultConfig from "./default";
/**
 * Imports the correct Config for a Preproduction/ Non-production environment
 */
export default function getPreProdConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://playwright.dev/' , //Preprod, nonprod environment Url
	}
}
