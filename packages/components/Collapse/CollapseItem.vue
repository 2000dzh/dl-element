<script lang="ts" setup>
import { computed, inject } from 'vue';
import { includes } from 'lodash-es';
import { COLLAPSE_CTX_KEY } from './constants';
import transitionEvents from './transitionEvents';
import DlIcon from '../Icon/Icon.vue';
import type { CollapseItemProps } from './types';

defineOptions({
	name: 'DlCollapseItem',
});
const ctx = inject(COLLAPSE_CTX_KEY)!;
const props = defineProps<CollapseItemProps>();

const isActive = computed(() => includes(ctx?.activeNames.value, props.name));

function handleClick() {
	if (props.disabled) {
		return;
	}
	ctx.handleItemClick(props.name);
}
</script>

<template>
	<div
		class="dl-collapse-item"
		:class="{
			'is-disabled': disabled,
		}"
	>
		<div
			class="dl-collapse-item__header"
			:id="`item-header-${name}`"
			:class="{
				'is-disabled': disabled,
				'is-active': isActive,
			}"
			@click="handleClick"
		>
			<span class="dl-collapse-item__title">
				<slot name="title">
					{{ title }}
				</slot>
			</span>
			<DlIcon icon="angle-right" class="header-angle" />
		</div>
		<transition name="slide" v-on="transitionEvents">
			<div class="dl-collapse-item__wapper" v-show="isActive">
				<div
					class="dl-collapse-item__content"
					:id="`item-content-${name}`"
				>
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<style scoped></style>

<style scoped>
@import './style.css';
</style>
