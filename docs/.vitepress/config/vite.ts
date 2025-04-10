import path from "node:path";
import { deIndex } from "@dl-element/build-utils";
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";
import { VitePluginBuildVersion, GeneratVersion } from "../plugins/vitePluginBuildVersion";
import type { Plugin, UserConfig } from "vitepress";

type ViteConfig = Required<UserConfig>["vite"];
type getViteConfigType = { mode: string };

export const getViteConfig = ({ mode }: getViteConfigType): ViteConfig => {
	return {
		define: {
			__version__: JSON.stringify(GeneratVersion())
		},
		plugins: [
			VitePluginBuildVersion(),
			// visualizer({
			// 	open: true, // 打包完自动打开分析页面
			// 	filename: "stats.html", // 分析图生成的文件名
			// 	brotliSize: true // 统计并显示brotli
			// })

			// 按需引用 tdesign-vue-next 组件
			AutoImport({
				resolvers: [
					TDesignResolver({
						library: "vue-next"
					})
				],
				dts: false // 禁用类型文件生成
			}),
			Components({
				resolvers: [
					TDesignResolver({
						library: "vue-next"
					})
				]
			})
		],
		resolve: {
			alias: [
				{
					find: /^dl-element(\/(es|lib))?$/,
					replacement: deIndex
				},
				// {
				// 	find: "@dv",
				// 	replacement: `${path.resolve(__dirname, "../vitepress")}/`
				// }
        {
					find: "@dv",
					replacement: `${path.resolve(__dirname, "../")}/`
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
		},
		build: {
			rollupOptions: {
				// external: ["dl-element"]
				// output: {
				// 	manualChunks(id) {
				// 		console.log(id);
				// 		if (id.includes("node_modules")) {
				// 			if (id.includes("echarts")) {
				// 				return "vendor-echarts";
				// 			}
				// 		}
				// 	}
				// }
			}
		}
	};
};
