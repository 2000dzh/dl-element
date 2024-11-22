import { defineConfig } from 'vite';
import path from 'node:path';
import {
	VitePluginBuildVersion,
	GeneratVersion,
} from './vitePluginBuildVersion';

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		__version__: JSON.stringify(GeneratVersion()),
	},
	plugins: [VitePluginBuildVersion()],
	resolve: {
		alias: [
			{
				find: /^dl-element(\/(es|lib))?$/,
				replacement: path.resolve(__dirname, '../core/index.ts'),
			},
		],
	},
	server: {
		proxy: {
			'/dl-mapData': {
				target: 'https://2000dzh.github.io/dl-element',
				changeOrigin: true,
			},
		},
	},
});
