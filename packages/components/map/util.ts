import { isArray } from 'lodash-es';
import { getMpData } from './api';
import { getMapJsonPath } from './enum';
import type { SeriesData, MapJSON } from './type';

/**
 * @description 调整经纬度
 * @param mapJSON 地图数据
 * @param seriesData 数据
 * @returns 调整经纬度后的地图数据
 */
function adjustCoordinates(mapJSON: MapJSON<any>, seriesData: SeriesData) {
	const features = isArray(mapJSON.features) ? mapJSON.features : [];

	const newFeatures = features.map((item) => {
		const val = seriesData.find((k) => k.name === item.properties.name);
		let cp = item.properties.cp;

		if (val && isArray(val.cp) && val.cp.length > 0) {
			cp = val.cp;
		}

		return {
			...item,
			properties: {
				...item.properties,
				cp,
			},
		};
	});

	return {
		...mapJSON,
		features: newFeatures,
	};
}

/**
 * @description 格式化地图数据
 * @param mapName 地图名称
 * @param seriesData 数据
 * @returns 格式化后的数据
 */
export async function formatMapData(
	mapName: string | undefined,
	seriesData: SeriesData
): Promise<MapJSON<any> | null> {
	let mapJSON: MapJSON<any> | null = null;

	if (!mapName) {
		return mapJSON;
	}

	const url = getMapJsonPath(mapName);
	if (!url) {
		return mapJSON;
	}

	const data = await getMpData(url);

	if (data && data.data) {
		mapJSON = data.data;
	}

	if (!mapJSON) {
		return mapJSON;
	}

	mapJSON = adjustCoordinates(mapJSON, seriesData);

	return mapJSON;
}
