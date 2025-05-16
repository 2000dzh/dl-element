import { debugWarn, isClient } from "@dl-element/utils";
import { isNumber } from "lodash-es";
import { ref, getCurrentInstance, inject, computed, unref } from "vue";
import type { InjectionKey, Ref } from "vue";

interface DlZIndexInjectionContext {
	current: number;
}

const initial: DlZIndexInjectionContext = {
	current: 0
};

const zIndex = ref(0);

export const defaultInitialZIndex = 2000;

export const ZINDEX_INJECTION_KEY: InjectionKey<DlZIndexInjectionContext> = Symbol("dlZIndexContextKey");

export const zIndexContextKey: InjectionKey<Ref<number | undefined>> = Symbol("zIndexContextKey");

export default function useZIndex(zIndexOverrides?: Ref<number>) {
	const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;

	const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, undefined) : undefined);

	const initialZIndex = computed(() => {
		const zIndexFromInjection = unref(zIndexInjection);
		return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
	});

	const currentZIndex = computed(() => initialZIndex.value + zIndex.value);

	const nextZIndex = () => {
		increasingInjection.current++;
		zIndex.value = increasingInjection.current;
		return currentZIndex.value;
	};

	if (!isClient && !inject(ZINDEX_INJECTION_KEY)) {
		debugWarn(
			"ZIndexInjection",
			`看起来您正在使用服务器端渲染，您必须提供一个 z-index 提供者，以确保注入过程能够成功完成
用法: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`
		);
	}

	return {
		initialZIndex,
		currentZIndex,
		nextZIndex
	};
}

export type UseZIndexReturn = ReturnType<typeof useZIndex>;
