import { definePropType } from "@dl-element/utils";
import type { Placement, VirtualElement } from "@floating-ui/dom";

export const tourPlacements = [
	"top-start",
	"top-end",
	"top",
	"bottom-start",
	"bottom-end",
	"bottom",
	"left-start",
	"left-end",
	"left",
	"right-start",
	"right-end",
	"right"
] as const;

export const tourContentProps = {
	/**
	 * @description 引导卡片相对于目标元素的位置
	 */
	placement: {
		type: definePropType<Placement>(String),
		value: tourPlacements,
		default: "bottom"
	},
	reference: {
		type: definePropType<HTMLElement | VirtualElement | null>(Object),
		default: null
	},
	/**
	 * @description Tour 的层级
	 */
	zIndex: {
		type: Number,
		default: 2001
	},
	/**
	 * @description 是否显示箭头
	 */
	showArrow: {
		type: Boolean,
		default: true
	}
};
