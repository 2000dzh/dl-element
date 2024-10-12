import { isFunction } from 'lodash-es';
import useEventListener from './useEventListener';
import type { Ref } from 'vue';

export default function useClickOutside(
	elementRef: Ref<HTMLElement | void>,
	callback: () => void
) {
	useEventListener(document, 'click', (e: Event) => {
		const target = e.target;
		if (elementRef.value && target) {
			if (!elementRef.value.contains(target as HTMLElement)) {
				isFunction(callback) && callback();
			}
		}
	});
}
