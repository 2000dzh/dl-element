<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { throttle } from 'lodash-es';
// import DlIcon from '../icon/icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './constants.ts';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types.ts';

defineOptions({
	name: 'DlButton',
});

const props = withDefaults(defineProps<ButtonProps>(), {
	tag: 'button',
	nativeType: 'button',
	useThrottle: true,
	throttleDuration: 500,
});
const emits = defineEmits<ButtonEmits>();
// const slots = defineSlots();

const ctx = inject(BUTTON_GROUP_CTX_KEY, {});

const _ref = ref<HTMLButtonElement>();

const size = computed(() => ctx?.size ?? (props.size || ''));
const type = computed(() => ctx?.type ?? (props.type || ''));
const disabled = computed(() => props.disabled || !!ctx?.disabled);
const comType = computed(() =>
	props.tag === 'button' ? props.nativeType : null
);
// const iconStyle = computed(() => ({
// 	marginRight: slots.default ? '6px' : '0px',
// }));

const handleBtnClick = (e: MouseEvent) => emits('click', e);
const handleBtnClickThrottle = throttle(
	handleBtnClick,
	props.throttleDuration,
	{ trailing: false }
);
const handleClick = (e: MouseEvent) =>
	props.useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e);

defineExpose<ButtonInstance>({
	ref: _ref,
	disabled,
	size,
	type,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="dl-button"
    :autofocus="autofocus"
    :type="comType"
    :disabled="disabled || loading"
    :class="{
      [`dl-button--${type}`]: type,
      [`dl-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="handleClick"
  >
    <!-- <template v-if="loading">
			<slot name="loading">
				<dl-icon
					class="loading-icon"
					:style="iconStyle"
					icon="spinner"
					size="1x"
					spin
				/>
			</slot>
		</template> -->
    <slot />
  </component>
</template>

<style scoped>
@import './style.css';
</style>
