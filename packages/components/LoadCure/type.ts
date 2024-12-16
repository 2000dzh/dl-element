import {} from 'echarts';
import type { ComposeOption } from 'echarts/core';
import type { LineSeriesOption } from 'echarts/charts';
import type {
	GridComponentOption,
	TitleComponentOption,
	LegendComponentOption,
	TooltipComponentOption,
} from 'echarts/components';

// 如果你懒得去进行组合，那么使用EChartsOption就相当于所有的组件和图表的类型了。
// import { EChartsOption } from 'echarts/types/dist/shared';

// ComposeOption 默认包含 xAxis,yAxis 类型
export type LoadCureOption = ComposeOption<
	| TitleComponentOption // 对应 title
	| LegendComponentOption // 对应 legend
	| GridComponentOption // 对应 grid
	| TooltipComponentOption // 对应 tooltip
	| LineSeriesOption // 对应 series-line
>;
export interface lineData {
	xAxisData: Array<any>;
	seriesData: Array<any>;
	unit: Array<any>;
}
