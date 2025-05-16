<script setup lang="ts">
import { onMounted, ref } from "vue";
import GaugeSVG from "./5-13-demo.vue";

const open = ref(false);
const ref1 = ref();
const ref2 = ref();
const ref3 = ref();
</script>

<template>
	<div>
		<dl-tour v-model="open">
			<dl-tour-step :target="ref1" title="Upload File">
				<img style="width: 240px" src="https://element-plus.org/images/element-plus-logo.svg" alt="tour.png" />
				<div>Put you files here.</div>
			</dl-tour-step>
			<dl-tour-step :target="ref2" title="Save" description="Save your changes" />
			<dl-tour-step :target="ref3" title="Other Actions" description="Click to see other" />
		</dl-tour>

		<button @click="open = true">打开tour</button>

		<button ref="ref1">第一步</button>
		<button ref="ref2">第二步</button>
		<button ref="ref3">第三步</button>

		<!-- 超出范围 -->
		<GaugeSVG :max="-60" :min="-100" :value="20" />
		<!-- 在范围内 -->
		<GaugeSVG :max="-20" :min="-40" :value="-55" />
		<!-- 低于范围 -->
		<GaugeSVG :max="-60" :min="-100" :value="-95" />
	</div>
</template>

<style scoped></style>
