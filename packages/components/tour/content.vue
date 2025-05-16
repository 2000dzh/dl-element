<script setup lang="ts">
import { computed, ref, toRef, watch } from "vue";
import { tourContentProps } from "./content";
import { useFloating } from "./helper";

defineOptions({
	name: "DlTourContent"
});

const props = defineProps(tourContentProps);

const placement = ref(props.placement);
const contentRef = ref<HTMLElement | null>(null);
const arrowRef = ref<HTMLElement | null>(null);

const side = computed(() => {
	return placement.value.split("-")[0];
});

watch(
	() => props.placement,
	() => {
		placement.value = props.placement;
	}
);

const { contentStyle, arrowStyle } = useFloating(
	toRef(props, "reference"),
	contentRef,
	arrowRef,
	placement,
	toRef(props, "zIndex"),
	toRef(props, "showArrow")
);
</script>

<template>
  <div
    ref="contentRef"
    class="dl-tour__content"
    :style="contentStyle"
    :data-side="side"
    tabindex="-1"
  >
    <slot />
    <span
      ref="arrowRef"
      class="dl-tour__arrow"
      :style="arrowStyle"
    />
  </div>
</template>
