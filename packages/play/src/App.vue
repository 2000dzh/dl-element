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

console.log(time24(Date.now() - 1000 * 60 * 60 * 24));

const lineData = ref({
	xAxisData: time48(),
	seriesData: Array.from({ length: 1440 }, (_, index) => index + 100),
	unit: [],
});
</script>

<template>
	<dl-button @click="show = !show" type="primary">测试</dl-button>
	<!-- <dl-alert title="Success alert" type="success" effect="dark"></dl-alert>
	<dl-alert type="success">Success alert</dl-alert>
	<dl-alert type="info">Info alert</dl-alert>
	<dl-alert type="warning">Warning alert</dl-alert>
	<dl-alert type="danger">Error alert</dl-alert> -->
	<!-- <div v-if="show" style="width: 50%; height: 800px">
		<map1 v-model="mapName" :seriesData="seriesData"></map1>
		<dl-load-cure></dl-load-cure>
	</div> -->
	<div style="width: 90%; height: 800px">
		<!-- <map1 v-model="mapName" :seriesData="seriesData"></map1> -->
		<dl-load-cure :lineData="lineData"></dl-load-cure>
	</div>
</template>

<style scoped></style>
