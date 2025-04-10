// 全局样式
import "./styles/index.scss";
// 引入动画样式
import "animate.css";
import "@vitepress-demo-preview/component/dist/style.css";
// DlElement 样式
import "../../../packages/theme/src/index.scss";
// 引入组件库的少量全局样式变量
import "tdesign-vue-next/es/style/index.css";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import { h } from "vue";

import DNavLinks from "./components/DNavLinks.vue";
import ImageViewer from "./components/ImageViewer.vue";

import type { Component } from "vue";

// 扩展布局插槽
export const VPMyComponent = {
	"doc-top": () => h(ImageViewer)
};

// 全局组件
export const globals: [string, Component][] = [
	["DNavLinks", DNavLinks],
	["demo-preview", ElementPlusContainer],
	["ImageViewer", ImageViewer]
];
