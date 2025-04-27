<script setup lang="ts">
import { onMounted, ref } from 'vue';
// import Demo from './demo/map-demo.vue';
// import Demo from './demo/seamless-scroll-demo.vue';
// import Demo from './demo/demo-gsap.vue';
// import Ceshi from './demo/ceshi.vue';
// import Demo from './demo/watermark-demo.vue';
import Demo from './demo/pop-demo.vue';

const flag = ref(true);

const ceshidemo = ref();

// onMounted(() => {
// 	console.log(ceshidemo.value);
// });
</script>

<template>
	<div>
		<Demo v-if="flag" />

		<!-- <Ceshi ref="ceshidemo" /> -->

		
	</div>
</template>

<style scoped></style>
