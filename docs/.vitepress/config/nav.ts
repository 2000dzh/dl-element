import { addLinkPrefix } from "../utils/common";
import type { DefaultTheme } from "vitepress";

const nav = addLinkPrefix<DefaultTheme.NavItem>([
	{ text: "常用组件", link: "/component/overview" },
	{ text: "笔记", link: "/notes/JavaScript/闭包" }
]);

export default nav;
