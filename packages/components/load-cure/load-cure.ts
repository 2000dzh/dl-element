
import { definePropType } from '@dl-element/utils';
import type { lineData } from './type';

export const LoadCureProps = {
  // 曲线数据
  lineData: {
    type: definePropType<lineData>(Object),
    default: () => ({}),
  },
};

export const LoadCureEmit = {};
