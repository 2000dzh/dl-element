import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { readdir, readdirSync } from 'node:fs';
import { includes, delay, defer } from 'lodash-es';
import shell from 'shelljs';
import dts from 'vite-plugin-dts';
import terser from '@rollup/plugin-terser';
import myHooks from './hooksPlugin';

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

const TRY_MOVE_STYLES_DELAY = 800 as const;

function getDirectoriesSync(basePath: string) {
	const entries = readdirSync(basePath, { withFileTypes: true });

	return entries.reduce<Array<string>>((sum, entry) => {
		if (entry.isDirectory()) {
			sum.push(entry.name);
		}
		return sum;
	}, []);
}

function moveStyles() {
	readdir('./dist/es/theme', (err) => {
		if (err) {
			delay(moveStyles, TRY_MOVE_STYLES_DELAY);
			return;
		}
		defer(() => shell.mv('./dist/es/theme', './dist'));
	});
}

export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: '../../tsconfig.build.json',
			outDir: 'dist/types',
		}),
		terser({
			compress: {
				sequences: isProd,
				arguments: isProd,
				drop_console: isProd && ['log'],
				drop_debugger: isProd,
				passes: isProd ? 4 : 1,
				global_defs: {
					'@DEV': JSON.stringify(isDev),
					'@PROD': JSON.stringify(isProd),
					'@TEST': JSON.stringify(isTest),
				},
			},
			format: {
				semicolons: false,
				shorthand: isProd,
				braces: !isProd,
				beautify: !isProd,
				comments: !isProd,
			},
			mangle: {
				toplevel: isProd,
				eval: isProd,
				keep_classnames: isDev,
				keep_fnames: isDev,
			},
		}),
		myHooks({
			rmFiles: ['./dist/es', './dist/theme', './dist/types'],
			afterBuild: moveStyles,
		}),
	],
	build: {
		outDir: 'dist/es',
		// 开启代码混淆
		minify: false, // 这里关闭默认混淆,自己用插件实现
		// 启用/禁用 CSS 代码拆分
		cssCodeSplit: true,
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

					if (
						assetInfo.type === 'asset' &&
						/\.(css)$/i.test(assetInfo.name!)
					) {
						return 'theme/[name].[ext]';
					}
					return assetInfo.name as string;
				},
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor';
					} else if (id.includes('/packages/hooks')) {
						return 'hooks';
					} else if (
						id.includes('/packages/utils') ||
						id.includes('plugin-vue:export-helper')
					) {
						return 'utils';
					}

					for (const item of getDirectoriesSync('../components')) {
						if (includes(id, `/packages/components/${item}`))
							return item;
					}

					console.log(id);
				},
			},
		},
	},
});
