<script setup lang="ts">
import { computed } from 'vue';
import { isArray } from 'lodash-es';
import { ringPorps } from './ring.ts';

defineOptions({
	name: 'DlRing',
});

const props = defineProps(ringPorps);

const circleList = computed(() => {
	if (!isArray(props.ratioList)) {
		return [];
	}

	let dashOffset = 0; // 每段的起始位置偏移
	const radius = (props.size - props.strokeWidth) / 2; // 半径
	const circumference = 2 * Math.PI * radius; // 圆周长

	return props.ratioList.map((ratio) => {
		const { color, percentage } = ratio;
		const segmentLength = (percentage / 100) * circumference; // 当前段的长度
		const gap = circumference - segmentLength; // 间隙部分

		const item = {
			cx: props.size / 2,
			cy: props.size / 2,
			r: radius,
			stroke: color,
			storkeWidth: props.strokeWidth,
			strokeDasharray: `${segmentLength} ${gap}`,
			strokeDashoffset: -dashOffset,
		};

		dashOffset += segmentLength; // 更新下一段的偏移量
		return item;
	});
});
</script>

<template>
	<svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
		<circle
			v-for="(obj, index) in circleList"
			:key="index"
			:cx="obj.cx"
			:cy="obj.cy"
			:r="obj.r"
			fill="none"
			:stroke="obj.stroke"
			:stroke-width="obj.storkeWidth"
			:stroke-dasharray="obj.strokeDasharray"
			:stroke-dashoffset="obj.strokeDashoffset"
		/>
	</svg>
</template>
