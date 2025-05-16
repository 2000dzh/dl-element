import { computed, defineComponent, toRef } from "vue";
import { useLockscreen } from "@dl-element/hooks";
import { maskProps } from "./mask";
import type { StyleValue } from "vue";

export default defineComponent({
	name: "DlTourMaskContent",
	inheritAttrs: false,
	props: maskProps,
	setup(props) {
		const mStyle = computed<StyleValue>(() => ({
			position: "fixed",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			zIndex: props.zIndex,
			pointerEvents: props.pos && props.targetAreaClickable ? "none" : "auto"
		}));

		const pathStyle = computed<StyleValue>(() => ({
			fill: props.fill,
			pointerEvents: "auto",
			cursor: "auto"
		}));

		const radius = computed(() => props.pos?.radius ?? 2);
		const roundInfo = computed(() => {
			const v = radius.value;
			const baseInfo = `a${v},${v} 0 0 1`;
			return {
				topRight: `${baseInfo} ${v},${v}`,
				bottomRight: `${baseInfo} ${-v},${v}`,
				bottomLeft: `${baseInfo} ${-v},${-v}`,
				topLeft: `${baseInfo} ${v},${-v}`
			};
		});

		const pathD = computed<string>(() => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			const info = roundInfo.value;

			const _path = `M${width},0 L0,0 L0,${height} L${width},${height} L${width},0 Z`;
			const _radius = radius.value;
			return props.pos
				? `${_path} M${props.pos.left + _radius},${props.pos.top} h${
						props.pos.width - _radius * 2
					} ${info.topRight} v${props.pos.height - _radius * 2} ${
						info.bottomRight
					} h${-props.pos.width + _radius * 2} ${info.bottomLeft} v${-props.pos.height + _radius * 2} ${info.topLeft} z`
				: _path;
		});

		useLockscreen(toRef(props, "visible"));

		return () => (
			<>
				{props.visible ? (
					<div class={"dl-tour__mask"} style={mStyle.value}>
						<svg style={{ width: "100%", height: "100%" }}>
							<path class={"dl-tour__hollow"} style={pathStyle.value} d={pathD.value}></path>
						</svg>
					</div>
				) : null}
			</>
		);
	}
});
