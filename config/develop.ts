import type { Config } from '../types/config.type';

import defaultConfig from './default';

export default function getDevelopConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://app.dev.rs-thinkhub.com',
		storyBookUrl: 'https://app.dev.rs-thinkhub.com/storybook'
	}
}
