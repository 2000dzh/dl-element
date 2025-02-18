import type { ComposeOption } from 'echarts/core';
import type { ScatterSeriesOption, MapSeriesOption } from 'echarts/charts';

export type MapOption = ComposeOption<ScatterSeriesOption | MapSeriesOption>;

export interface MapJSON<G> {
	type: 'FeatureCollection';
	features: GeoJSONFeature<G>[];
}

interface GeoJSONFeature<G> {
	type: 'Feature';
	id?: string | number;
	properties: {
		name?: string;
		cp?: number[];
		[key: string]: any;
	};
	geometry: G;
}

export type SeriesData = Array<
	{
		name: string;
		cp?: number[];
	} & SeriesDataItem
>;

export interface SeriesDataItem {
	value: any;
}
