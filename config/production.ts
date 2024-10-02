import type { Config } from '../types/config.type';

import defaultConfig from "./default";

export default function getProductionConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://www.thinkhub.com' ,
	}
}
