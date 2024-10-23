/**
 * This page is used to export the types used by all the config files. 
 * Any extra variables that are required in the config must be declared here and a type assigned.
 */
export type Config = {
	homeUrl: string;
	storyBookUrl: string;
	successfulLogin: {
		username: string;
		password: string;
	};
}
