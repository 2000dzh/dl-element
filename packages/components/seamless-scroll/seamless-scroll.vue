<script setup lang="ts">
import { SeamlessScrollProps, useSeamlessScroll } from "./seamless-scroll";

defineOptions({
	name: "DlSeamlessScroll"
});

const props = defineProps(SeamlessScrollProps);

const { wrapperRef, boxRef, topRef, showShadowDiv, onMouseOver, onMouseOut } = useSeamlessScroll(props);
</script>

<template>
  <div class="dl-seamless-scroll">
    <div
      ref="wrapperRef"
      class="dl-seamless-scroll__wrapper"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
    >
      <div
        ref="boxRef"
        class="dl-seamless-scroll__box"
      >
        <div
          ref="topRef"
          class="dl-seamless-scroll__box-top"
        >
          <slot />
        </div>
        <div
          v-if="showShadowDiv"
          class="dl-seamless-scroll__box-bottom"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
