import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import DlElement from "dl-element";
import "@vitepress-demo-preview/component/dist/style.css";
import { globals, VPMyComponent } from "../vitepress";
import { RefreshBrowserScript } from "../utils/refreshBrowserScript";
import type { App } from "vue";

export default {
	extends: DefaultTheme,
	// 扩展默认主题
	Layout: () => {
		const props: Record<string, any> = {};
		// 获取 frontmatter
		const { frontmatter } = useData();

		// 添加自定义 class
		if (frontmatter.value && frontmatter.value.mLayoutClass) {
			props.class = frontmatter.value.mLayoutClass;
		}

		return h(DefaultTheme.Layout, props, VPMyComponent);
	},
	enhanceApp({ app }: { app: App }) {
		app.use(DlElement);

		globals.forEach(([name, Comp]) => {
			app.component(name, Comp);
		});

		app.provide("DEV", import.meta.env.MODE === "development");

		if (import.meta.env.MODE === "production") {
			if (!import.meta.env.SSR) {
				new RefreshBrowserScript();
			}
		}
	}
};
