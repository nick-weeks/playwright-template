import type { Config } from "../types/config.type";

import defaultConfig from "./default";

export default function getPreProdConfig(): Config {
	return {
		...defaultConfig,
		homeUrl: 'https://app.nonprod.rs-thinkhub.com' ,
	}
}
