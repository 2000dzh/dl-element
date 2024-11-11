<script setup lang="ts">
import { LoadCureProps, LoadCureEmit, useLoadCure } from './LoadCure';

defineOptions({
	name: 'DlLoadCure',
});

const props = defineProps(LoadCureProps);
const emit = defineEmits(LoadCureEmit);

const { DlLoadCure } = useLoadCure(props, emit);
</script>

<template>
	<div ref="DlLoadCure" class="dl-echarts dl-load-cure"></div>
</template>

<style scoped></style>
