<script setup>
function handleBtnClick() {
}
</script>

<template>
  <p>
    <dl-button @click="handleBtnClick"> with throttle</dl-button>
    <dl-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</dl-button
    >
  </p>
</template>
