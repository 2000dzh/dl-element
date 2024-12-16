import {
	ref,
	shallowRef,
	watch,
	onMounted,
	onBeforeUnmount,
	onActivated,
	onDeactivated,
} from 'vue';
import { isArray } from 'lodash-es';
import { useGlobelProperties } from '@dl-element/hooks';
import {
	definePropType,
	GlobalResizeObserver,
	zeroFill,
} from '@dl-element/utils';
import type { SetupContext, ExtractPropTypes } from 'vue';
import type { ECharts } from 'echarts/core';
import type { lineData, LoadCureOption } from './type';
import dayjs from 'dayjs';

export const LoadCureProps = {
	// 曲线数据
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
		let { xAxisData, seriesData } = props.lineData;

		const newSeriesData = getTimeData(xAxisData, seriesData);
		let day = '';

		if (!isArray(xAxisData)) {
			xAxisData = [];
		} else {
			const firstVal = xAxisData[0] || '';
			day = dayjs(firstVal).format('YYYY-MM-DD');
		}

		console.log(newSeriesData);

		const options: LoadCureOption = {
			animationDuration: 200,
			color: ['red', 'pink'],

			xAxis: [
				{
					type: 'time',
					splitNumber: 24,

					// 坐标轴 刻度标签的相关设置
					axisLabel: {
						// 强制显示最后一个点的label
						showMaxLabel: true,
						formatter(value, index) {
							const day = new Date(value);
							let hour = zeroFill(day.getHours());
							const minute = zeroFill(day.getMinutes());

							if (hour === '00' && index > 1) {
								hour = '24';
							}

							return `${hour}:${minute}`;
						},
					},

					// 坐标轴 轴线相关设置
					axisLine: {
						show: true,
						lineStyle: {
							color: 'rgba(0,0,0,0.1)',
						},
					},

					// 坐标轴 刻度相关位置
					axisTick: {
						// 是否显示坐标轴刻度
						show: false,
					},

					splitLine: {
						show: true,
						lineStyle: {
							type: 'dotted',
							color: '#d5d9df',
						},
					},

					min: day ? `${day} 00:00` : '',
					max: day ? `${day} 24:00` : '',
				},
			],
			yAxis: [
				{
					type: 'value',
					// 坐标轴 刻度标签的相关设置
					axisLabel: {
						color: '#333',
						fontSize: 12,
					},

					// 坐标轴 轴线相关设置
					axisLine: {
						show: false,
					},

					// 坐标轴 刻度相关位置
					axisTick: {
						// 是否显示坐标轴刻度
						show: false,
					},

					splitLine: {
						show: true,
						lineStyle: {
							type: 'dotted',
							color: '#d5d9df',
						},
					},
				},
			],

			tooltip: {
				trigger: 'axis',
				// 鼠标是否可进入提示框浮层,默认 false
				enterable: true,
				// 是否将 tooltip 限制在图表的区域内
				confine: true,
				formatter(params) {
					const newParams = isArray(params) ? params : [params];
					let element = '';
					let timeTitle;
					let itemStr = '';

					newParams.forEach((item) => {
						const data = item.data;
						if (isArray(data)) {
							const len = data.length;
							const val = (data[len - 1] || {}) as Record<
								string,
								any
							>;
							timeTitle = val.time;
							itemStr += `
                <div class="dl-tooltip-list">
                  ${item.marker}
                  <div class="dl-tooltip-list-name">${item.seriesName}：</div>
                  <div class="dl-tooltip-list-value">${val.value}</div>
                </div>
              `;
						}
					});

					element = `
              <div class="dl-tooltip">
                <div class="dl-tooltip-title">${timeTitle || ''}</div>
                ${itemStr}
              </div>
          `;
					return element;
				},
				padding: 0,

        // 坐标轴指示器配置项
				axisPointer: {
          // 指示器类型
					type: 'cross',
          // 对时间轴比较有意义,可以自动寻找细小的数值点
          snap: true,
          // 坐标轴指示器的文本标签
          label: {
            show: false
          },
          // x轴的指示线样式设置
          lineStyle: {
            type: 'dashed',
            color: '#666',
            width: 1
          }
				},
			},

			series: [
				{
					name: '测试曲线',
					type: 'line',
					data: newSeriesData,
				},
			],
		};

		return options;
	};

	const getTimeData = (xData: Array<string>, data: Array<any>) => {
		let result: Array<[string, any, any]> = [];
		if (isArray(xData) && isArray(data)) {
			result = data.map((val, index) => {
				let xVal = xData[index] || '';
				const tooltipVal = {
					value: val,
					time: xVal.split(' ')[1],
				};
				return [xVal, val, tooltipVal];
			});
		}

		return result;
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
