export const defaultNamespace = "dl";
export const defaultRequestPrefix = "/dl-mapData";

export const isProd = process.env.NODE_ENV === "production";
export const isDev = process.env.NODE_ENV === "development";
export const isTest = process.env.NODE_ENV === "test";

export const isClient = typeof window !== "undefined" && typeof document !== "undefined";
export const defaultWindow = isClient ? window : undefined;

const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
	const cache: Record<string, string> = Object.create(null);
	return ((str: string) => {
		const hit = cache[str];
		return hit || (cache[str] = fn(str));
	}) as T;
};

const camelizeRE = /-(\w)/g;
/**
 * 将字符串从连字符分隔的格式（kebab-case）转换为驼峰式命名（camelCase）
 * hello-world => helloWorld
 */
export const camelize: (str: string) => string = cacheStringFunction((str: string): string => {
	return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});
