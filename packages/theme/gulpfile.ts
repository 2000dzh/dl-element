import path from "node:path";
import { Transform } from "node:stream";
import { parallel, series, src, dest } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import postcss from "postcss";
import cssnano from "cssnano";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import consola from "consola";
import chalk from "chalk";
import { dlOutPut } from "@dl-element/build-utils";
import type { TaskFunction } from "gulp";
import type Vinly from "vinyl";

const distFolder = path.resolve(__dirname, "dist");
const distBundle = path.resolve(dlOutPut, "theme");

function compressWithCssnano() {
	const processor = postcss([
		cssnano({
			preset: [
				"default",
				{
					// 禁用颜色值的优化
					colormin: false,
					// 禁用字体值的优化
					minifyFontValues: false
				}
			]
		})
	]);

	return new Transform({
		objectMode: true,
		transform(chunk, _encoding, callback) {
			const file = chunk as Vinly;
			if (file.isNull()) {
				callback(null, file);
				return;
			}

			if (file.isStream()) {
				callback(new Error("Streaming not supported"));
				return;
			}

			const cssString = file.contents!.toString();
			processor.process(cssString, { from: file.path }).then(result => {
				const name = path.basename(file.path);
				file.contents = Buffer.from(result.css);
				consola.success(
					`${chalk.cyan(name)}: ${chalk.yellow(cssString.length / 1000)} KB -> ${chalk.green(result.css.length / 1000)} KB`
				);

				callback(null, file);
			});
		}
	});
}

function buildThemeChalk() {
	const sass = gulpSass(dartSass);
	const noDlPrefixFile = /(index|base)/;

	return (
		src(path.resolve(__dirname, "src/*.scss"))
			.pipe(sass.sync())
			// 为 css 添加浏览器前缀
			.pipe(autoprefixer({ cascade: false }))
			// 压缩 css
			.pipe(compressWithCssnano())
			// 批量改写文件名
			.pipe(
				rename(path => {
					if (!noDlPrefixFile.test(path.basename)) {
						path.basename = `dl-${path.basename}`;
					}
				})
			)
			.pipe(dest(distFolder))
	);
}

/**
 * @description 把 ./src 下所有文件复制到 ../../dist/theme/src 文件夹下
 */
export function copyThemeChalkSource() {
	return src(path.resolve(__dirname, "src/**")).pipe(dest(path.resolve(distBundle, "src")));
}

/**
 * @description 把 ./dist 下所有文件复制到 .../dist/theme 文件夹下
 */
export function copyThemeChalkBundle() {
	return src(`${distFolder}/**`).pipe(dest(distBundle));
}

export const build: TaskFunction = parallel(copyThemeChalkSource, series(buildThemeChalk, copyThemeChalkBundle));

export default build;
