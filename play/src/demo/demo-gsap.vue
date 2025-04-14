<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

function run() {
	// gsap.to(".box", {
	// 	rotation: 360,
	// 	x: 200,
	// 	duration: 2
	// });

	const tl = gsap.timeline();

	//一个接一个地序列化
	tl.to(".box", { duration: 2, x: 100 }, 2).to(".box", { duration: 1, y: 200 }, 4).to(".box", { duration: 3, rotation: 360 }, 6);
}

onMounted(() => {
	run();
});
</script>

<template>
	<div class="demo-gsap">
		<div class="box"></div>
	</div>
</template>

<style scoped>
.box {
	width: 200px;
	height: 200px;
	background-color: pink;
}
</style>
