const CityMap = Object.freeze({
	Jiangsu: { name: '江苏', pinyin: 'jiangsu' },
	Wuxi: { name: '无锡市', pinyin: 'wuxi' },
	Changzhou: { name: '常州市', pinyin: 'changzhou' },
	Nanjing: { name: '南京市', pinyin: 'nanjing' },
	Suzhou: { name: '苏州市', pinyin: 'suzhou' },
	Zhenjiang: { name: '镇江市', pinyin: 'zhenjiang' },
	Nantong: { name: '南通市', pinyin: 'nantong' },
	Suqian: { name: '宿迁市', pinyin: 'suqian' },
	Huaian: { name: '淮安市', pinyin: 'huaian' },
	Yangzhou: { name: '扬州市', pinyin: 'yangzhou' },
	Xuzhou: { name: '徐州市', pinyin: 'xuzhou' },
	Lianyungang: { name: '连云港市', pinyin: 'lianyungang' },
	Yancheng: { name: '盐城市', pinyin: 'yancheng' },
	TaiZhou: { name: '泰州市', pinyin: 'taizhou' },

	AnHui: { name: '安徽', pinyin: 'anhui' },
} as const);

const DEFAULT_CDN = '/dl-mapData/assets/map/';

// 定义所需的资源列表
export const MAP_ASSETS = Object.freeze({
	normalTexture: `${DEFAULT_CDN}dituweixuanzhongbeijing.png`,
	selectedTexture: `${DEFAULT_CDN}dituxuanzhongbeijing.png`,
	applicationIcon: `${DEFAULT_CDN}application.png`,
} as const);

/**
 * @description 根据城市中文名查找对应的城市信息
 * @param cityName 城市中文名（例如：'淮安市'）
 * @returns 城市信息对象
 */
export const findCityByName = (cityName: string) => {
	const entry = Object.entries(CityMap).find(
		([, value]) => value.name === cityName
	);
	if (!entry) return undefined;

	const [key] = entry;

	return CityMap[key as keyof typeof CityMap];
};

/**
 * @description 获取地图 JSON 文件路径
 */
export function getMapJsonPath(cityKey: string) {
	const city = findCityByName(cityKey);

	if (!city) return undefined;

	return ['jiangsu', 'anhui'].includes(city.pinyin)
		? `/map-json/json/province/${city.pinyin}.json`
		: `/map-json/json/city/${city.pinyin}.json`;
}
