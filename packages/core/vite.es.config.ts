import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';
import { includes } from 'lodash-es';
import dts from 'vite-plugin-dts';

function getDirectoriesSync(basePath: string) {
	const entries = readdirSync(basePath, { withFileTypes: true });

	return entries.reduce<Array<string>>((sum, entry) => {
		if (entry.isDirectory()) {
			sum.push(entry.name);
		}
		return sum;
	}, []);
}

export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: '../../tsconfig.build.json',
			outDir: 'dist/types',
		}),
	],
	build: {
		outDir: 'dist/es',
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'DlElement',
			fileName: 'index',
			formats: ['es'],
		},
		rollupOptions: {
			external: [
				'vue',
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/free-solid-svg-icons',
				'@fortawesome/vue-fontawesome',
				'@popperjs/core',
				'async-validator',
			],
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'style.css') {
						return 'index.css';
					}
					return assetInfo.name as string;
				},
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor';
					} else if (id.includes('/packages/hooks')) {
						return 'hooks';
					} else if (id.includes('/packages/utils')) {
						return 'utils';
					}

					for (const item of getDirectoriesSync('../components')) {
						if (includes(id, `/packages/components/${item}`))
							return item;
					}
				},
			},
		},
	},
});
