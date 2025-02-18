<script setup lang="ts">
import { mapEmit, mapProps, useMap } from './map';

defineOptions({
	name: 'DlMap',
});

const props = defineProps(mapProps);
const emit = defineEmits(mapEmit);

const { mapBox, map1, map2, map3, map4 } = useMap(props, emit);
</script>

<template>
  <div
    ref="mapBox"
    class="dl-echarts map-echarts-box"
  >
    <!-- 地图 -->
    <div
      ref="map1"
      class="dl-echarts map-echarts map-echarts1"
    />
    <!-- 边界 -->
    <div
      ref="map2"
      class="dl-echarts map-echarts map-echarts2"
    />
    <!-- 第二层阴影 -->
    <div
      ref="map3"
      class="dl-echarts map-echarts map-echarts3"
    />
    <!-- 第三层阴影 -->
    <div
      ref="map4"
      class="dl-echarts map-echarts map-echarts4"
    />
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
