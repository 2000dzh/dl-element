<script setup lang="ts">
import { mapEmit, mapProps, useMap } from './map';

defineOptions({
	name: 'map1',
});

const props = defineProps(mapProps);
const emit = defineEmits(mapEmit);

const { mapBox, map1, map2, map3, map4 } = useMap(props, emit);
</script>

<template>
	<div class="dl-echarts map-echarts-box" ref="mapBox">
		<!-- 地图 -->
		<div class="dl-echarts map-echarts map-echarts1" ref="map1"></div>
		<!-- 边界 -->
		<div class="dl-echarts map-echarts map-echarts2" ref="map2"></div>
		<!-- 第二层阴影 -->
		<div class="dl-echarts map-echarts map-echarts3" ref="map3"></div>
		<!-- 第三层阴影 -->
		<div class="dl-echarts map-echarts map-echarts4" ref="map4"></div>
	</div>
</template>

<style>
.map-echarts-box {
	position: relative;
	background-color: #000;
}
.map-echarts {
	position: absolute;
	top: 0;
}
.map-echarts1 {
	z-index: 4;
}
.map-echarts2 {
	z-index: 3;
}
.map-echarts3 {
	top: 10px;
	z-index: 2;
}
.map-echarts4 {
	top: 20px;
	z-index: 1;
}
</style>
