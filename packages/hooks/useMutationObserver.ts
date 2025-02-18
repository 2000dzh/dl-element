import { computed, toValue, watch } from 'vue';
import { defaultWindow } from '@dl-element/utils';
import { unrefElement } from './unrefElement.ts';
import type {
	MaybeComputedElementRef,
	UnRefElementReturn,
} from './unrefElement';

type NonNullableElement = Array<NonNullable<UnRefElementReturn>>;

export default function useMutationObserver(
	target: MaybeComputedElementRef | Array<MaybeComputedElementRef>,
	callback: MutationCallback,
	options: MutationObserverInit = {}
) {
	let observer: MutationObserver | undefined;
	const isSupported = defaultWindow && 'MutationObserver' in defaultWindow;

	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = undefined;
		}
	};

	const targets = computed(() => {
		const value = toValue(target);
		const items = (
			Array.isArray(value) ? value : [value]
		).reduce<NonNullableElement>((sum, el) => {
			const newEl = unrefElement(el);

			if (newEl) {
				sum.push(newEl);
			}

			return sum;
		}, []);

		return new Set(items);
	});

	const stopWatch = watch(
		() => targets.value,
		(...args) => {
			const val = args[0];
			const onCleanup = args[2];
			onCleanup(cleanup);

			if (isSupported && val.size) {
				observer = new MutationObserver(callback);
				val.forEach((el) => observer!.observe(el, options));
			}
		},
		{
			immediate: true,
			flush: 'post',
		}
	);

	const takeRecords = () => {
		return observer && observer.takeRecords();
	};

	const stop = () => {
		stopWatch();
		cleanup();
	};

	return {
		stop,
		takeRecords,
	};
}
