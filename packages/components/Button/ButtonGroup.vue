<script setup lang="ts">
import { provide, reactive, toRef } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants.ts';
import type { ButtonGroupProps } from './types.ts';

defineOptions({
	name: 'DlButtonGroup',
});

const props = defineProps<ButtonGroupProps>();

provide(
	BUTTON_GROUP_CTX_KEY,
	reactive({
		size: toRef(props, 'size'),
		type: toRef(props, 'type'),
		disabled: toRef(props, 'disabled'),
	})
);
</script>

<template>
	<div class="dl-button-group">
		<slot></slot>
	</div>
</template>

<style scoped>
@import "./style.css";
</style>
