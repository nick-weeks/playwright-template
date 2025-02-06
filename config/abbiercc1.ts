import type { Config } from '../types/config.type';

import defaultConfig from './default';

/**
 * Imports the correct config when the ENV variable is set to 'develop'
*/
export default function getAbbieRcc1Config(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://abbie-rcc1.srt-development.network', //The develop URL
		storyBookUrl: '' //A second URl - Usually styleguide or storybook
	}
}
