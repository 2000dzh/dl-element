import { flattedChildren } from "@dl-element/utils";
import { defineComponent } from "vue";
import { isArray } from "lodash-es";
import type { Component, VNode } from "vue";
import type { FlattenVNodes } from "@dl-element/utils";

export default defineComponent({
	name: "DlTourSteps",
	props: {
		current: {
			type: Number,
			default: 0
		}
	},
	emits: ["update-total"],
	setup(props, { slots, emit }) {
		let cacheTotal = 0;

		return () => {
			const children = slots.default?.();
			const result: Array<VNode> = [];
			let total = 0;

			function filterSteps(children?: FlattenVNodes) {
				if (!isArray(children)) {
					return;
				}

				(children as Array<VNode>).forEach(item => {
					const name = ((item?.type || {}) as Component)?.name;

					if (name === "DlTourStep") {
						result.push(item);
						total += 1;
					}
				});
			}

			if (children?.length) {
				filterSteps(flattedChildren(children![0]?.children));
			}

			if (cacheTotal !== total) {
				cacheTotal = total;
				emit("update-total", total);
			}

			if (result.length) {
				return result[props.current];
			}

			return null;
		};
	}
});
