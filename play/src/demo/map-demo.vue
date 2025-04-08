<script setup lang="ts">
import { ref } from 'vue';
import { time48, time96, time288, time1440, time24 } from '@dl-element/utils';

const mapName = ref('江苏');
const seriesData = [
	{
		name: '南京市',
		value: 2112,
	},
	{
		name: '苏州市',
		value: 23,
	},
];
const show = ref(true);

// console.log(time24(Date.now() - 1000 * 60 * 60 * 24));

const lineData = ref({
	xAxisData: time96(),
	seriesData: Array.from({ length: 288 }, (_, index) => index + 100),
	unit: [],
});
</script>

<template>
	<div style="width: 90%; height: 800px">
		{{ mapName }}
		<button @click="mapName = '江苏'">江苏</button>
		<button @click="mapName = '安徽'">安徽</button>
		<dl-map v-model="mapName" :seriesData="seriesData"></dl-map>
		<!-- <dl-load-cure :lineData="lineData"></dl-load-cure> -->
	</div>
</template>

<style scoped></style>
