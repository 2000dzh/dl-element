import { ref, computed, onMounted } from 'vue';
import { isArray } from 'lodash-es';
import { useGlobelProperties } from '@dl-element/hooks';
import { getMpData } from './api';
import application from './assets/application.png';
import mapTexture from './assets/dituwenli';
import selectMapTexture from './assets/dituwenli1';
import type { SetupContext, ExtractPropTypes } from 'vue';

export const mapProps = {
	modelValue: {
		type: String,
		required: true,
	},
};

export const mapEmit = {
	'update:modelValue': (value: string) => value,
};

export function useMap(
	props: ExtractPropTypes<typeof mapProps>,
	emit: SetupContext<typeof mapEmit>['emit']
) {
	const echarts = useGlobelProperties().$echarts;
	const map1 = ref();
	let usaJson = {};

	const mapName = ref(props.modelValue);

	let myChart;
	const mapTextureImg = new Image();
	const selectMapTextureImg = new Image();
	mapTextureImg.src = mapTexture;
	selectMapTextureImg.src = selectMapTexture;

	function updateMapName(value: string) {
		mapName.value = value;
		emit('update:modelValue', value);
	}

	const getMapJsonData = async () => {
		// const int = () => import('@public/mapData/json/world.json');
		// const res = await int();
		// console.log(res.default);
	};

	const convertData = (data: Array<any>) => {
		const result = [];
		const features = usaJson ? usaJson.features : null;

		if (!isArray(features) || !isArray(data)) {
			return result;
		}

		features.forEach((item) => {
			const areaName = item.properties.name;
			const areaCoord = item.properties.cp;
			const areaVal = data.find((k) => k.name === areaName);
			if (areaVal) {
				result.push({
					name: areaName,
					value: isArray(areaCoord)
						? areaCoord.concat(areaVal.value)
						: 0,
				});
			}
		});
		console.log(result);
		return result;
	};

	const option1 = computed(() => {
		const option = {
			geo: {
				// 使用 registerMap 注册的地图名称。
				map: mapName.value,
				zlevel: 5,
				z: 5,
				id: 5,
				// 地图的长宽比，如果设置了projection则无效
				aspectScale: 1,
				// 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
				selectedMode: 'sign',
				tooltip: {
					show: false,
				},
				// 单个地图区域上的文本标签
				label: {
					show: true,
					color: '#fff',
					fontSize: 12,
				},
				// 单个地图区域设置
				itemStyle: {
					// 设置地图区域颜色
					areaColor: {
						// 使用图片作为区域背景
						image: mapTextureImg,
						repeat: 'repeat',
					},
					borderColor: '#28c095',
					borderWidth: 1,
				},
				// 鼠标移入单个区域设置
				emphasis: {
					itemStyle: {
						areaColor: {
							image: selectMapTextureImg,
							repeat: 'repeat',
						},
						borderColor: '#d9f24b',
						borderWidth: 4,
					},
					label: {
						show: true,
						color: 'pink',
					},
				},
				// 在地图中对特定的区域配置样式
				regions: [],
			},
			series: [
				// 提示框
				{
					name: 'application',
					type: 'scatter',
					// 该系列使用的坐标系
					coordinateSystem: 'geo',
					// 标记的图形
					symbol: 'image://' + application,
					// 标记的图形大小
					symbolSize: [170, 50],
					// 标记相对于原本位置的偏移
					symbolOffset: [0, -40],
					zlevel: 6,
					z: 6,
					id: 6,
					emphasis: {
						label: {
							show: true,
							color: '#fff',
						},
					},
					// 图形上的文本标签
					label: {
						show: true,
						padding: [4, 0],
						offset: [],
						fontSize: 27,
						color: '#fff',
						formatter: (params) => {
							const val = params.value[2];
							return `当前区域客户数: {a|${val}}个`;
						},
						rich: {
							a: {
								fontSize: 16,
								color: '#00ff85',
							},
						},
					},
					data: convertData([{ name: '南京市', value: 2121 }]),
				},
				// 底层图层
				{
					type: 'map',
					map: mapName.value,
					mapType: 'province',
					aspectScale: 1,
					selectedMode: 'single',
					zlevel: 4,
					z: 4,
					id: 4,
					zoom: 1,
					itemStyle: {
						areaColor: {
							type: 'radial',
							x: 0,
							y: 0,
							r: 300,
							colorStops: [
								{
									offset: 0,
									color: '#0b6454',
								},
								{
									offset: 1,
									color: '#1b7d55',
								},
							],
							global: true,
						},
						borderWidth: 0.1,
						borderColor: 'rgba(0,0,0,0)',
						borderType: 'solid',
					},
					data: [],
				},
			],
		};

		return option;
	});

	const initMap = async () => {
		// console.log(usaJson);
		getMpData().then((resulst) => {
			usaJson = resulst.data || {};
      console.log(usaJson);
			if (mapName.value) {
				echarts.registerMap(mapName.value, usaJson, {});
				console.log(echarts.getMap(mapName.value));
				console.log(usaJson);
				myChart = echarts.init(map1.value);
				console.log(option1.value);
				// await getMapJsonData()
				setMap();
			}
		});
	};

	const setMap = () => {
		if (myChart) {
			myChart.setOption(option1.value, true);
		}
	};

	onMounted(() => {
		initMap();
	});

	return {
		map1,
		mapName,
	};
}
