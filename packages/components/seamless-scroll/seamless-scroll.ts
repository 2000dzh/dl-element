import { computed, ref, watchEffect } from 'vue';
import gsap from 'gsap';
import { useElementSize, useMutationObserver } from '@dl-element/hooks';
import type { ExtractPropTypes } from 'vue';

export const SeamlessScrollProps = {
	/**
	 * 滑动单位距离需要的时间(s)
	 */
	duration: {
		type: Number,
		default: 2,
	},
	/**
	 * 两次滑动之间的停顿时长(s)
	 */
	delay: {
		type: Number,
		default: 1,
	},
};

export function useSeamlessScroll(
	props: ExtractPropTypes<typeof SeamlessScrollProps>
) {
	const wrapperRef = ref();
	const boxRef = ref();
	const topRef = ref<HTMLDivElement>();
	const { height: wrapperHeight } = useElementSize(wrapperRef);
	const { height: boxHeight } = useElementSize(boxRef);
	const { height: topBoxHeight } = useElementSize(topRef);

	const timeLine = gsap.timeline();
	let scrollingElIndex = 0;

	const genAnimates = () => {
		if (!topRef.value) {
			return;
		}

		const nodeList = topRef.value.childNodes;
		// 过滤空格文本
		const nodeArr = Array.from(nodeList.values()).filter(
			(el) => el.nodeType === Node.ELEMENT_NODE
		) as HTMLElement[];

		const currentScrollingEl = nodeArr[scrollingElIndex];
		scrollingElIndex = (scrollingElIndex + 1) % nodeArr.length;

		if (!currentScrollingEl) {
			return;
		}
		const { height: elHeight } = currentScrollingEl.getBoundingClientRect();
		const scrollTarget = currentScrollingEl.offsetTop + elHeight;

		timeLine.to(
			wrapperRef.value,
			{
				scrollTop: scrollTarget,
				duration: props.duration,
			},
			`+=${props.delay}`
		);
	};

	const update = () => {
		timeLine.eventCallback('onComplete', () => {
			if (scrollingElIndex === 0) {
				timeLine.to(wrapperRef.value, {
					scrollTop: 0,
					duration: 0,
					onComplete() {
						genAnimates();
					},
				});

				return;
			}

			genAnimates();
		});

		genAnimates();
	};

	const showShadowDiv = computed(() => {
		if (!topBoxHeight.value) {
			return false;
		}

		if (!wrapperHeight.value) {
			return false;
		}

		if (!boxHeight.value) {
			return false;
		}

		return topBoxHeight.value > wrapperHeight.value;
	});

	watchEffect(() => {
		if (showShadowDiv.value) {
			update();
		}
	});

	const onMouseOver = () => {
		timeLine.pause();
	};

	const onMouseOut = () => {
		timeLine.resume();
	};

	useMutationObserver(
		topRef,
		() => {
			// 不满足滚动条件,初始化索引
			if (!showShadowDiv.value) {
				timeLine.clear();
				scrollingElIndex = 0;
			}
		},
		{
			childList: true,
		}
	);

	return {
		wrapperRef,
		boxRef,
		topRef,

		showShadowDiv,

		onMouseOver,
		onMouseOut,
	};
}
