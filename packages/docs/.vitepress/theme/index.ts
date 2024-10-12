import DefaultTheme from 'vitepress/theme';
import DlElement from 'dl-element';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import type { App } from 'vue';

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component('demo-preview', ElementPlusContainer);
		app.use(DlElement);
	},
};
