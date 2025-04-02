declare module 'vue' {
	// GlobalComponents for Volar
	export interface GlobalComponents {
		DlLoadCure: (typeof import('dl-element'))['DlLoadCure'];
		DlSeamlessScroll: (typeof import('dl-element'))['DlSeamlessScroll'];
	}

  interface ComponentCustomProperties {
		$echarts: typeof import('../packages/core/echarts')['default'];
	}
}

export {};
