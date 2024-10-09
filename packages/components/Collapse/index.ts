import { withInstall } from '@dl-element/utils';
import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';

export const DlCollapse = withInstall(Collapse);
export const DlCollapseItem = withInstall(CollapseItem);

export * from './types';
