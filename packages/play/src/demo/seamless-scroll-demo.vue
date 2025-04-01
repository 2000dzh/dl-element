<script setup>
import { ref } from 'vue';
const list = ref(
	Array.from({ length: 4 }, (_, index) => ({
		name: `测试${index + 1}`,
	}))
);

const add = () => {
	const len = list.value.length;
	list.value.push({
		name: `测试${len + 1}`,
	});
};

const subtract = () => {
	const len = list.value.length;
	list.value.pop({
		name: `测试${len - 1}`,
	});
};

const handler = () => {
	list.value = Array.from({ length: 2 }, (_, index) => ({
		name: `测试${index + 1}`,
	}));
};
</script>

<template>
	<div>
		<DlSeamlessScroll class="the-demo-list">
			<div
				v-for="obj of list"
				:key="obj.name"
				class="the-demo-list__item"
			>
				{{ obj.name }}
			</div>
		</DlSeamlessScroll>

		<button @click="add">增加元素</button>
		<button @click="subtract">减少元素</button>

		<button @click="handler">重新赋值</button>
	</div>
</template>

<style>
.the-demo-list {
	height: 90px;
	.the-demo-list__item {
		height: 32px;
		font-size: 16px;
		line-height: 32px;
	}
}
</style>
