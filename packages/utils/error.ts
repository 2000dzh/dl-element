import { isString } from 'lodash-es';

class DlUIError extends Error {
	constructor(msg: string) {
		super(msg);
		this.name = 'DlUIError';
	}
}

export function throwError(scope: string, msg: string) {
	throw new DlUIError(`[${scope}]:${msg}`);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: Error | string, msg?: string) {
	if (process.env.NODE_ENV !== 'production') {
		const err = isString(scope)
			? new DlUIError(`[${scope}]:${msg}`)
			: scope;
		console.warn(err);
	}
}
