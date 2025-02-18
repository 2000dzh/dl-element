import { isSet } from 'lodash-es';
import { defaultWindow } from '@dl-element/utils';

interface ResizeObserverEntry {
	readonly target: Element;
	readonly contentRect: DOMRectReadOnly;
	readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>;
	readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
	readonly devicePixelContentBoxSize: ReadonlyArray<ResizeObserverSize>;
}

export type ResizeObserverCallback = (entry: ResizeObserverEntry) => void;

export const GlobalResizeObserver = (() => {
	const isSupported = defaultWindow && 'ResizeObserver' in defaultWindow;
	if (!isSupported) {
		return Object.freeze({
			observe() {},
			unobserve() {},
			disconnect() {},
		});
	}

	const elementToCallbacks = new WeakMap<
		Element,
		Set<ResizeObserverCallback>
	>();

	const o = new ResizeObserver((entrise) => {
		// 避免 ResizeObserver loop completed with undelivered notifications 的警告
		// 使用 requestAnimationFrame 来异步处理尺寸变化逻辑,这样可以避免阻塞事件循环
		// 参考 https://www.jianshu.com/p/e1d177af435e
		requestAnimationFrame(() => {
			for (const entry of entrise) {
				const callbacks = elementToCallbacks.get(entry.target);
				if (isSet(callbacks)) {
					callbacks.forEach((fn) => {
						try {
							fn(entry);
						} catch (error) {
							console.error(
								'ResizeObserver callback error:',
								error
							);
						}
					});
				}
			}
		});
	});

	return Object.freeze({
		observe(
			element: Element,
			callback: ResizeObserverCallback,
			options: ResizeObserverOptions = {}
		) {
			if (!(element instanceof Element)) {
				throw new TypeError(
					'ResizeObserver: First argument must be an Element'
				);
			}

			let callbacks = elementToCallbacks.get(element);

			if (!callbacks) {
				callbacks = new Set();
				elementToCallbacks.set(element, callbacks);
				o.observe(element, options);
			}

			callbacks.add(callback);
		},
		unobserve(element: Element, callback?: ResizeObserverCallback) {
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
