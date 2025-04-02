declare global {
	const process: {
		env: {
			NODE_ENV: string;
		};
	};

	const PROD: boolean;
	const DEV: boolean;
	const TEST: boolean;
}

export {};
