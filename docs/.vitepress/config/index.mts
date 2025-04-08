import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
import { PKG_NAME } from "@dl-element/build-utils";
import nav from "./nav";
import sidebar from "./sidebars";
import search from "./search";
import head from "./head";
import { getViteConfig } from "./vite";
import type { MarkdownRenderer, UserConfig } from "vitepress";

const setupConfig = configEnv => {
	const config: UserConfig<any> = {
		title: "前端笔记",
		description: "记录个人成长",
		base: `/${PKG_NAME}/`,
		lang: "zh-Hans", //语言
		lastUpdated: true,
    head,
		themeConfig: {
			nav,
			sidebar,
			socialLinks: [{ icon: "github", link: "https://github.com/2000dzh/dl-element" }],
			docFooter: {
				prev: "上一篇",
				next: "下一篇"
			},
			outlineTitle: "当前页面",
			lastUpdatedText: "最近更新时间",

      // 本地搜索
      search
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
