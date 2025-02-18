<script lang="ts" setup>
import { computed, ref } from 'vue';
// import DlIcon from '../icon/icon.vue';
import type { AlertProps, AlertEmits, AlertInstance } from './types.ts';

defineOptions({
	name: 'DlAlert',
});

const props = withDefaults(defineProps<AlertProps>(), {
	type: 'info',
	closable: true,
	effect: 'light',
});
const emits = defineEmits<AlertEmits>();
const slots = defineSlots();

const visible = ref(true);
const withDescription = computed(() => props.description || slots.default);

function open() {
	visible.value = true;
}
function close() {
	visible.value = false;
	emits('close');
}

defineExpose<AlertInstance>({
	open,
	close,
});
</script>

<template>
  <transition name="dl-alert-fade">
    <div
      v-show="visible"
      class="dl-alert"
      role="alert"
      :class="{
        [`dl-alert__${type}`]: type,
        [`dl-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <div class="dl-alert__content">
        <span
          class="dl-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{
            display: center ? 'flow' : 'inline',
          }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="dl-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <!-- <div class="dl-alert__close" v-if="closable">
					<DlIcon @click.stop="close" icon="xmark" />
				</div> -->
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.css';
</style>
