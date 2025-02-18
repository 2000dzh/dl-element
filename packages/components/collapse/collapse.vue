<script lang="ts" setup>
import { provide, ref, watch, watchEffect } from 'vue';
import { each, isArray } from 'lodash-es';
import { debugWarn } from '@dl-element/utils';
import { COLLAPSE_CTX_KEY } from './constants.ts';
import type { CollapseProps, CollapseEmits, CollapseItemName } from './types';

const COMP_NAME = 'DlCollapse' as const;

defineOptions({
	name: COMP_NAME,
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();

const activeNames = ref(props.modelValue);

watchEffect(() => {
	if (!isArray(activeNames.value)) {
		debugWarn(COMP_NAME, 'is not Array');
	}

	if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode should only have one active item');
	}
});

function handleItemClick(name: CollapseItemName) {
	let newActiveNames = [...activeNames.value];
	if (props.accordion) {
		if (newActiveNames.length && newActiveNames[0] === name) {
			newActiveNames = [];
		} else {
			newActiveNames = [name];
		}
		updateActiveNames(newActiveNames);
		return;
	}

	const index = newActiveNames.indexOf(name);

	if (index !== -1) {
		newActiveNames.splice(index, 1);
	} else {
		newActiveNames.push(name);
	}
	updateActiveNames(newActiveNames);
}

function updateActiveNames(val: Array<CollapseItemName>) {
	activeNames.value = val;
	each(['update:modelValue', 'change'], (e) =>
		emits(e as 'update:modelValue' & 'change', val)
	);
}

watch(
	() => props.modelValue,
	(newVal) => {
		updateActiveNames(newVal);
	}
);

provide(COLLAPSE_CTX_KEY, {
	activeNames,
	handleItemClick,
});
</script>

<template>
  <div class="dl-collapse">
    <slot />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
