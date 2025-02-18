<script setup>
import { ref } from 'vue';
const list = ref(
	Array.from({ length: 10 }, (_, index) => ({
		name: `测试${index + 1}`,
	}))
);
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
  </div>
</template>

<style>
.the-demo-list {
	height: 180px;
	.the-demo-list__item {
		height: 32px;
		font-size: 16px;
		line-height: 32px;
	}
}
</style>
