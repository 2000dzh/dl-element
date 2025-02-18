<script setup>
import { ref } from 'vue';

const mapName = ref('江苏');
</script>

<template>
  <div>
    <ClientOnly>
      <map1 v-model="mapName" />
    </ClientOnly>
  </div>
</template>

<style scoped></style>
