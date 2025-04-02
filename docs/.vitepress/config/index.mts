import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
import { getViteConfig } from "./vite";
import type { MarkdownRenderer, UserConfig } from "vitepress";

const setupConfig = configEnv => {
	const config: UserConfig<any> = {
		title: "Dl-Element",
		description: "高仿 ElementPlus 组件库",
		base: "/dl-element/",
		themeConfig: {
			nav: [
				{ text: "开始使用", link: "/home" },
				{ text: "组件", link: "/components/button" }
			],
			sidebar: [
				{
					text: "指南",
					collapsed: false,
					items: [{ text: "快速开始", link: "/home" }]
				},
				{
					text: "无限滚动组件",
					collapsed: false,
					items: [{ text: "SeamlessScroll 无限滚动", link: "components/seamless-scroll" }]
				}
			],
			socialLinks: [{ icon: "github", link: "https://github.com/2000dzh/dl-element" }]
		},
		vite: getViteConfig(configEnv),
		markdown: {
			config(md) {
				md.use(containerPreview as unknown as (md: MarkdownRenderer) => void);
				md.use(componentPreview as unknown as (md: MarkdownRenderer) => void);
			}
		}
	};

	return config;
};

export default setupConfig;
