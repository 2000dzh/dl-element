import { isString } from 'lodash-es';
import { isProd } from './general.ts';

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
	if (isProd) {
		const err = isString(scope)
			? new DlUIError(`[${scope}]:${msg}`)
			: scope;
		console.error(err);
	}
}
