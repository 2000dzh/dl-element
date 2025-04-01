import { resolve } from "node:path";
import { parallel } from "gulp";
import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from '@rollup/plugin-json';
import VueMacros from "vue-macros/rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import esbuild, { minify as minifyPlugin } from "rollup-plugin-esbuild";
import { dlOutPut, deIndex, PKG_CAMELCASE_NAME } from "@dl-element/build-utils";
import { withTaskName, generateExternal, writeBundles, formatBundleFilename } from "../utils";
import { DlElementAlias } from "./../plugins/dl-element-alias";
import { target } from "./../build-info";
import type { TaskFunction } from "gulp";

async function buildFullEntry(minify: boolean) {
	const plugins = [
		DlElementAlias(),
    json(),
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
		nodeResolve({
			extensions: [".mjs", ".js", ".json", ".ts"]
		}),
		commonjs(),
		esbuild({
			sourceMap: minify,
			target,
			loaders: {
				".vue": "ts"
			},
			define: {
				"process.env.NODE_ENV": JSON.stringify("production")
			},
			treeShaking: true
		})
	];

	if (minify) {
		plugins.push(
			minifyPlugin({
				target,
				sourceMap: true
			})
		);
	}

	const bundle = await rollup({
		input: deIndex,
		plugins,
		external: await generateExternal({ full: true }),
		treeshake: true
	});

	await writeBundles(bundle, [
		{
			format: "umd",
			file: resolve(dlOutPut, "dist", formatBundleFilename("index.full", minify, "js")),
			exports: "named",
			name: PKG_CAMELCASE_NAME,
			globals: {
				vue: "Vue",
        axios: "axios"
			},
			sourcemap: minify
		},
		{
			format: "esm",
			file: resolve(dlOutPut, "dist", formatBundleFilename("index.full", minify, "mjs")),
			sourcemap: minify
		}
	]);
}

// async function buildFullLocale(minify: boolean) {}

export const buildFull = (minify: boolean) => async () => {
	return Promise.all([buildFullEntry(minify)]);
};

export const buildFullBundle: TaskFunction = parallel(
	withTaskName("buildFullMinified", buildFull(true)),
	withTaskName("buildFull", buildFull(false))
);
