import { withInstall } from '@dl-element/utils';
import Collapse from './collapse.vue';
import CollapseItem from './collapse-tem.vue';

export const DlCollapse = withInstall(Collapse);
export const DlCollapseItem = withInstall(CollapseItem);

export * from './types.ts';
