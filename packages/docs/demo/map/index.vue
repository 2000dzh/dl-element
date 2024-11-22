<script setup lang="ts">
import { ref } from 'vue';

const mapName = ref('江苏');
</script>

<template>
	<div>
		<ClientOnly>
			<map1 v-model="mapName"></map1>
		</ClientOnly>
	</div>
</template>

<style scoped></style>
