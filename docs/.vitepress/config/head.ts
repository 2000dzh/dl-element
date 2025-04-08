import type { HeadConfig } from "vitepress";

const head: Array<HeadConfig> = [];

const scripts = [
	// ["script", { async: "", src: "https://unpkg.com/echarts@5.5.1/dist/echarts.js" }]
];

if (!(process.env.NODE_ENV === "development")) {
	// @ts-ignore
	head.push(...scripts);
}

export default head;
