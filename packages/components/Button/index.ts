import { withInstall } from '@dl-element/utils';
import Button from './Button.vue';
import ButtonGroup from './ButtonGroup.vue';

export const DlButton = withInstall(Button)
export const DlButtonGroup = withInstall(ButtonGroup)

export * from "./types";