import type { Config } from "../types/config.type";

import defaultConfig from "./default";

export default function getLocalConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://thinkhub.local' ,
	}
}
