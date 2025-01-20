<script setup lang="ts">
import { computed } from 'vue';
import { omit } from 'lodash-es';
import type { IconProps } from './types.ts';

defineOptions({
	name: 'DlIcon',
	inheritAttrs: false,
});

const props = defineProps<IconProps>();
const filterProps = computed(() => omit(props, ['type', 'color']));
const customStyles = computed(() => ({
	color: props.color ?? undefined,
}));
</script>

<template>
	<i
		class="dl-icon"
		:class="[`dl-icon-${type}`]"
		:style="customStyles"
		v-bind="$attrs"
	>
		<slot v-bind="filterProps" />
	</i>
</template>

<style scoped>
@import './style.css';
</style>
