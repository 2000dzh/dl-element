<script setup lang="ts">
import { mapEmit, mapProps, useMap } from './map';

defineOptions({
	name: 'map1',
});

const props = defineProps(mapProps);
const emit = defineEmits(mapEmit);

const { map1, mapName } = useMap(props, emit);
</script>

<template>
	<div ref="map1" class="map-echarts jiangsusheng1"></div>
</template>

<style>
.jiangsusheng1 {
	background-color: #000;
}
.map-echarts {
	width: 100%;
	height: 100%;
}
</style>
