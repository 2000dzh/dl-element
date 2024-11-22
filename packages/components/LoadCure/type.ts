import type { ComposeOption } from 'echarts/core';
import type { LineSeriesOption } from 'echarts/charts';

export type LoadCureOption = ComposeOption<LineSeriesOption>;
export interface lineData {
	xAxisData: Array<any>;
	seriesData: Array<any>;
	unit: Array<any>;
}
