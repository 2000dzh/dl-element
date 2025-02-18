<script setup>

function handleClose() {
}
</script>
<template>
  <div class="basic block">
    <dl-alert
      title="Unclosable alert"
      type="success"
      :closable="false"
    />
    <dl-alert
      title="Alert with callback"
      type="warning"
      @close="handleClose"
    />
  </div>
</template>
