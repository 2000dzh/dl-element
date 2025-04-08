import { addLinkPrefix } from "../utils/common";
import type { DefaultTheme } from "vitepress";

let nav: Array<DefaultTheme.NavItem> = [{ text: "前端导航", link: "/nav" }];

nav = nav.concat(
	addLinkPrefix<DefaultTheme.NavItem>([
		{ text: "常用组件", link: "/component/overview" },
		{ text: "笔记", link: "/notes/JavaScript/关于闭包" }
	])
);

export default nav;
