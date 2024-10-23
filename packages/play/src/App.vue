<script setup lang="ts">
import { ref } from 'vue';
const mapName = ref('江苏');
</script>

<template>
	<dl-button type="primary">测试</dl-button>
	<!-- <dl-alert title="Success alert" type="success" effect="dark"></dl-alert>
	<dl-alert type="success">Success alert</dl-alert>
	<dl-alert type="info">Info alert</dl-alert>
	<dl-alert type="warning">Warning alert</dl-alert>
	<dl-alert type="danger">Error alert</dl-alert> -->
	<div style="width: 400px; height: 400px">
		<map1 v-model="mapName"></map1>
	</div>
</template>

<style scoped></style>
