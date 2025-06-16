import path from "node:path";
import { series } from "gulp";
import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import VueMacros from "vue-macros/rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import glob from "fast-glob";
import { pkgRoot, excludeFiles, createLogFile, deRoot } from "@dl-element/build-utils";
import { withTaskName, generateExternal, writeBundles } from "../utils";
import { buildConfigEntries, target } from "../build-info";
import { DlElementAlias } from "../plugins/dl-element-alias";
import type { OutputOptions } from "rollup";
import type { TaskFunction } from "gulp";

const plugins = [
	DlElementAlias(),
	VueMacros({
		setupComponent: false,
		setupSFC: false,
		plugins: {
			vue: vue({
				isProduction: true,
				template: {
					compilerOptions: {
						hoistStatic: false,
						cacheHandlers: false
					}
				}
			}),
			vueJsx: vueJsx()
		}
	}),
	// 帮助 Rollup 解析 node_modules 中的模块
	nodeResolve({
		extensions: [".mjs", ".js", ".json", ".ts"]
	}),
	// 将CommonJS模块转换为ES6，以便rollup可以处理它们
	commonjs(),
	// 使用 esbuild 执行代码转换和压缩
	esbuild({
		sourceMap: true,
		target,
		loaders: {
			".vue": "ts"
		}
	})
];

async function buildModulesComponents() {
	// 在 pkgRoot 目录及其子目录中查找所有扩展名为 .js、.ts 或 .vue 的文件
	const input = excludeFiles(
		await glob(["**/*.{js,ts,vue}", "!**/style/(index|css).{js,ts,vue}"], {
			cwd: pkgRoot,
			// 返回匹配文件的绝对路径，而不是相对于 cwd 的相对路径
			absolute: true,
			// 只匹配文件，忽略目录。
			onlyFiles: true
		})
	);

	createLogFile("demo.txt", input.join("\n"));

	const bundle = await rollup({
		input,
		plugins,
		external: await generateExternal({ full: false }),
		treeshake: { moduleSideEffects: false }
	});

	await writeBundles(
		bundle,
		buildConfigEntries.map(([module, config]): OutputOptions => {
			return {
				format: config.format,
				dir: config.output.path,
				exports: module === "cjs" ? "named" : undefined,
				preserveModules: true,
        // 输出路径改写 dl-element\packages\core\index.js => dl-element\packages\index.js
				preserveModulesRoot: deRoot,
				sourcemap: true,
				entryFileNames: `[name].${config.ext}`
			};
		})
	);
}

async function buildModulesStyles() {
	const input = excludeFiles(
		await glob("**/style/(index|css).{js,ts,vue}", {
			cwd: pkgRoot,
			absolute: true,
			onlyFiles: true
		})
	);

	createLogFile("component-style.txt", input.join("\n"));

	const bundle = await rollup({
		input,
		plugins,
		treeshake: false
	});

	await writeBundles(
		bundle,
		buildConfigEntries.map(([module, config]): OutputOptions => {
			return {
				format: config.format,
				dir: path.resolve(config.output.path, "components"),
				exports: module === "cjs" ? "named" : undefined,
				preserveModules: true,
				preserveModulesRoot: deRoot,
				sourcemap: true,
				entryFileNames: `[name].${config.ext}`
			};
		})
	);
}

export const buildModules = series(
	withTaskName("buildModulesComponents", buildModulesComponents),
	withTaskName("buildModulesStyles", buildModulesStyles)
) as TaskFunction;
