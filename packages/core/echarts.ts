import * as echarts from 'echarts/core';
import { MapChart, ScatterChart, LineChart } from 'echarts/charts';
import {
  // 标题组件
  TitleComponent,
  // 提示框组件
  TooltipComponent,
  // 直角坐标系组件
  GridComponent,
} from 'echarts/components';
import {
  LabelLayout, // 标签自动布局
  UniversalTransition, // 全局过渡动画
} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  MapChart,
  ScatterChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

export default echarts;
