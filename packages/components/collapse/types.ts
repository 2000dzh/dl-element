import type { Ref } from 'vue';

export type CollapseItemName = string | number;

export interface CollapseProps {
	modelValue: Array<CollapseItemName>;
	accordion?: boolean;
}

export interface CollapseItemProps {
	name: CollapseItemName;
	title?: string;
	disabled?: boolean;
}

export interface CollapseEmits {
	(e: 'update:modelValue', value: Array<CollapseItemName>): void;
	(e: 'change', value: Array<CollapseItemName>): void;
}

export interface CollapseContext {
	activeNames: Ref<Array<CollapseItemName>>;
	handleItemClick(name: CollapseItemName): void;
}
