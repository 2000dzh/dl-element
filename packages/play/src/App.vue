<script setup lang="ts">
import { onMounted, ref } from 'vue';
// import Demo from './demo/map-demo.vue';
import Demo from './demo/seamless-scroll-demo.vue';
// import Ceshi from './demo/ceshi.vue';

const flag = ref(true);

const ceshidemo = ref();

onMounted(() => {
	console.log(ceshidemo.value);
});
</script>

<template>
	<div>
		<Demo v-if="flag" />

		<!-- <Ceshi ref="ceshidemo" /> -->

		<dl-button @click="flag = !flag">切换</dl-button>
	</div>
</template>

<style scoped></style>
