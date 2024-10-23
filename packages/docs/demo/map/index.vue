<script setup lang="ts">
import { ref } from 'vue';

const mapName = ref('江苏')
</script>

<template>
	<div>
		<map1 v-model="mapName" ></map1>
	</div>
</template>

<style scoped></style>
