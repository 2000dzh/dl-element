/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// vitest 类型问题
// https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport

// 无法识别 <slot /> TypeError: Cannot read properties of null (reading 'isCE')
// https://stackoverflow.com/questions/72036673/typeerror-cannot-read-properties-of-null-reading-isce-custom-component-li
// https://github.com/vuejs/core/issues/4344
// https://cloud.tencent.com/developer/ask/sof/106913760
// 我的解决方案删除 .yaml node_modules 重新安装依赖

export default defineConfig({
	plugins: [vue(), vueJsx()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
});