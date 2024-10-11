import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readFile } from 'node:fs';
import shell from 'shelljs';
import { defer, delay } from 'lodash-es';
import vue from '@vitejs/plugin-vue';
import terser from '@rollup/plugin-terser';
import { compression } from 'vite-plugin-compression2';
import myHooks from '../hooksPlugin';

const TRY_MOVE_STYLES_DELAY = 800 as const;

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

function moveStyles() {
	readFile('./dist/umd/index.css.gz', (err) => {
		if (err) {
			delay(moveStyles, TRY_MOVE_STYLES_DELAY);
			return;
		}
		defer(() => shell.cp('./dist/umd/index.css', './dist/index.css'));
	});
}

export default defineConfig({
	plugins: [
		vue(),
		compression({
			include: /.(cjs|css)$/i,
		}),
		terser({
			compress: {
				drop_console: ['log'],
				drop_debugger: true,
				passes: 4,
				global_defs: {
					'@DEV': JSON.stringify(isDev),
					'@PROD': JSON.stringify(isProd),
					'@TEST': JSON.stringify(isTest),
				},
			},
		}),
		myHooks({
			rmFiles: ['./dist/umd', './dist/index.css'],
			afterBuild: moveStyles,
		}),
	],
	build: {
		outDir: 'dist/umd',
		// 开启代码混淆
		minify: false, // 这里关闭默认混淆,自己用插件实现
		lib: {
			entry: resolve(__dirname, '../index.ts'),
			name: 'DlElement',
			fileName: 'index',
			formats: ['umd'],
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'style.css') {
						return 'index.css';
					}
					return assetInfo.name as string;
				},
			},
		},
	},
});
