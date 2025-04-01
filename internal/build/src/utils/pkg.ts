import { PKG_NAME, PKG_PREFIX } from "@dl-element/build-utils";
import { buildConfig } from "../build-info";
import type { Module } from "../build-info";

export const pathRewriter = (module: Module) => {
	const config = buildConfig[module];

	return (id: string) => {
		id = id.replaceAll(`${PKG_PREFIX}/theme`, `${PKG_NAME}/theme`);
    id = id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`)
		return id;
	};
};
