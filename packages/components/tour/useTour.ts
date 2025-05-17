import { ref, computed, toRef } from "vue";
import { isBoolean } from "lodash-es";
import { useZIndex } from "@dl-element/hooks";
import { useTarget } from "./helper";
import type { TourProps } from "./tour";
import type { TourStepProps } from "./step";

export function useTour(props: TourProps) {
	const total = ref(0);
	const currentStep = ref<TourStepProps>();

	const currentTarget = computed(() => currentStep.value?.target);

	const mergedPlacement = computed(() => currentStep.value?.placement ?? props.placement);

	const mergedMask = computed(() => currentStep.value?.mask ?? props.mask);
	const mergedShowMask = computed(() => !!mergedMask.value && props.modelValue);
	const mergedMaskStyle = computed(() => (isBoolean(mergedMask.value) ? undefined : mergedMask.value));

	const mergedShowArrow = computed(() => !!currentTarget.value && (currentStep.value?.showArrow ?? props.showArrow));

	const mergedScrollIntoViewOptions = computed(() => currentStep.value?.scrollIntoViewOptions ?? props.scrollIntoViewOptions);

	const { nextZIndex } = useZIndex();
	const nowZIndex = nextZIndex();
	const mergedZIndex = computed(() => props.zIndex ?? nowZIndex);

	const { mergedPosInfo, triggerTarget } = useTarget(
		currentTarget,
		toRef(props, "modelValue"),
		toRef(props, "gap"),
		mergedMask,
		mergedScrollIntoViewOptions
	);

	const onUpdateTotal = (val: number) => {
		total.value = val;
	};

	return {
		currentStep,
		total,
		onUpdateTotal,

		triggerTarget,
		mergedPlacement,
		mergedShowArrow,
		mergedShowMask,
		mergedMaskStyle,
		mergedZIndex,
		mergedPosInfo
	};
}
