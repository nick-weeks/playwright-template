import type { Config } from "../types/config.type";

const defaultConfig: Config = {
	homeUrl: '',
	storyBookUrl: '',
	successfulLogin: {
		username: process.env['TEST_USER_EMAIL'] ?? '',
		password: process.env['TEST_USER_PASSWORD'] ?? '',
	},
	locale: process.env['LOCALE'] ?? 'GB',
}

export default defaultConfig;
