<script setup lang="ts">
import { computed, ref } from "vue";

const num = ref(3);

const nums = computed(() => {
	let positiveNum = Math.abs(num.value);
	if (positiveNum > 5) {
		return 5;
	}

	return Math.ceil(positiveNum);
});
</script>

<template>
  <div class="box">
    <label>设置子元素数量</label>
    <input
      v-model="num"
      type="number"
    >
    <div>单列布局</div>
    <div class="parent">
      <div
        v-for="item of nums"
        :key="item"
        class="child"
      />
    </div>

    <div>多列布局</div>
    <div class="parent2">
      <div
        v-for="item of nums"
        :key="item"
        class="child2"
      />
    </div>

    <div>repeat 实现重复分配</div>
    <div class="parent3">
      <div
        v-for="item of nums"
        :key="item"
        class="child3"
      />
    </div>
  </div>
</template>

<style scoped>
input {
	border: 1px solid #000;
}
.parent {
	display: grid;
	width: 200px;
	margin-top: 20px;
}

.child {
	height: 30px;
	border: 1px solid pink;
}
</style>

<style scoped>
.parent2 {
	display: grid;
	width: 200px;
	height: 150px;
	margin-top: 20px;
	grid-template-columns: 1fr 3fr;
	row-gap: 10px;
	column-gap: 5px;
	grid-template-rows: 3fr 1fr;
}

.child2 {
	border: 1px solid pink;
}
</style>

<style scoped>
.parent3 {
	display: grid;
	width: 200px;
	height: 220px;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
}

.child3 {
	border: 1px solid blue;
}
</style>
