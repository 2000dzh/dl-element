import { resolve } from "node:path";

// 项目根目录-dl-element
export const projRoot = resolve(__dirname, "..", "..", "..");
// dl-element\packages
export const pkgRoot = resolve(projRoot, "packages");
// dl-element\packages\core
export const deRoot = resolve(pkgRoot, "core");
// dl-element\internal\build
export const buildRoot = resolve(projRoot, "internal", "build");
// dl-element\internal\log
export const logRoot = resolve(projRoot, "internal", "log");

// dl-element\dist
export const buildOutput = resolve(projRoot, "dist");
// dl-element\dist\dl-element
export const dlOutPut = resolve(buildOutput, "dl-element");
// dl-element\dist\types\packages
export const typesDir = resolve(buildOutput, "types", "packages");

// dl-element\dist\dl-element\package.json
export const dlPackage = resolve(dlOutPut, "package.json");
// dl-element\dist\dl-element\global.d.ts
export const dlGType = resolve(dlOutPut, "global.d.ts");

// dl-element\packages\core\index.ts
export const deIndex = resolve(deRoot, "index.ts");
// dl-element\packages\core\package.json
export const dePackage = resolve(deRoot, "package.json");
// dl-element\typings\global.d.ts
export const deGType = resolve(projRoot, "typings", "global.d.ts");
