<script setup lang="ts">
import { computed, inject, watch } from "vue";
import { tourStepProps } from "./step";
import { tourKey } from "./helper";

defineOptions({
	name: "DlTourStep"
});

const props = defineProps(tourStepProps);

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

watch(
	props,
	val => {
    console.log(val)
		currentStep.value = val;
	},
	{
		immediate: true,
    flush: 'sync'
	}
);

const mergedShowClose = computed(() => props.showClose ?? showClose.value);
</script>

<template>
  <button
    v-if="mergedShowClose"
    type="button"
    class="dl-tour__closebtn"
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
      >
        上一步
      </button>

      <button type="button">
        下一步
      </button>
    </div>
  </footer>
</template>
