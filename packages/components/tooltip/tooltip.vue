<script setup lang="ts">
import { computed, onUnmounted, ref, watch, watchEffect } from 'vue';
import { debounce, isFunction, isNil, bind } from 'lodash-es';
import { createPopper } from '@popperjs/core';
import { useClickOutside } from '@dl-element/hooks';
import { useEvenstToTiggerNode } from './useEventsToTiggerNode';
import type { DebouncedFunc } from 'lodash-es';
import type { Instance } from '@popperjs/core';
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types.ts';

defineOptions({
	name: 'DlTooltip',
});

interface _TooltipProps extends TooltipProps {
	virtualRef?: HTMLElement | void;
	virtualTriggering?: boolean;
}

const props = withDefaults(defineProps<_TooltipProps>(), {
	placement: 'bottom',
	trigger: 'hover',
	transition: 'fade',
	showTimeout: 0,
	hideTimeout: 200,
});
const emits = defineEmits<TooltipEmits>();

const visible = ref(false);
const events = ref<Record<string, EventListener>>({});
const outerEvents = ref<Record<string, EventListener>>({});
const dropdownEvents = ref<Record<string, EventListener>>({});

const containerNode = ref<HTMLElement>();
const popperNode = ref<HTMLElement>();
const _triggerNode = ref<HTMLElement>();

const triggerNode = computed(() => {
	let node = _triggerNode.value;
	if (props.virtualTriggering) {
		node = props.virtualRef ?? node;
	}

	return node;
});
const popperOptions = computed(() => ({
	placement: props.placement,
	modifiers: [
		{
			name: 'offset',
			options: {
				offset: [0, 9],
			},
		},
	],
	...props.popperOptions,
}));
const isHover = computed(() => props.trigger === 'hover');
const openDelay = computed(() => (isHover.value ? props.showTimeout : 0));
const closeDelay = computed(() => (isHover.value ? props.hideTimeout : 0));
let openDebounce: DebouncedFunc<() => void> | void;
let closeDebounce: DebouncedFunc<() => void> | void;

function cancelOpenDebounce() {
	if (openDebounce && isFunction(openDebounce.cancel)) {
		openDebounce.cancel();
	}
}

function openFinal() {
	if (closeDebounce && isFunction(closeDebounce.cancel)) {
		closeDebounce.cancel();
	}

	if (isFunction(openDebounce)) {
		openDebounce();
	}
}

function closeFinal() {
	cancelOpenDebounce();

	if (isFunction(closeDebounce)) {
		closeDebounce();
	}
}

function togglePopper() {
	visible.value ? closeFinal() : openFinal();
}

function setVisible(val: boolean) {
	if (props.disabled) {
		return;
	}
	visible.value = val;
	emits('visible-change', val);
}

function attachEvents() {
	if (props.disabled || props.manual) {
		return;
	}

	if (props.trigger === 'hover') {
		events.value['mouseenter'] = openFinal;
		outerEvents.value['mouseleave'] = closeFinal;
		dropdownEvents.value['mouseenter'] = openFinal;
		return;
	}

	if (props.trigger === 'click') {
		events.value['click'] = togglePopper;
		return;
	}

	if (props.trigger === 'contextmenu') {
		events.value['contextmenu'] = (e) => {
			e.preventDefault();
			openFinal();
		};
		return;
	}
}

function resetEvents() {
	events.value = {};
	outerEvents.value = {};
	dropdownEvents.value = {};

	attachEvents();
}

let popperInstance: null | Instance;
function destroyPopperInstance() {
	if (isNil(popperInstance)) {
		return;
	}
	popperInstance.destroy();
	popperInstance = null;
}

const show: TooltipInstance['show'] = openFinal;
const hide: TooltipInstance['hide'] = function () {
	cancelOpenDebounce();
	setVisible(false);
};

watch(
	visible,
	(val) => {
		if (!val) {
			return;
		}

		if (triggerNode.value && popperNode.value) {
			popperInstance = createPopper(
				triggerNode.value,
				popperNode.value,
				popperOptions.value
			);
		}
	},
	{
		flush: 'post',
	}
);

watch(
	() => props.manual,
	(isManual) => {
		if (isManual) {
			resetEvents();
			return;
		}
		attachEvents();
	}
);

watch(
	() => props.trigger,
	() => {
		cancelOpenDebounce();
		setVisible(false);
		resetEvents();
	}
);

watchEffect(() => {
	if (!props.manual) {
		attachEvents();
	}

	openDebounce = debounce(bind(setVisible, null, true), openDelay.value);
	closeDebounce = debounce(bind(setVisible, null, false), closeDelay.value);
});

useClickOutside(containerNode, () => {
	emits('click-outside');
	if (props.trigger === 'hover' || props.manual) return;
	visible.value && closeFinal();
});

useEvenstToTiggerNode(props, triggerNode, events, () => {
  cancelOpenDebounce()
  setVisible(false)
});

onUnmounted(() => {
	destroyPopperInstance();
});

defineExpose<TooltipInstance>({
	show,
	hide,
});
</script>

<template>
  <div
    ref="containerNode"
    class="dl-tooltip"
    v-on="outerEvents"
  >
    <slot
      v-if="virtualTriggering"
      name="default"
    />
    <div
      v-else
      ref="_triggerNode"
      class="dl-tooltip__trigger"
      v-on="events"
    >
      <slot />
    </div>

    <transition
      :name="transition"
      @after-leave="destroyPopperInstance"
    >
      <div
        v-if="visible"
        ref="popperNode"
        class="dl-tooltip__popper"
        v-on="dropdownEvents"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div
          id="arrow"
          data-popper-arrow
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
