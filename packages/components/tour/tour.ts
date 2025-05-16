import { definePropType, UPDATE_MODEL_EVENT } from "@dl-element/utils";
import { isBoolean, isNumber } from "lodash-es";
import { tourContentProps } from "./content";
import type { ExtractPropTypes, SetupContext } from "vue";
import type { TourGap, TourMask } from "./type";

export const tourProps = {
	/**
	 * @description 打开引导
	 */
	modelValue: Boolean,
	/**
	 * @description 当前值
	 */
	current: {
		type: Number,
		default: 0
	},
	/**
	 * @description 引导卡片相对于目标元素的位置
	 */
	placement: tourContentProps.placement,
	/**
	 * @description 挂载到哪个 DOM 元素
	 */
	appendTo: {
		type: definePropType<string | HTMLElement>([String, Object]),
		default: "body"
	},
	/**
	 * @description 是否启用蒙层，也可传入配置改变蒙层样式和填充色
	 */
	mask: {
		type: definePropType<TourMask>([Boolean, Object]),
		default: true
	},
	/**
	 * @description Tour 的层级
	 */
	zIndex: {
		type: Number
	},
	/**
	 * @description 启用蒙层时，target 元素区域是否可以点击
	 */
	targetAreaClickable: {
		type: Boolean,
		default: true
	},
	/**
	 * @description 遮罩和目标之间的透明的间距
	 */
	gap: {
		type: definePropType<TourGap>(Object),
		default: () => ({
			offset: 6,
			radius: 2
		})
	},
	/**
	 * @description 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数
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

export type TourProps = ExtractPropTypes<typeof tourProps>;

export const tourEmits = {
	[UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
	["update:current"]: (current: number) => isNumber(current),
	close: (current: number) => isNumber(current),
	finish: () => true,
	change: (current: number) => isNumber(current)
};
export type TourEmits = SetupContext<typeof tourEmits>["emit"];
