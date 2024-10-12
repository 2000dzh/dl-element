import { isRef, onBeforeUnmount, unref, watchEffect } from 'vue';
import type { MaybeRef } from 'vue';

export default function useEventListener(
	target: MaybeRef<HTMLElement | EventTarget | void>,
	event: string,
	handler: (e: Event) => void
) {
	if (isRef(target)) {
		watchEffect(
			(onCleanup) => {
				onCleanup(() => {
					target.value?.removeEventListener(event, handler);
				});
				target.value?.addEventListener(event, handler);
			},
			{
				flush: 'post',
			}
		);
	} else {
		target?.addEventListener(event, handler);
	}

	onBeforeUnmount(() => unref(target)?.removeEventListener(event, handler));
}
