import DefaultTheme from "vitepress/theme";
import DlElement from "dl-element";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "../vitepress";
import { RefreshBrowserScript } from "../utils/refreshBrowserScript";
import type { App } from "vue";

export default {
	...DefaultTheme,
	enhanceApp({ app }: { app: App }) {
		app.component("demo-preview", ElementPlusContainer);
		app.use(DlElement);

		if (import.meta.env.MODE === "production") {
			if (!import.meta.env.SSR) {
				new RefreshBrowserScript();
			}
		}
	}
};
