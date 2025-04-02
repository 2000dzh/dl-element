import { deIndex } from "@dl-element/build-utils";
import { VitePluginBuildVersion, GeneratVersion } from "../plugins/vitePluginBuildVersion";
import type { Plugin, UserConfig } from "vitepress";

type ViteConfig = Required<UserConfig>["vite"];
type getViteConfigType = { mode: string };

export const getViteConfig = ({ mode }: getViteConfigType): ViteConfig => {
	return {
		define: {
			__version__: JSON.stringify(GeneratVersion())
		},
		plugins: [VitePluginBuildVersion()],
		resolve: {
			alias: [
				{
					find: /^dl-element(\/(es|lib))?$/,
					replacement: deIndex
				}
			]
		},
		server: {
			proxy: {
				"/dl-mapData": {
					target: "https://2000dzh.github.io/dl-element",
					changeOrigin: true
				}
			}
		}
	};
};
