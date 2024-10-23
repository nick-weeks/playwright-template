import type { Config } from '../types/config.type';

import defaultConfig from "./default";
/**
 * Imports the correct config for the Production Environment. This is live.
 */
export default function getProductionConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://playwright.dev/' , //The Live site url.
	}
}
