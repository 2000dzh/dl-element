import { projRoot } from './paths';
import type { ProjectManifest } from '@pnpm/types';

export const excludeFiles = (files: Array<string>) => {
	const excludes = [
		'node_modules',
		'test',
		'mock',
		'gulpfile',
		'dist',
		'docs',
		'play',
		'build',
    'coverage',
    // 'theme',

    // 暂时排除
    // 'map',
    'ring',
    'tour',
    // 'seamless-scroll'
	];

	return files.filter((path) => {
		const position = path.startsWith(projRoot) ? projRoot.length : 0;
		return !excludes.some((exclude) => path.includes(exclude, position));
	});
};

export const getPackageManifest = (pkgPath: string) => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	return require(pkgPath) as ProjectManifest;
};

export const getPackageDependencies = (
	pkgPath: string
): Record<'dependencies' | 'peerDependencies', Array<string>> => {
	const manifest = getPackageManifest(pkgPath);
	const { dependencies = {}, peerDependencies = {} } = manifest;

	return {
		dependencies: Object.keys(dependencies),
		peerDependencies: Object.keys(peerDependencies),
	};
};
