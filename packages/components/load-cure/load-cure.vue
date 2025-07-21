<script setup lang="ts">
import { nextTick, ref, useTemplateRef, watch } from "vue";
import dayjs from "dayjs";
import { isArray } from "lodash-es";
import { zeroFill } from "@dl-element/utils";
import EchartsCommon from "../my-echarts/common.vue";
import { LoadCureProps } from "./load-cure";
import type { LoadCureOption, lineData } from "./type";

defineOptions({
	name: "DlLoadCure"
});

const props = defineProps(LoadCureProps);

const childRef = useTemplateRef<InstanceType<typeof EchartsCommon>>("child");

const getTimeData = (xAxisData: lineData["xAxisData"], seriesData: lineData["seriesData"]): lineData["seriesData"] => {
	let result: lineData["seriesData"] = [];

	if (isArray(xAxisData) && isArray(seriesData)) {
		result = seriesData.map(val => {
			let newData = isArray(val.data) ? val.data : [];

			newData = newData.map((item, index) => {
				const xVal = xAxisData[index] || "";
				const tooltipVal = {
					value: item,
					time: xVal.split(" ")[1]
				};
				return [xVal, item, tooltipVal];
			});

			return {
				...val,
				data: newData,
        // 写死曲线
				type: "line"
			};
		});
	}

	return result;
};

const getOptions = () => {
	const { xAxisData, seriesData } = props.lineData;

	const newSeriesData = getTimeData(xAxisData, seriesData);
	let day = undefined;

	const firstVal = isArray(isArray) ? xAxisData[0] || undefined : undefined;
	day = dayjs(firstVal).format("YYYY-MM-DD");

	const options: LoadCureOption = {
		animationDuration: 200,
		color: ["red", "pink"],

		xAxis: [
			{
				type: "time",
				splitNumber: 24,

				// 坐标轴 刻度标签的相关设置
				axisLabel: {
					// 强制显示最后一个点的label
					showMaxLabel: true,
					formatter(value, index) {
						const day = new Date(value);
						let hour = zeroFill(day.getHours());
						const minute = zeroFill(day.getMinutes());

						if (hour === "00" && index > 1) {
							hour = "24";
						}

						return `${hour}:${minute}`;
					}
				},

				// 坐标轴 轴线相关设置
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(0,0,0,0.1)"
					}
				},

				// 坐标轴 刻度相关位置
				axisTick: {
					// 是否显示坐标轴刻度
					show: false
				},

				splitLine: {
					show: true,
					lineStyle: {
						type: "dotted",
						color: "#d5d9df"
					}
				},

				min: day ? `${day} 00:00` : "",
				max: day ? `${day} 24:00` : ""
			}
		],
		yAxis: [
			{
				type: "value",
				// 坐标轴 刻度标签的相关设置
				axisLabel: {
					color: "#333",
					fontSize: 12
				},

				// 坐标轴 轴线相关设置
				axisLine: {
					show: false
				},

				// 坐标轴 刻度相关位置
				axisTick: {
					// 是否显示坐标轴刻度
					show: false
				},

				splitLine: {
					show: true,
					lineStyle: {
						type: "dotted",
						color: "#d5d9df"
					}
				}
			}
		],

		tooltip: {
			trigger: "axis",
			// 鼠标是否可进入提示框浮层,默认 false
			enterable: true,
			// 是否将 tooltip 限制在图表的区域内
			confine: true,
			formatter(params) {
				const newParams = isArray(params) ? params : [params];
				let element = "";
				let timeTitle;
				let itemStr = "";

				newParams.forEach(item => {
					const data = item.data;
					if (isArray(data)) {
						const len = data.length;
						const val = (data[len - 1] || {}) as Record<string, any>;
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
                <div class="dl-tooltip-title">${timeTitle || ""}</div>
                ${itemStr}
              </div>
          `;
				return element;
			},
			padding: 0,

			// 坐标轴指示器配置项
			axisPointer: {
				// 指示器类型
				type: "cross",
				// 对时间轴比较有意义,可以自动寻找细小的数值点
				snap: true,
				// 坐标轴指示器的文本标签
				label: {
					show: false
				},
				// x轴的指示线样式设置
				lineStyle: {
					type: "dashed",
					color: "#666",
					width: 1
				}
			}
		},

		series: newSeriesData
	};

	return options;
};

const loadOptions = ref(getOptions());

watch(
	[() => props.lineData],
	async () => {
		loadOptions.value = getOptions();
		await nextTick();
		childRef.value?.updateChartOptions();
	},
	{
		deep: true
	}
);
</script>

<template>
  <div class="dl-echarts">
    <EchartsCommon
      ref="child"
      :options="loadOptions"
    />
  </div>
</template>
