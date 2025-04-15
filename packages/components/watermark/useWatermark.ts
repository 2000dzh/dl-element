import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from "vue";
import { isArray, isFunction } from "lodash-es";
import useClips, { FontGap } from "./useClips";
import { getPixelRatio, getStyleStr, reRendering } from "./utils";
import type { CSSProperties } from "vue";
import type { WatermarkProps } from "./watermark";
import { useMutationObserver } from "@dl-element/hooks";

export function useWatermark(props: WatermarkProps) {
	const color = computed(() => {
		if (props.font && props.font.color) {
			return props.font.color;
		}
		return "rgba(0,0,0,.15)";
	});
	const fontSize = computed(() => {
		if (props.font && props.font.fontSize) {
			return props.font.fontSize;
		}
		return 16;
	});
	const fontStyle = computed(() => {
		if (props.font && props.font.fontStyle) {
			return props.font.fontStyle;
		}
		return "normal";
	});
	const fontFamily = computed(() => {
		if (props.font && props.font.fontFamily) {
			return props.font.fontFamily;
		}
		return "sans-serif";
	});
	const fontWeight = computed(() => {
		if (props.font && props.font.fontWeight) {
			return props.font.fontWeight;
		}
		return "normal";
	});
	const textAlign = computed(() => {
		if (props.font && props.font.textAlign) {
			return props.font.textAlign;
		}
		return "center";
	});
	const textBaseline = computed(() => {
		if (props.font && props.font.textBaseline) {
			return props.font.textBaseline;
		}
		return "hanging";
	});

	const gapX = computed(() => props.gap[0]);
	const gapY = computed(() => props.gap[1]);
	const gapXCenter = computed(() => gapX.value / 2);
	const gapYCenter = computed(() => gapY.value / 2);
	const offsetLeft = computed(() => {
		if (isArray(props.offset) && props.offset[0]) {
			return props.offset[0];
		}
		return gapXCenter.value;
	});
	const offsetTop = computed(() => {
		if (isArray(props.offset) && props.offset[1]) {
			return props.offset[1];
		}
		return gapYCenter.value;
	});

	const getMarkStyle = () => {
		const markStyle: CSSProperties = {
			zIndex: props.zIndex,
			position: "absolute",
			left: 0,
			top: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none",
			backgroundRepeat: "repeat"
		};

		// 计算偏移的样式
		let positionLeft = offsetLeft.value - gapXCenter.value;
		let positionTop = offsetTop.value - gapYCenter.value;
		if (positionLeft > 0) {
			markStyle.left = `${positionLeft}px`;
			markStyle.width = `calc(100% - ${positionLeft}px)`;
			positionLeft = 0;
		}
		if (positionTop > 0) {
			markStyle.top = `${positionTop}px`;
			markStyle.height = `calc(100% - ${positionTop}px)`;
			positionTop = 0;
		}
		markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;

		return markStyle;
	};

	const containerRef = shallowRef<HTMLDivElement | null>(null);
	const watermarkRef = shallowRef<HTMLDivElement>();
	const stopObservation = ref(false);

	const appendWatermark = (base64Url: string, markWidth: number) => {
		if (containerRef.value && watermarkRef.value) {
			stopObservation.value = true;
			watermarkRef.value.setAttribute(
				`style`,
				getStyleStr({
					...getMarkStyle(),
					backgroundImage: `url('${base64Url}')`,
					backgroundSize: `${Math.floor(markWidth)}px`
				})
			);
			containerRef.value.append(watermarkRef.value);
			// 延迟执行
			setTimeout(() => {
				stopObservation.value = false;
			});
		}
	};
	const destroyWatermark = () => {
		if (watermarkRef.value) {
			watermarkRef.value.remove();
			watermarkRef.value = undefined;
		}
	};

	const getMarkSize = (ctx: CanvasRenderingContext2D) => {
		let defaultWidth = 120;
		let defaultHeight = 64;
		const image = props.image;
		const content = props.content;
		const width = props.width;
		const height = props.height;

		// 如果使用文本
		if (!image && isFunction(ctx.measureText)) {
			// 使用 canvas 获取文本宽度,高度
			ctx.font = `${Number(fontSize.value)}px ${fontFamily.value}`;
			const contents = isArray(content) ? content : [content];
			const sizes = contents.map(item => {
				const metrics = ctx.measureText(item!);

				return [
					metrics.width,
					// 使用 actualBoundingBoxAscent 来兼容低版本浏览器（例如：Firefox < 116）
					metrics.fontBoundingBoxAscent !== undefined
						? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
						: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
				];
			});

			defaultWidth = Math.ceil(Math.max(...sizes.map(size => size[0])));
			defaultHeight = Math.ceil(Math.max(...sizes.map(size => size[1]))) * contents.length + (contents.length - 1) * FontGap;
		}

		return [width || defaultWidth, height || defaultHeight] as const;
	};

	const getClips = useClips();

	const renderWatermark = () => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const image = props.image;
		const content = props.content;
		const rotate = props.rotate;

		if (ctx) {
			if (!watermarkRef.value) {
				watermarkRef.value = document.createElement("div");
			}

			const ratio = getPixelRatio();
			const [markWidth, markHeight] = getMarkSize(ctx);

			const drawCanvas = (drawContent: HTMLImageElement | WatermarkProps["content"]) => {
				const [textClips, clipWidth] = getClips(
					drawContent || "",
					rotate,
					ratio,
					markWidth,
					markHeight,
					{
						color: color.value,
						fontSize: fontSize.value,
						fontStyle: fontStyle.value,
						fontWeight: fontWeight.value,
						fontFamily: fontFamily.value,
						textAlign: textAlign.value,
						textBaseline: textBaseline.value
					},
					gapX.value,
					gapY.value
				);
				appendWatermark(textClips, clipWidth);
			};

			if (image) {
				const img = new Image();
				// 设置跨域模式
				img.crossOrigin = "anonymous";
				// 设置不发送 Referer 头部
				img.referrerPolicy = "no-referrer";

				img.onload = () => {
					drawCanvas(image);
				};
				img.onerror = () => {
					drawCanvas(content);
				};

				img.src = image;
			} else {
				drawCanvas(content);
			}
		}
	};

	onMounted(() => {
		renderWatermark();
	});
	onBeforeUnmount(() => {
		destroyWatermark();
	});

	watch(
		() => props,
		() => {
			renderWatermark();
		},
		{
			deep: true,
			flush: "post"
		}
	);

	const onMutate = (mutations: MutationRecord[]) => {
		if (stopObservation.value) {
			return;
		}
		mutations.forEach(mutation => {
			if (reRendering(mutation, watermarkRef.value)) {
				destroyWatermark();
				renderWatermark();
			}
		});
	};

	useMutationObserver(containerRef, onMutate, {
		attributes: true,
		subtree: true,
		childList: true
	});

	return {
		containerRef
	};
}
