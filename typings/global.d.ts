declare module 'vue' {
	// GlobalComponents for Volar
	export interface GlobalComponents {
		DlLoadCure: (typeof import('dl-element'))['DlLoadCure'];
	}

  interface ComponentCustomProperties {
		$echarts: typeof import('../packages/core/echarts')['default'];
	}
}

export {};
