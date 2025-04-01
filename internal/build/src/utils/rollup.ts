import { dePackage, getPackageDependencies, createLogFile } from "@dl-element/build-utils";
import type { OutputOptions, RollupBuild } from "rollup";

export const generateExternal = async (options: { full: boolean }) => {
	const { dependencies, peerDependencies } = getPackageDependencies(dePackage);

	return (id: string) => {
		const packages: string[] = [...peerDependencies];
		if (!options.full) {
			packages.push("@vue", ...dependencies);
		}

		createLogFile("依赖.txt", packages.join("\n"));

		return [...new Set(packages)].some(pkg => id === pkg || id.startsWith(`${pkg}/`));
	};
};

export function writeBundles(bundle: RollupBuild, options: Array<OutputOptions>) {
	return Promise.all(options.map(option => bundle.write(option)));
}

export function formatBundleFilename(name: string, minify: boolean, ext: string) {
	return `${name}${minify ? ".min" : ""}.${ext}`;
}
