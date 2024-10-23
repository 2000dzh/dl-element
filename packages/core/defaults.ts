import { each } from 'lodash-es';
import echarts from './echarts';
import type { App, Plugin } from 'vue';

export default function makeInstaller(components: Array<Plugin>) {
	const installer = (app: App) => {
		each(components, (c) => app.use(c));

		app.config.globalProperties.$echarts = echarts;
	};

	return installer as Plugin;
}
