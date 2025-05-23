import { isClient, camelize } from "../general";
import type { CSSProperties } from "vue";

/**
 * 过滤空格
 */
const classNameToArray = (cls = "") => cls.split(" ").filter(item => !!item.trim());

export const hasClass = (el: Element, cls: string): boolean => {
	if (!el || !cls) {
		return false;
	}

	if (cls.includes(" ")) {
		throw new Error("className 应该不包含空格");
	}

	return el.classList.contains(cls);
};

export const addClass = (el: Element, cls: string) => {
	if (!el || !cls.trim()) {
		return;
	}
	el.classList.add(...classNameToArray(cls));
};

export const removeClass = (el: Element, cls: string) => {
	if (!el || !cls.trim()) {
		return;
	}
	el.classList.remove(...classNameToArray(cls));
};

export const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
	if (!isClient || !element || !styleName) {
		return "";
	}

	let key = camelize(styleName);
	if (key === "float") key = "cssFloat";
	try {
		const style = (element.style as any)[key];
		if (style) return style;
		const computed: any = document.defaultView?.getComputedStyle(element, "");
		return computed ? computed[key] : "";
	} catch {
		return (element.style as any)[key];
	}
};
