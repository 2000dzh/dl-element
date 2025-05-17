import { definePropType } from "@dl-element/utils";
import { tourContentProps } from "./content";
import type { ExtractPropTypes } from "vue";
import type { TourMask } from "./type";

export const tourStepProps = {
	/**
	 * @description 获取引导卡片指向的元素， 为空时居中于屏幕。
	 */
	target: {
		type: definePropType<string | HTMLElement | (() => HTMLElement | null) | null>([String, Object, Function])
	},
	/**
	 * @description 引导卡片相对于目标元素的位置
	 */
	placement: tourContentProps.placement,
	/**
	 * @description 标题部分
	 */
	title: String,
	/**
	 * @description 主要描述部分
	 */
	description: String,
	/**
	 * @description 是否启用蒙层，也可传入配置改变蒙层样式和填充色
	 */
	mask: {
		type: definePropType<TourMask>([Boolean, Object]),
		default: undefined
	},
	/**
	 * @description 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 scrollIntoViewOptions 属性
	 */
	scrollIntoViewOptions: {
		type: definePropType<boolean | ScrollIntoViewOptions>([Boolean, Object]),
		default: () => ({
			block: "center"
		})
	},
	/**
	 * @description 是否显示关闭按钮
	 */
	showClose: {
		type: Boolean,
		default: true
	},
	/**
	 * @description 是否显示箭头
	 */
	showArrow: {
		type: Boolean,
		default: true
	}
};

export type TourStepProps = ExtractPropTypes<typeof tourStepProps>;

export const tourStepEmits = {
	close: () => true,
};
