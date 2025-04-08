// 全局样式
import "./styles/index.scss";
import "../../../packages/theme/src/index.scss";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import DNavLinks from "./components/DNavLinks.vue";

import type { Component } from "vue";

// 全局组件
export const globals: [string, Component][] = [
	["DNavLinks", DNavLinks],
	["demo-preview", ElementPlusContainer]
];
