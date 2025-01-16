<script setup lang="ts">
import { getCurrentScope, ref, onScopeDispose, onUnmounted } from 'vue';
import { mydsa } from './1-8.ts';

const { data, setData } = mydsa() || {};

const num = ref(666);

function fn() {
	console.log(getCurrentScope());
}

fn();

// onScopeDispose(() => {
// 	console.log('销毁 onScopeDispose');
// });

onUnmounted(() => {
	console.log('销毁 onUnmounted');
});
</script>

<template>
	<div>
		{{ num }}
		{{ data }}
		<dl-button @click="() => setData!(++num)">改变</dl-button>
		<dl-button @click="() => fn()">获取页面活跃的effect</dl-button>
	</div>
</template>

<style scoped></style>
