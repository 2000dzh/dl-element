import type { CSSProperties, Ref, SetupContext } from "vue";
import type { TourStepProps } from "./step";

export type TourMask =
	| boolean
	| {
			style?: CSSProperties;
			color?: string;
 };

export interface TourGap {
	offset?: number | [number, number];
	radius?: number;
}

export interface PosInfo {
	left: number;
	top: number;
	height: number;
	width: number;
	radius: number;
}

export interface TourContext {
	currentStep: Ref<TourStepProps | undefined>;
	current: Ref<number>;
	total: Ref<number>;
	showClose: Ref<boolean>;
	// closeIcon: Ref<string | Component>;
	// mergedType: Ref<"default" | "primary" | undefined>;
	slots: SetupContext["slots"];
	updateModelValue(modelValue: boolean): void;
	onClose(): void;
	onFinish(): void;
	onChange(): void;
}