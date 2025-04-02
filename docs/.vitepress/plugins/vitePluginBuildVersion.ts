import { GitRevisionPlugin } from 'git-revision-webpack-plugin';

const gitRevisionPlugin = new GitRevisionPlugin();

export function GeneratVersion() {
	// 获取 Git 版本和哈希
	const version = gitRevisionPlugin.version();
	const hashCommit = gitRevisionPlugin.commithash();

	return {
		version,
		hashCommit,
	};
}

export function VitePluginBuildVersion() {
	return {
		name: 'vite-plugin-build-version',
		apply: 'build',
		generateBundle() {
			const versionInfo = GeneratVersion();

			(this as any).emitFile({
				type: 'asset',
				fileName: 'version.json',
				source: JSON.stringify(versionInfo, null, 2),
			});
		},
	} as const;
}
