import { ref, shallowRef } from 'vue';
import { definePropType } from '@dl-element/utils';
import type { SetupContext, ExtractPropTypes } from 'vue';
import type { ECharts } from 'echarts/core';
import type { lineData } from './type';

export const LoadCureProps = {
	lineData: {
		type: definePropType<lineData>(Object),
		default: () => ({}),
	},
};

export const LoadCureEmit = {};

export function useLoadCure(
	props: ExtractPropTypes<typeof LoadCureProps>,
	emit: SetupContext<typeof LoadCureEmit>['emit']
) {
	const DlLoadCure = ref();
	const chartInstance = shallowRef<ECharts | null>(null);

  	// 初始化图表实例的函数
	const initChart = () => {
		// 确保 chartRef 绑定了 DOM 元素且 chartInstance 尚未初始化
		if (DlLoadCure.value && !chartInstance.value) {
			// 初始化 ECharts 实例并赋值给 chartInstance
			// chartInstance.value = echarts.init(DlLoadCure.value, );
			// 设置图表的初始选项
			// chartInstance.value.setOption(options);
		}
	};

	return {
		DlLoadCure,
	};
}
