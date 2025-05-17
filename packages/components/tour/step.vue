<script setup lang="ts">
import { computed, inject, watch } from "vue";
import { tourStepProps, tourStepEmits } from "./step";
import { tourKey } from "./helper";

defineOptions({
	name: "DlTourStep"
});

const props = defineProps(tourStepProps);
const emit = defineEmits(tourStepEmits);

const {
	currentStep,
	current,
	total,
	showClose,
	slots: tourSlots,
	updateModelValue,
	onClose: tourOnClose,
	onFinish: tourOnFinish,
	onChange
} = inject(tourKey)!;

const mergedShowClose = computed(() => props.showClose ?? showClose.value);

watch(
	props,
	val => {
		currentStep.value = val;
	},
	{
		immediate: true,
		flush: "sync"
	}
);

const onPrev = () => {
	current.value -= 1;
	onChange();
};

const onNext = () => {
	if (current.value >= total.value - 1) {
		onFinish();
	} else {
		current.value += 1;
	}

	onChange();
};

const onFinish = () => {
	onClose();
	tourOnFinish();
};

const onClose = () => {
	updateModelValue(false);
	tourOnClose();
	emit("close");
};
</script>

<template>
  <button
    v-if="mergedShowClose"
    type="button"
    class="dl-tour__closebtn"
    @click="onClose"
  >
    关闭
  </button>

  <header
    class="dl-tour__header"
    :class="{ 'show-close': showClose }"
  >
    <slot name="header">
      <span
        role="heading"
        class="dl-tour__title"
      >
        {{ title }}
      </span>
    </slot>
  </header>

  <div class="dl-tour__body">
    <slot>
      <span>{{ description }}</span>
    </slot>
  </div>

  <footer class="dl-tour__footer">
    <div class="dl-tour-indicators">
      <component
        :is="tourSlots.indicators"
        v-if="tourSlots.indicators"
        :current="current"
        :total="total"
      />

      <template v-else>
        <span
          v-for="(item, index) in total"
          :key="item"
          class="dl-tour-indicator"
          :class="[index === current ? 'is-active' : '']"
        />
      </template>
    </div>
    <div class="dl-tour-buttons">
      <button
        v-if="current > 0"
        type="button"
        @click="onPrev"
      >
        上一步
      </button>

      <button
        v-if="current <= total - 1"
        type="button"
        @click="onNext"
      >
        {{ current === total - 1 ? "完成" : "下一步" }}
      </button>
    </div>
  </footer>
</template>
