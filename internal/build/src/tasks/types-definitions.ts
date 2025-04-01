import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "fast-glob";
import { copy, remove } from "fs-extra";
import { typesDir } from "@dl-element/build-utils";
import { run, pathRewriter } from "../utils";

export const generateTypesDefinitions = async () => {
	await run("npx vue-tsc -p tsconfig.web.json --declaration --emitDeclarationOnly --declarationDir dist/types");

	// 获取 typesDir 路径下所有类型声明文件
	const filePaths = await glob("**/*.d.ts", {
		cwd: typesDir,
		absolute: true
	});

	const rewriteTasks = filePaths.map(async filePath => {
		const content = await readFile(filePath, "utf8");
		return await writeFile(filePath, pathRewriter("esm")(content), "utf8");
	});
	await Promise.all(rewriteTasks);
	const sourceDir = path.join(typesDir, "core");
	await copy(sourceDir, typesDir);
	await remove(sourceDir);
};
