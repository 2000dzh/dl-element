import { withInstall } from '@dl-element/utils';
import Button from './button.vue';
import ButtonGroup from './button-group.vue';

export const DlButton = withInstall(Button)
export const DlButtonGroup = withInstall(ButtonGroup)

export * from "./types";