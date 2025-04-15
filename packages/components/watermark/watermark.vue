<script setup lang="ts">
import { watermarkProps } from "./watermark";
import { useWatermark } from "./useWatermark";
import type { CSSProperties } from "vue";

defineOptions({
	name: "DlWatermark"
});

const style: CSSProperties = {
	position: "relative"
};

const props = defineProps(watermarkProps);

const { containerRef } = useWatermark(props);
</script>

<template>
  <div
    ref="containerRef"
    :style="[style]"
  >
    <slot />
  </div>
</template>

<style scoped></style>
