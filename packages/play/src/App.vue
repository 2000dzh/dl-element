<script setup lang="ts">
import { ref } from 'vue';
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
</script>

<template>
	<dl-button @click="show = !show" type="primary">测试</dl-button>
	<!-- <dl-alert title="Success alert" type="success" effect="dark"></dl-alert>
	<dl-alert type="success">Success alert</dl-alert>
	<dl-alert type="info">Info alert</dl-alert>
	<dl-alert type="warning">Warning alert</dl-alert>
	<dl-alert type="danger">Error alert</dl-alert> -->
	<div v-if="show" style="width: 50%; height: 800px">
		<!-- <map1 v-model="mapName" :seriesData="seriesData"></map1> -->
		<dl-load-cure></dl-load-cure>
	</div>
	<div style="width: 500px; height: 800px">
		<!-- <map1 v-model="mapName" :seriesData="seriesData"></map1> -->
		<dl-load-cure></dl-load-cure>
	</div>
</template>

<style scoped></style>
