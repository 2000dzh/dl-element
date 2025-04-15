import path from "node:path";
import { mkdir, copyFile } from "node:fs/promises";
import { series, parallel } from "gulp";
import { copy, remove } from "fs-extra";
import { buildOutput, deGType, dePackage, dlGType, dlOutPut, dlPackage, typesDir } from "@dl-element/build-utils";
import { withTaskName, run, runTask } from "./src";
import { buildConfig } from "./src/build-info";
import type { TaskFunction } from "gulp";
import type { Module } from "./src/build-info";

export const copyFiles = () => Promise.all([copyFile(dePackage, dlPackage), copyFile(deGType, dlGType)]);

export const copyTypesDefinitions: TaskFunction = done => {
	const copyTypes = (module: Module) =>
		withTaskName(`copyTypes:${module}`, () => copy(typesDir, buildConfig[module].output.path));
	return parallel(copyTypes("esm"), copyTypes("cjs"))(done);
};

export const copyFullStyle = async () => {
	await mkdir(path.resolve(dlOutPut, "dist"), { recursive: true });
	await copyFile(path.resolve(dlOutPut, "theme/index.css"), path.resolve(dlOutPut, "dist/index.css"));
};

/**
 * 导出默认的构建任务
 * 按顺序执行以下任务:
 * 1. 清理dist目录
 * 2. 创建新的dist目录
 * 3. 并行执行任务
 *    1.
 *    2.打包完整bundle
 *    3.生成类型声明文件
 */
export default series(
	// 删除 dist
	withTaskName("clean:dist", () => run("pnpm run clean:dist")),
	// 创建dist目录
	withTaskName("createOutput", () => mkdir(buildOutput, { recursive: true })),

	// 并行执行构建模块任务
	parallel(
		runTask("buildModules"),
		// 打包完整bundle,除了 dePackage 的 dependencies 依赖全部打包进bundle,其他需要自行引入
		runTask("buildFullBundle"),
		// 生成packages下的类型声明文件到dist/types/packages下
		runTask("generateTypesDefinitions"),

		series(
			withTaskName("buildThemeChalk", () => run("pnpm run -C packages/theme start")),
			copyFullStyle
		)
	),

	parallel(copyTypesDefinitions, copyFiles),

	// 删除 dist/types/packages/core
	withTaskName("cleanTypeCore", () => remove(path.join(typesDir, "core")))
) as TaskFunction;

/**
 * 导出所有src目录下的工具函数
 */
export * from "./src";
