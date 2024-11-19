import {
	ref,
	shallowRef,
	watch,
	onMounted,
	onBeforeUnmount,
	onActivated,
	onDeactivated,
} from 'vue';
import { useGlobelProperties } from '@dl-element/hooks';
import { definePropType, GlobalResizeObserver } from '@dl-element/utils';
import type { SetupContext, ExtractPropTypes } from 'vue';
import type { ECharts } from 'echarts/core';
import type { lineData } from './type';

export const LoadCureProps = {
	// 曲线数据
	lineData: {
		type: definePropType<lineData>(Object),
		default: () => ({}),
	},
};

export const LoadCureEmit = {};

export function useLoadCure(
	props: ExtractPropTypes<typeof LoadCureProps>
	// emit: SetupContext<typeof LoadCureEmit>['emit']
) {
	const echarts = useGlobelProperties().$echarts;

	const DlLoadCure = ref();
	const chartInstance = shallowRef<ECharts | null>(null);

	// 初始化图表实例的函数
	const initChart = () => {
		// 确保 chartRef 绑定了 DOM 元素且 chartInstance 尚未初始化
		if (DlLoadCure.value && !chartInstance.value) {
			// 初始化 ECharts 实例并赋值给 chartInstance
			chartInstance.value = echarts.init(DlLoadCure.value);
			// 设置图表的初始选项
			chartInstance.value.setOption(getOptions());
		}
	};

	// 更新图表配置选项的函数
	const updateChartOptions = () => {
		if (chartInstance.value) {
			// 使用新的选项更新图表，不合并现有选项并延迟更新以优化性能
			chartInstance.value.setOption(getOptions(), {
				notMerge: true,
				lazyUpdate: true,
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

	// 获取图标配置项
	const getOptions = () => {
		const options = {
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					data: [150, 230, 224, 218, 135, 147, 260],
					type: 'line',
				},
			],
		};

		return options;
	};

	watch([() => props.lineData], updateChartOptions, {
		deep: true,
		flush: 'post',
	});

	// 组件挂载时初始化图表并添加窗口大小调整的事件监听器
	onMounted(() => {
		initChart(); // 初始化图表
		GlobalResizeObserver.observe(DlLoadCure.value, handleResize);
	});

	// 组件卸载时移除事件监听器并销毁图表实例
	onBeforeUnmount(() => {
		GlobalResizeObserver.unobserve(DlLoadCure.value);
		disposeChart(); // 销毁图表实例
	});

	// 组件激活时重新初始化图表并添加事件监听器
	onActivated(() => {
		if (!chartInstance.value) {
			initChart(); // 如果图表实例不存在，重新初始化
		}
		GlobalResizeObserver.observe(DlLoadCure.value, handleResize);
	});

	// 组件停用时移除事件监听器并销毁图表实例
	onDeactivated(() => {
		GlobalResizeObserver.unobserve(DlLoadCure.value);
		disposeChart(); // 销毁图表实例
	});

	return {
		DlLoadCure,
	};
}
