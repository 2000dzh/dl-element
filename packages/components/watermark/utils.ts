import type { CSSProperties } from "vue";

/**
 * @description 获取设备物理像素分辨率与CSS像素分辨率的比率
 */
export function getPixelRatio() {
	return window.devicePixelRatio || 1;
}

/**
 * @description 将驼峰式命名的字符串转换为小写，并用分隔符连接起来
 */
export function toLowercaseSeparator(key: string) {
	return key.replace(/([A-Z])/g, "-$1").toLowerCase();
}

export function getStyleStr(style: CSSProperties): string {
	return Object.keys(style)
		.map(key => `${toLowercaseSeparator(key)}: ${style[key as keyof CSSProperties]};`)
		.join(" ");
}

/**
 * @description 是否重新渲染水印
 */
export function reRendering(mutation: MutationRecord, watermarkElement?: HTMLElement) {
	let flag = false;

	// 是否删除水印节点
	if (mutation.removedNodes.length && watermarkElement) {
		flag = Array.from(mutation.removedNodes).includes(watermarkElement);
	}

	// 水印 DOM 属性值是否已被修改。
	if (mutation.type === "attributes" && mutation.target === watermarkElement) {
		flag = true;
	}

	return flag;
}
