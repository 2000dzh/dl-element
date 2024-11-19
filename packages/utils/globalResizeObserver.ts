export const GlobalResizeObserver = (() => {
	const ATTR_NAME = 'dl-global-resizeobserver-key';

	let value = 0;
	let attrValueToCallback: Record<string, Array<() => void>> = {};

	const o = new ResizeObserver((entrise) => {
		for (const entry of entrise) {
			const resizedElement = entry.target;
			const attrValue = resizedElement.getAttribute(ATTR_NAME);
			if (attrValue) {
				const callback = attrValueToCallback[attrValue] as Array<
					() => void
				>;
				callback.forEach((fn) => fn());
			}
		}
	});

	return Object.freeze({
		observe(element: Element, callback: () => void) {
			if (!(element instanceof Element)) {
				console.error('useResizeObserver, cannot observe non-Element.');
				return;
			}

			let attrValue = element.getAttribute(ATTR_NAME);
			if (!attrValue) {
				value++;
				attrValue = value + '';
				element.setAttribute(ATTR_NAME, attrValue);
			}

			(
				attrValueToCallback[attrValue] ||
				(attrValueToCallback[attrValue] = [])
			).push(callback);

			o.observe(element);
		},
		unobserve(element: Element) {
     
			if (!(element instanceof Element)) {
				console.error('useResizeObserver, cannot observe non-Element.');
				return;
			}

			const attrValue = element.getAttribute(ATTR_NAME);
			if (!attrValue) {
				console.error(
					'useResizeObserver cannot unobserve element w/o ATTR_NAME.'
				);
				return;
			}

			Reflect.deleteProperty(attrValueToCallback, attrValue);
			o.unobserve(element);
		},
		disconnect() {
			o.disconnect();
		},
	});
})();
