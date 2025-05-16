import { isClient } from "../general";

let scrollBarWidth: number;
/**
 * 动态计算浏览器滚动条的宽度,并将结果缓存起来以便后续使用
 */
export const getScrollBarWidth = () => {
	if (!isClient) {
		return 0;
	}

	if (scrollBarWidth !== undefined) {
		return scrollBarWidth;
	}

	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.position = "absolute";
	outer.style.top = "-9999px";
	document.body.appendChild(outer);

	const widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";

	const inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	const widthWithScroll = inner.offsetWidth;
	outer.parentNode?.removeChild(outer);
	scrollBarWidth = widthNoScroll - widthWithScroll;

	return scrollBarWidth;
};

/**
 * 用于判断一个 DOM 元素是否完全在浏览器的视口（viewport）内
 */
export function isInViewPort(element: HTMLElement) {
	const viewWidth = window.innerWidth || document.documentElement.clientWidth;
	const viewHeight = window.innerHeight || document.documentElement.clientHeight;
	const { top, right, bottom, left } = element.getBoundingClientRect();

	return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
}
