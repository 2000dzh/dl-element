import { toValue } from 'vue';
import type { MaybeRef, MaybeRefOrGetter, ComponentPublicInstance } from 'vue';

// 选项式组件实例类型
export type VueInstance = ComponentPublicInstance;
export type MaybeElementRef<T extends MaybeElement = MaybeElement> =
	MaybeRef<T>;
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> =
	MaybeRefOrGetter<T>;
export type MaybeElement =
	| HTMLElement
	| SVGElement
	| VueInstance
	| undefined
	| null;

export type UnRefElementReturn<T extends MaybeElement = MaybeElement> =
	T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T;

/**
 * @description 获取一个元素或 Vue 组件实例的引用（ref）所对应的 DOM 元素
 */
export function unrefElement<T extends MaybeElement>(
	elRef: MaybeComputedElementRef<T>
): UnRefElementReturn {
	const plain = toValue(elRef);

	return (plain && (plain as VueInstance).$el) || plain;
}
