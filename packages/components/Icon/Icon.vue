<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';
import { omit } from 'lodash-es';
import type { IconProps } from './types';

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
		<FontAwesomeIcon v-bind="filterProps" />
	</i>
</template>

<style scoped src="./style.css"></style>
