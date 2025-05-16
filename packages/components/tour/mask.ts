import { definePropType } from "@dl-element/utils";
import type { PosInfo } from "./type";

export const maskProps = {
	/**
	 * @description 是否要展示遮罩
	 */
	visible: Boolean,
	zIndex: {
		type: Number,
		default: 1001
	},
	/**
	 * @description 遮罩层的背景颜色
	 */
	fill: {
		type: String,
		default: "rgba(0,0,0,0.5)"
	},
	/***
	 * @description 遮罩的透明空间位置
	 */
	pos: {
		type: definePropType<PosInfo | null>(Object)
	},
	/**
	 * @description 当使用遮罩时，目标元素是否可以被点击
	 */
	targetAreaClickable: {
		type: Boolean,
		default: true
	}
};
