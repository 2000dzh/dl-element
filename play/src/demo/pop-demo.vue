<script setup lang="ts">
import { effectScope, onScopeDispose } from "vue";

const scope = effectScope();

scope.run(() => {

  
	onScopeDispose(() => {
		console.log("當前作用域被銷毀");
	});
});

const fn = () => {
	scope.stop();
};
</script>

<template>
	<div>
		1

		<button @click="fn">銷毀傳進的作用域</button>
	</div>
</template>

<style scoped></style>
