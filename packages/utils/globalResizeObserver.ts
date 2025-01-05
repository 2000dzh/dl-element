import ResizeObserver from 'resize-observer-polyfill';
import { isSet } from 'lodash-es';

export const GlobalResizeObserver = (() => {
	const elementToCallbacks = new WeakMap<Element, Set<() => void>>();

	const o = new ResizeObserver((entrise) => {
		for (const entry of entrise) {
			const callbacks = elementToCallbacks.get(entry.target);
			if (isSet(callbacks)) {
				callbacks.forEach((fn) => {
					try {
						fn();
					} catch (error) {
						console.error('ResizeObserver callback error:', error);
					}
				});
			}
		}
	});

	return Object.freeze({
		observe(element: Element, callback: () => void) {
			if (!(element instanceof Element)) {
				throw new TypeError(
					'ResizeObserver: First argument must be an Element'
				);
			}

			let callbacks = elementToCallbacks.get(element);

			if (!callbacks) {
				callbacks = new Set();
				elementToCallbacks.set(element, callbacks);
				o.observe(element);
			}

			callbacks.add(callback);
		},
		unobserve(element: Element, callback?: () => void) {
			if (!(element instanceof Element)) {
				throw new TypeError(
					'ResizeObserver: First argument must be an Element'
				);
			}

			let callbacks = elementToCallbacks.get(element);

			if (!callbacks) {
				return;
			}

			if (callback) {
				// 移除特定回调
				callbacks.delete(callback);
				if (callbacks.size === 0) {
					elementToCallbacks.delete(element);
					o.unobserve(element);
				}
			} else {
				// 移除所有回调
				elementToCallbacks.delete(element);
				o.unobserve(element);
			}
		},
		disconnect() {
			o.disconnect();
		},
	});
})();
