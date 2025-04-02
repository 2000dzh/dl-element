<script setup lang="ts">
import { ref } from 'vue';

const ratioList = ref([
	{
		color: 'red',
		percentage: 10,
	},
	{
		color: 'blue',
		percentage: 30,
	},
	{
		color: 'orange',
		percentage: 60,
	},
]);
</script>

<template>
	<div>
		<dl-ring :ratioList="ratioList" />
	</div>
</template>

<style scoped></style>
