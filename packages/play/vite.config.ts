import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
  resolve: {
		alias: [
			{
				find: /^dl-element(\/(es|lib))?$/,
				replacement: path.resolve(__dirname, '../core/index.ts'),
			}
		],
	},
	// server: {
	// 	proxy: {
	// 		'/dl-mapData': {
	// 			target: 'https://2000dzh.github.io/dl-element',
	// 			changeOrigin: true,
	// 		},
	// 	},
	// },
});
