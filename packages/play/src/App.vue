<script setup lang="ts">
import { ref } from 'vue';
import Demo from './demo/map-demo.vue';

const flag = ref(true);
</script>

<template>
	<div>
		<Demo v-if="flag" />

		<dl-button @click="flag = !flag">切换</dl-button>
	</div>
</template>

<style scoped></style>
