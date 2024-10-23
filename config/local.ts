import type { Config } from "../types/config.type";

import defaultConfig from "./default";

/**
 * Imports the correct config for the Local Environment
 */

export default function getLocalConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://playwright.dev/' , //Local Url
	}
}
