<script setup lang="ts">
import { onActivated, onBeforeUnmount, onDeactivated, onMounted, ref, shallowRef } from "vue";
import { useGlobelProperties } from "@dl-element/hooks";
import { definePropType, GlobalResizeObserver } from "@dl-element/utils";
import type { ECharts } from "echarts";

const props = defineProps({
	options: {
		type: definePropType<any>(Object),
		default: () => ({})
	}
});

const echarts = useGlobelProperties().$echarts;

const echartsRef = ref();
const chartInstance = shallowRef<ECharts | null>(null);

// 初始化图表实例的函数
const initChart = () => {
	// 确保 chartRef 绑定了 DOM 元素且 chartInstance 尚未初始化
	if (echartsRef.value && !chartInstance.value) {
		// 初始化 ECharts 实例并赋值给 chartInstance
		chartInstance.value = echarts.init(echartsRef.value);
		// 设置图表的初始选项
		chartInstance.value && chartInstance.value.setOption(props.options);
	}
};

// 更新图表配置选项的函数
const updateChartOptions = () => {
	if (chartInstance.value) {
		// 使用新的选项更新图表，不合并现有选项并延迟更新以优化性能
		chartInstance.value.setOption(props.options, {
			notMerge: true,
			lazyUpdate: true
		});
	}
};

// 处理窗口大小调整的函数，确保图表能够自动调整大小
const handleResize = () => {
	if (chartInstance.value) {
		chartInstance.value.resize();
	}
};

// 销毁图表实例的函数，释放内存并清空引用
const disposeChart = () => {
	if (chartInstance.value) {
		chartInstance.value.dispose(); // 调用 ECharts 的 dispose 方法销毁实例
	}
	chartInstance.value = null; // 清空 chartInstance 引用，避免内存泄漏
};

// 组件挂载时初始化图表并添加窗口大小调整的事件监听器
onMounted(() => {
	initChart(); // 初始化图表
	GlobalResizeObserver.observe(echartsRef.value, handleResize);
});

// 组件卸载时移除事件监听器并销毁图表实例
onBeforeUnmount(() => {
	GlobalResizeObserver.unobserve(echartsRef.value);
	disposeChart(); // 销毁图表实例
});

// 组件激活时重新初始化图表并添加事件监听器
onActivated(() => {
	if (!chartInstance.value) {
		initChart(); // 如果图表实例不存在，重新初始化
	}
	GlobalResizeObserver.observe(echartsRef.value, handleResize);
});

// 组件停用时移除事件监听器并销毁图表实例
onDeactivated(() => {
	GlobalResizeObserver.unobserve(echartsRef.value);
	disposeChart(); // 销毁图表实例
});

defineExpose({
	updateChartOptions
});
</script>

<template>
  <div
    ref="echartsRef"
    class="dl-echarts"
  />
</template>
