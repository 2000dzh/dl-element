<script setup lang="ts">
import { provide, toRef, useSlots } from "vue";
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from "@dl-element/utils";
import { tourEmits, tourProps } from "./tour";
import DlTourMaskContent from "./mask-content";
import DlTourContent from "./content.vue";
import DlTourSteps from "./steps";
import { useTour } from "./useTour";
import { tourKey } from "./helper";

defineOptions({
	name: "DlTour"
});

const props = defineProps(tourProps);
const emit = defineEmits(tourEmits);
const slots = useSlots();

const current = defineModel<number>("current", { default: 0 });

const {
	currentStep,
	total,
	triggerTarget,
	mergedPlacement,
	mergedShowArrow,
	mergedShowMask,
	mergedMaskStyle,
	mergedZIndex,
	mergedPosInfo
} = useTour(props, emit);

provide(tourKey, {
	currentStep,
	current,
	total,
	showClose: toRef(props, "showClose"),
	slots,

	updateModelValue(modelValue) {
		emit(UPDATE_MODEL_EVENT, modelValue);
	},
	onClose() {
		emit("close", current.value);
	},
	onFinish() {
		emit("finish");
	},
	onChange() {
		emit(CHANGE_EVENT, current.value);
	}
});
</script>

<template>
  <teleport :to="appendTo">
    <div class="dl-tour">
      <dl-tour-mask-content
        :visible="mergedShowMask"
        :fill="mergedMaskStyle?.color"
        :style="mergedMaskStyle?.style"
        :z-index="mergedZIndex"
        :pos="mergedPosInfo"
        :target-area-clickable="targetAreaClickable"
      />
      <dl-tour-content
        v-if="modelValue"
        :key="current"
        :z-index="mergedZIndex"
        :placement="mergedPlacement"
        :reference="triggerTarget"
        :show-arrow="mergedShowArrow"
      >
        <dl-tour-steps>
          <slot />
        </dl-tour-steps>
      </dl-tour-content>
    </div>
  </teleport>
</template>

<style scoped></style>
