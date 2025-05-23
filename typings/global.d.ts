declare module "vue" {
	// GlobalComponents for Volar
	export interface GlobalComponents {
		DlLoadCure: (typeof import("dl-element"))["DlLoadCure"];
		DlSeamlessScroll: (typeof import("dl-element"))["DlSeamlessScroll"];
		DlWatermark: (typeof import("dl-element"))["DlWatermark"];
		DlTour: (typeof import("dl-element"))["DlTour"];
		DlTourStep: (typeof import("dl-element"))["DlTourStep"];
	}

	interface ComponentCustomProperties {
		$echarts: (typeof import("dl-element/echarts"))["default"];
	}
}

export {};
