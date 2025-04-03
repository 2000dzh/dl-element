import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
import { PKG_NAME } from "@dl-element/build-utils";
import nav from "./nav";
import sidebar from "./sidebars";
import { getViteConfig } from "./vite";
import type { MarkdownRenderer, UserConfig } from "vitepress";

const setupConfig = configEnv => {
	const config: UserConfig<any> = {
		title: "Dl-Element",
		description: "记录个人成长",
		base: `/${PKG_NAME}/`,
		lastUpdated: true,
		themeConfig: {
			nav,
			sidebar,
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
