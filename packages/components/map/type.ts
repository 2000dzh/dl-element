import type { ECharts, ComposeOption } from 'echarts/core';
import type { ScatterSeriesOption, MapSeriesOption } from 'echarts/charts';

export type MapOption = ComposeOption<ScatterSeriesOption | MapSeriesOption>;

export type ChartList = Array<{
	chart: ECharts | null;
	value: MapOption;
}>;
