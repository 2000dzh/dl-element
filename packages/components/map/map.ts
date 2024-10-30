import { ref, computed, onMounted, onUnmounted } from 'vue';
import { each, isArray } from 'lodash-es';
import { useGlobelProperties } from '@dl-element/hooks';
import { getMpData } from './api';
import application from './assets/application.png';
import mapTexture from './assets/dituwenli';
import selectMapTexture from './assets/dituwenli1';
import type { SetupContext, ExtractPropTypes } from 'vue';
import type { ECharts } from 'echarts/core';
import type { MapOption, ChartList } from './type';

export const mapProps = {
	modelValue: {
		type: String,
		required: true,
	},
	seriesData: {
		type: Array<{ name: string; value: any }>,
		default: () => [],
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
	const map2 = ref();
	const map3 = ref();
	const map4 = ref();
	const mapName = ref(props.modelValue);
	const seriesData = props.seriesData;
	let usaJson: any = {};

	let myChart1: ECharts | null = null;
	let myChart2: ECharts | null = null;
	let myChart3: ECharts | null = null;
	let myChart4: ECharts | null = null;
	const mapTextureImg = new Image();
	const selectMapTextureImg = new Image();
	mapTextureImg.src = mapTexture;
	selectMapTextureImg.src = selectMapTexture;

	function updateMapName(value: string) {
		mapName.value = value;
		emit('update:modelValue', value);
	}

	const convertData = (data: Array<any>) => {
		const result: Array<{
			name: string;
			value: Array<number>;
		}> = [];
		const features = usaJson ? usaJson.features : null;

		if (!isArray(features) || !isArray(data)) {
			return result;
		}

		features.forEach((item) => {
			// 区域名称
			const areaName = item.properties.name;
			// 区域经纬度
			const areaCoord = item.properties.cp;
			// 区域数据
			const areaVal = data.find((k) => k.name === areaName);
			if (areaVal) {
				result.push({
					name: areaName,
					value: isArray(areaCoord)
						? areaCoord.concat(areaVal.value)
						: [],
				});
			}
		});
		console.log(result);
		return result;
	};

	const option1 = computed(() => {
		const option: MapOption = {
			geo: {
				// 使用 registerMap 注册的地图名称。
				map: mapName.value,
				zlevel: 5,
				z: 5,
				id: 1,
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
					type: 'scatter',
					id: 2,
					name: 'application',
					// 该系列使用的坐标系
					coordinateSystem: 'geo',
					// 标记的图形
					symbol: 'image://' + application,
					// 标记的图形大小
					symbolSize: [190, 50],
					// 标记相对于原本位置的偏移
					symbolOffset: [0, -40],
					zlevel: 6,
					z: 6,
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
						offset: [0, -2],
						fontSize: 14,
						color: '#fff',
						formatter(params) {
							const val = isArray(params.value)
								? (params.value.at(-1) ?? '')
								: '';
							return `当前区域客户数: {a|${val}}个`;
						},
						rich: {
							a: {
								fontSize: 16,
								color: '#00ff85',
							},
						},
					},
					data: convertData(seriesData),
				},
				// 底层图层
				{
					type: 'map',
					id: 3,
					map: mapName.value!,
					// 地图的长宽比，如果设置了projection则无效
					aspectScale: 1,
					// 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
					selectedMode: 'single',
					zlevel: 4,
					z: 4,
					zoom: 1,
					itemStyle: {
						// 可以设置纯色,也支持设置为渐变色和纹理填充，具体见option.color
						areaColor: {
							// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.5,
							colorStops: [
								// 0% 处的颜色
								{
									offset: 0,
									color: '#0b6454',
								},
								// 100% 处的颜色
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
					data: convertData(seriesData),
				},
			],
		};

		return option;
	});

	const option2 = computed(() => {
		const option: MapOption = {
			series: [
				{
					type: 'map',
					id: 4,
					map: mapName.value!,
					// 地图的长宽比，如果设置了projection则无效
					aspectScale: 1,
					// 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
					selectedMode: 'single',
					zlevel: 3,
					z: 3,
					label: {
						show: false,
					},
					itemStyle: {
						areaColor: {
							type: 'linear',
							x: 0,
							y: 5,
							x2: 0,
							y2: 0,
							colorStops: [
								{
									offset: 0,
									color: '#2eff85', // 0% 处的颜色
								},
								{
									offset: 1,
									color: '#2eff85', // 100% 处的颜色
								},
							],
							global: false, // 缺省为 false
						},
						shadowColor: '#2eff85',
						shadowBlur: 5,
						borderWidth: 5,
						borderColor: '#2eff85',
						borderType: 'solid',
					},
				},
			],
		};

		return option;
	});

	const option3 = computed(() => {
		const option: MapOption = {
			series: [
				{
					type: 'map',
					id: 5,
					map: mapName.value!,
					selectedMode: 'single',
					aspectScale: 1,
					z: 2,
					zlevel: 2,
					label: {
						show: false,
					},
					itemStyle: {
						areaColor: '#0b704d',
						borderWidth: 2,
						borderColor: '#0e8058',
						borderType: 'solid',
					},
				},
			],
		};

		return option;
	});

	const option4 = computed(() => {
		const option: MapOption = {
			series: [
				{
					type: 'map',
					id: 6,
					map: mapName.value!,
					selectedMode: 'single',
					aspectScale: 1,
					z: 1,
					zlevel: 1,
					label: {
						show: false,
					},
					itemStyle: {
						areaColor: '#0d4137',
						borderWidth: 2,
						borderColor: '#0b4137',
						borderType: 'solid',
						shadowColor: '#000',
						shadowBlur: 30,
					},
				},
			],
		};

		return option;
	});

	const initMap = () => {
		myChart1 = echarts.init(map1.value);
		myChart2 = echarts.init(map2.value);
		myChart3 = echarts.init(map3.value);
		myChart4 = echarts.init(map4.value);
	};

	const setMap = () => {
		let chartList: ChartList | null = [
			{
				chart: myChart1,
				value: option1.value,
			},
			{
				chart: myChart2,
				value: option2.value,
			},
			{
				chart: myChart3,
				value: option3.value,
			},
			{
				chart: myChart4,
				value: option4.value,
			},
		];

		each(chartList, (val) => {
			if (val.chart) {
				val.chart.setOption(val.value, true);
			}
		});

		chartList = null;
	};

	const initData = async () => {
		getMpData().then((resulst) => {
			usaJson = resulst.data || {};
			if (mapName.value) {
				echarts.registerMap(mapName.value, usaJson, {});
				initMap();
				setMap();
			}
		});
	};

	const destructionMap = () => {
		each([myChart1, myChart2, myChart3, myChart4], (chart) => {
			if (chart) {
				chart.dispose();
				chart = null;
			}
		});
	};

	onMounted(() => {
		initData();
	});

	onUnmounted(() => {
		destructionMap();
	});

	return {
		map1,
		map2,
		map3,
		map4,
		mapName,
	};
}
