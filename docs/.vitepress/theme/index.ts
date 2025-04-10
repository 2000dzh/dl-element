import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import DlElement from "dl-element";
import { globals, VPMyComponent } from "../vitepress";
import { useTypingAnimation } from "../vitepress/composables/typing-animation";
// import { RefreshBrowserScript } from "../utils/refreshBrowserScript";
import type { App } from "vue";

export default {
	extends: DefaultTheme,
	setup() {
		// 添加元素淡入动画
		useTypingAnimation();
	},
	// 扩展默认主题
	Layout: () => {
		const props: Record<string, any> = {};
		// 获取 frontmatter
		const { frontmatter } = useData();

		// 添加自定义 class
		if (frontmatter.value && frontmatter.value.dLayoutClass) {
			props.class = frontmatter.value.dLayoutClass;
		} else {
			// 默认 class
			props.class = "d-home-layout";
		}

		return h(DefaultTheme.Layout, props, VPMyComponent);
	},
	enhanceApp({ app }: { app: App }) {
		app.use(DlElement);

		globals.forEach(([name, Comp]) => {
			app.component(name, Comp);
		});

		app.provide("DEV", import.meta.env.MODE === "development");

		// if (import.meta.env.MODE === "production") {
		// 	if (!import.meta.env.SSR) {
		// 		new RefreshBrowserScript();
		// 	}
		// }
	}
};
