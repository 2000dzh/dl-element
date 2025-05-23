import { isArray } from "lodash-es";
import type { WatermarkProps } from "./watermark";

// 字体间距
export const FontGap = 3;

function prepareCanvas(
	width: number,
	height: number,
	ratio = 1
): [ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, realWidth: number, realHeight: number] {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d")!;
	const realWidth = width * ratio;
	const realHeight = height * ratio;
	canvas.setAttribute("width", `${realWidth}px`);
	canvas.setAttribute("height", `${realHeight}px`);
	ctx.save();

	return [ctx, canvas, realWidth, realHeight];
}

/**
 * @description  获取文本内容的片段,这是一个惰性钩子函数，因为服务器端渲染（SSR）不需要这个功能
 */
export default function useClips() {
	function getClips(
		content: WatermarkProps["content"] | HTMLImageElement,
		rotate: number,
		ratio: number,
		width: number,
		height: number,
		font: Required<NonNullable<WatermarkProps["font"]>>,
		gapX: number,
		gapY: number
	): [dataURL: string, finalWidth: number, finalHeight: number] {
		// ================= Text / Image =================
		const [ctx, canvas, contentWidth, contentHeight] = prepareCanvas(width, height, ratio);

		if (content instanceof HTMLImageElement) {
			// Image
			ctx.drawImage(content, 0, 0, contentWidth, contentHeight);
		} else {
			// Text
			const { color, fontSize, fontStyle, fontWeight, fontFamily, textAlign, textBaseline } = font;
			const mergedFontSize = Number(fontSize) * ratio;

			ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${height}px ${fontFamily}`;
			ctx.fillStyle = color;
			ctx.textAlign = textAlign;
			ctx.textBaseline = textBaseline;
			const contents = isArray(content) ? content : [content];
			contents.forEach((item, index) => {
				// 绘制文本
				ctx.fillText(item ?? "", contentWidth / 2, index * (mergedFontSize + FontGap * ratio));
			});
		}

		// ==================== Rotate ====================
		const angle = (Math.PI / 180) * Number(rotate);
		const maxSize = Math.max(width, height);
		const [rCtx, rCanvas, realMaxSize] = prepareCanvas(maxSize, maxSize, ratio);

		// 从 `ctx` 复制并旋转
		rCtx.translate(realMaxSize / 2, realMaxSize / 2);
		rCtx.rotate(angle);
		if (contentWidth > 0 && contentHeight > 0) {
			rCtx.drawImage(canvas, -contentWidth / 2, -contentHeight / 2);
		}

		// 获取旋转文本的边界
		function getRotatePos(x: number, y: number) {
			const targetX = x * Math.cos(angle) - y * Math.sin(angle);
			const targetY = x * Math.sin(angle) + y * Math.cos(angle);
			return [targetX, targetY];
		}

		let left = 0;
		let right = 0;
		let top = 0;
		let bottom = 0;

		const halfWidth = contentWidth / 2;
		const halfHeight = contentHeight / 2;
		const points = [
			[0 - halfWidth, 0 - halfHeight],
			[0 + halfWidth, 0 - halfHeight],
			[0 + halfWidth, 0 + halfHeight],
			[0 - halfWidth, 0 + halfHeight]
		];
		points.forEach(([x, y]) => {
			const [targetX, targetY] = getRotatePos(x, y);
			left = Math.min(left, targetX);
			right = Math.max(right, targetX);
			top = Math.min(top, targetY);
			bottom = Math.max(bottom, targetY);
		});

		const cutLeft = left + realMaxSize / 2;
		const cutTop = top + realMaxSize / 2;
		const cutWidth = right - left;
		const cutHeight = bottom - top;

		// ================ Fill Alternate ================
		const realGapX = gapX * ratio;
		const realGapY = gapY * ratio;
		const filledWidth = (cutWidth + realGapX) * 2;
		const filledHeight = cutHeight + realGapY;

		const [fCtx, fCanvas] = prepareCanvas(filledWidth, filledHeight);

		function drawImg(targetX = 0, targetY = 0) {
			fCtx.drawImage(rCanvas, cutLeft, cutTop, cutWidth, cutHeight, targetX, targetY, cutWidth, cutHeight);
		}
		drawImg();
		drawImg(cutWidth + realGapX, -cutHeight / 2 - realGapY / 2);
		drawImg(cutWidth + realGapX, +cutHeight / 2 + realGapY / 2);

		return [fCanvas.toDataURL(), filledWidth / ratio, filledHeight / ratio];
	}

	return getClips;
}
