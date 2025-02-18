import { computed, onMounted, ref, onUnmounted, watch, shallowRef } from 'vue';
import { isArray } from 'lodash-es';
import { GlobalResizeObserver, defaultWindow } from '@dl-element/utils';
import { unrefElement } from './unrefElement';
import type { ResizeObserverCallback } from '@dl-element/utils';
import type { MaybeComputedElementRef, UnRefElementReturn } from './unrefElement';

export interface ElementSize {
	width: number;
	height: number;
}

export default function useElementSize(
	target: MaybeComputedElementRef,
	initialSize: ElementSize = { width: 0, height: 0 },
	options: ResizeObserverOptions = {}
) {
	const { box = 'content-box' } = options;
	const isSVG = computed(() => {
		const el = unrefElement(target);
		if (el && el.namespaceURI && el.namespaceURI.includes('svg')) {
			return true;
		}

		return false;
	});
	const width = ref(initialSize.width);
	const height = ref(initialSize.height);
	const _target = shallowRef<UnRefElementReturn | null>(null);

	const handler: ResizeObserverCallback = (entry) => {
		const boxSize =
			box === 'border-box'
				? entry.borderBoxSize
				: box === 'content-box'
					? entry.contentBoxSize
					: entry.devicePixelContentBoxSize;

		if (defaultWindow && isSVG.value) {
			if (_target.value) {
				const rect = _target.value.getBoundingClientRect();
				width.value = rect.width;
				height.value = rect.height;
			}
		} else {
			if (boxSize) {
				const formatBoxSize = isArray(boxSize) ? boxSize : [boxSize];

				width.value = formatBoxSize.reduce(
					(acc, { inlineSize }) => acc + inlineSize,
					0
				);
				height.value = formatBoxSize.reduce(
					(acc, { blockSize }) => acc + blockSize,
					0
				);
			} else {
				width.value = entry.contentRect.width;
				height.value = entry.contentRect.height;
			}
		}
	};

	const targets = computed(() => {
		return unrefElement(target);
	});

	watch(
		targets,
		(...args) => {
			const onCleanup = args[2];
			onCleanup(stop);

			_target.value = targets.value;
			if (_target.value) {
				GlobalResizeObserver.observe(_target.value, handler, options);
			}
		},
		{
			immediate: true,
			flush: 'post',
		}
	);

	function stop() {
		if (_target.value) {
			GlobalResizeObserver.unobserve(_target.value, handler);
		}
	}

	onMounted(() => {
		if (target) {
			width.value =
				'offsetWidth' in target
					? target.offsetWidth
					: initialSize.width;
			height.value =
				'offsetHeight' in target
					? target.offsetHeight
					: initialSize.height;
		}
	});

	onUnmounted(() => {
		stop();
	});

	return {
		width,
		height,
		stop,
	};
}
