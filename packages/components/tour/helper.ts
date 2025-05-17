import { computed, isRef, onBeforeMount, onMounted, ref, unref, watch, watchEffect } from "vue";
import { isArray, isFunction, isString } from "lodash-es";
import { autoUpdate, computePosition, flip, shift, offset as offsetMiddelware, arrow } from "@floating-ui/dom";
import { isClient, isInViewPort } from "@dl-element/utils";
import { useEventListener } from "@dl-element/hooks";
import type { Ref, InjectionKey, CSSProperties } from "vue";
import type { ComputePositionReturn, Placement, VirtualElement, Middleware } from "@floating-ui/dom";
import type { PosInfo, TourContext, TourGap, TourMask } from "./type";

export const tourKey: InjectionKey<TourContext> = Symbol("DlTour");

/**
 * 根据 gap 计算目标元素的位置信息
 */
export function useTarget(
	target: Ref<string | HTMLElement | (() => HTMLElement | null) | null | undefined>,
	open: Ref<boolean>,
	gap: Ref<TourGap>,
	mergedMask: Ref<TourMask>,
	scrollIntoViewOptions: Ref<boolean | ScrollIntoViewOptions>
) {
	const posInfo = ref<PosInfo | null>(null);

	const getTargetEl = () => {
		let targetEl: HTMLElement | null | undefined;
		if (isString(target.value)) {
			targetEl = document.querySelector<HTMLElement>(target.value);
		} else if (isFunction(target.value)) {
			targetEl = target.value();
		} else {
			targetEl = target.value;
		}

		return targetEl;
	};

	const updatePosInfo = () => {
		const targetEl = getTargetEl();
		if (!targetEl || !open.value) {
			posInfo.value = null;
			return;
		}

		// 如果元素未在浏览器视口内
		if (!isInViewPort(targetEl)) {
			targetEl.scrollIntoView(scrollIntoViewOptions.value);
		}

		const { left, top, width, height } = targetEl.getBoundingClientRect();
		posInfo.value = {
			left,
			top,
			width,
			height,
			radius: 0
		};
	};

	watch(
		[open, target],
		() => {
			updatePosInfo();
		},
		{
			immediate: true
		}
	);
	useEventListener(window, "resize", updatePosInfo);

	const getGapOffset = (index: number) => (isArray(gap.value.offset) ? gap.value.offset[index] : gap.value.offset) ?? 6;
	const mergedPosInfo = computed(() => {
		if (!posInfo.value) {
			return posInfo.value;
		}

		const gapOffsetX = getGapOffset(0);
		const gapOffsetY = getGapOffset(1);
		const gapRadius = gap.value?.radius || 2;

		return {
			left: posInfo.value.left - gapOffsetX,
			top: posInfo.value.top - gapOffsetY,
			width: posInfo.value.width + gapOffsetX * 2,
			height: posInfo.value.height + gapOffsetY * 2,
			radius: gapRadius
		};
	});

	const triggerTarget = computed(() => {
		const targetEl = getTargetEl();
		if (!mergedMask.value || !targetEl || !window.DOMRect) {
			return targetEl || undefined;
		}

		return {
			getBoundingClientRect() {
				return window.DOMRect.fromRect({
					width: mergedPosInfo.value?.width || 0,
					height: mergedPosInfo.value?.height || 0,
					x: mergedPosInfo.value?.left || 0,
					y: mergedPosInfo.value?.top || 0
				});
			}
		};
	});

	return {
		mergedPosInfo,
		triggerTarget
	};
}

export function useFloating(
	referenceRef: Ref<HTMLElement | VirtualElement | null>,
	contentRef: Ref<HTMLElement | null>,
	arrowRef: Ref<HTMLElement | null>,
	placement: Ref<Placement | undefined>,
	zIndex: Ref<number>,
	showArrow: Ref<boolean>
) {
	const offset = 10;
	const strategy = "absolute";

	const x = ref<number>();
	const y = ref<number>();
	const middlewareData = ref<ComputePositionReturn["middlewareData"]>({});

	const states = {
		x,
		y,
		placement,
		strategy,
		middlewareData
	} as const;

	const middleware = computed(() => {
		const _middleware: Array<Middleware> = [
			// 参考元素和浮动元素之间的距离
			offsetMiddelware(offset),
			// 确保浮动元素始终出现在视口
			flip(),
			// 确保浮动元素始终出现在视口
			shift()
		];

		if (unref(showArrow) && unref(arrowRef)) {
			// 为浮动元素内的箭头元素（三角形或插入符号）提供定位数据
			_middleware.push(
				arrow({
					element: unref(arrowRef)!
				})
			);
		}

		return _middleware;
	});

	const updatePosition = async () => {
		if (!isClient) {
			return;
		}

		const referenceEl = unref(referenceRef);
		const contentEl = unref(contentRef);

		if (!referenceEl || !contentEl) {
			return;
		}

		const data = await computePosition(referenceEl, contentEl, {
			placement: unref(placement),
			strategy: unref(strategy),
			middleware: unref(middleware)
		});

		(Object.keys(states) as Array<keyof typeof states>).forEach(key => {
			if (isRef(states[key])) {
        // @ts-ignore
				states[key].value = data[key];
			}
		});
	};

	const contentStyle = computed<CSSProperties>(() => {
		// 无参照物,展示在屏幕中间
		if (!unref(referenceRef)) {
			return {
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate3d(-50%, -50%, 0)",
				maxWidth: "100vw",
				zIndex: unref(zIndex)
			};
		}

		return {
			position: unref(strategy),
			zIndex: unref(zIndex),
			top: unref(y) != null ? `${unref(y)}px` : "",
			left: unref(x) != null ? `${unref(x)}px` : ""
		};
	});

	const arrowStyle = computed<CSSProperties>(() => {
		if (!unref(showArrow)) {
			return {};
		}

		const { arrow } = unref(middlewareData);

		return {
			left: arrow?.x != null ? `${arrow?.x}px` : "",
			top: arrow?.y != null ? `${arrow?.y}px` : ""
		};
	});

	let cleanup: any;
	onMounted(() => {
		const referenceEl = unref(referenceRef);
		const contentEl = unref(contentRef);
		if (referenceEl && contentEl) {
			cleanup = autoUpdate(referenceEl, contentEl, updatePosition);
		}

		watchEffect(() => {
			updatePosition();
		});
	});

	onBeforeMount(() => {
		cleanup && cleanup();
	});

	return {
		updatePosition,
		contentStyle,
		arrowStyle
	};
}
