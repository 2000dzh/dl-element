import { PKG_NAME, PKG_PREFIX } from "@dl-element/build-utils";
import type { Plugin } from "rollup";

export function DlElementAlias(): Plugin {
	const theme = "theme";
	const sourceThemeChalk = `${PKG_PREFIX}/${theme}` as const;
	const bundleThemeChalk = `${PKG_NAME}/${theme}` as const;

	return {
		name: "dl-element-alias-plugin",
		resolveId(source) {
			// 如果导入的模块路径不是以 sourceThemeChalk 开头，直接返回 undefined，表示不处理该模块路径
			if (!source.includes(sourceThemeChalk)) {
				return;
			}

			return {
				id: source.replaceAll(sourceThemeChalk, bundleThemeChalk),
				external: "absolute"
			};
		}
	};
}
