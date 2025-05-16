<script setup lang="ts">
import { computed } from "vue";

// 定义组件的 Props 接口
interface Props {
	min: number; // 最小值
	max: number; // 最大值
	value: number; // 当前值
}

// 定义组件名称
defineOptions({
	name: "GaugeSVG"
});

// 获取组件的 props
const props = defineProps<Props>();

// 计算实际显示范围
const effectiveRange = computed(() => {
	let effectiveMin = props.min;
	let effectiveMax = props.max;

	// 如果当前值小于最小值，调整最小值
	if (props.value < props.min) {
		effectiveMin = props.value;
	}
	// 如果当前值大于最大值，调整最大值
	if (props.value > props.max) {
		effectiveMax = props.value;
	}

	return { min: effectiveMin, max: effectiveMax };
});

// 计算圆弧上的坐标的工具函数
const calculatePoint = (angle: number): { x: number; y: number } => {
	const radius = 40; // 圆的半径
	const centerX = 50; // 圆心 X 坐标
	const centerY = 50; // 圆心 Y 坐标
	const radians = ((angle - 180) * Math.PI) / 180; // 将角度转换为弧度
	return {
		x: centerX + radius * Math.cos(radians), // 计算 X 坐标
		y: centerY + radius * Math.sin(radians) // 计算 Y 坐标
	};
};

// 计算值的圆弧
const getValueArc = computed(() => {
	const percentage = Math.min(
		Math.max((props.value - effectiveRange.value.min) / (effectiveRange.value.max - effectiveRange.value.min), 0),
		1
	);
	const angle = 180 * percentage; // 计算角度
	const point = calculatePoint(angle); // 计算圆弧终点坐标
	const largeArcFlag = angle > 180 ? 1 : 0; // 判断是否为大弧

	return `M 10 50 A 40 40 0 ${largeArcFlag} 1 ${point.x} ${point.y}`; // 返回 SVG 路径
});

// 计算最小值和最大值标记的圆弧
const getMinBandArc = computed(() => "M 18 50 A 32 32 0 0 1 18.158 46.824");
const getMaxBandArc = computed(() => "M 81.842 46.824 A 32 32 0 0 1 82 50");

// 计算值的颜色
const getValueColor = computed(
	() =>
		props.value < props.min || props.value > props.max
			? "rgb(209, 67, 63)" // 红色 - 超出范围
			: "rgb(7, 177, 130)" // 绿色 - 正常范围
);

// 标签位置
const minLabelPos = computed(() => ({
	x: 20,
	y: 47
}));

const maxLabelPos = computed(() => ({
	x: 78,
	y: 47
}));
</script>

<template>
	<div class="gauge-svg">
		<svg viewBox="0 0 100 50">
			<!-- 背景圆弧 -->
			<path class="dial" d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#DDD" stroke-width="2" />

			<!-- 值文本 -->
			<g class="text-container">
				<text
					class="value-text"
					dominant-baseline="central"
					fill="#999"
					font-family="sans-serif"
					font-size="100%"
					font-weight="normal"
					text-anchor="middle"
					x="50"
					y="50"
				></text>
			</g>

			<!-- 值的圆弧 -->
			<path :d="getValueArc" :style="{ stroke: getValueColor }" class="value" fill="none" stroke-width="8" />

			<!-- 最小值标记 -->
			<path :d="getMinBandArc" class="band" fill="none" stroke="#d1433f" stroke-width="2" />
			<text
				:x="minLabelPos.x"
				:y="minLabelPos.y"
				class="bandLabel"
				dominant-baseline="middle"
				fill="#999"
				font-family="sans-serif"
				font-size="70%"
				text-anchor="start"
			>
				{{ min.toFixed(1) }}
				<!-- 显示最小值 -->
			</text>

			<!-- 最大值标记 -->
			<path :d="getMaxBandArc" class="band" fill="none" stroke="#d1433f" stroke-width="2" />
			<text
				:x="maxLabelPos.x"
				:y="maxLabelPos.y"
				class="bandLabel"
				dominant-baseline="middle"
				fill="#999"
				font-family="sans-serif"
				font-size="70%"
				text-anchor="end"
			>
				{{ max.toFixed(1) }}
				<!-- 显示最大值 -->
			</text>
		</svg>
		<p class="gauge-svg-text">{{ value.toFixed(1) }}</p>
	</div>
</template>

<style scoped>
.gauge-svg {
	text-align: center;
}

.gauge-svg-text {
	margin-top: 10px;
	font-size: 25px;
	color: #999;
}

.value {
	transition: all 0.3s ease; /* 添加过渡效果 */
}
</style>
