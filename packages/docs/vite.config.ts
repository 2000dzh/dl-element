import { defineConfig } from 'vite';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{
				find: /^dl-element(\/(es|lib))?$/,
				replacement: path.resolve(__dirname, '../core/index.ts'),
			},
		],
	},
});
