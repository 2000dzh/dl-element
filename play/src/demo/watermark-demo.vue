<script setup lang="ts">
import { reactive, watch } from 'vue'

const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})
</script>

<template>
	<!-- <div class="box">
		<dl-watermark>
			<div class="content">测试文本</div>
		</dl-watermark>
	</div> -->
  <dl-watermark :font="font" :content="['测试文本+1', '测试文本+2']">
    <div style="height: 500px;width: 200px;" />
  </dl-watermark>
</template>

<style scoped>
.box {
	width: 260px;
	height: 260px;
	border: 1px solid blue;
}

.content {
	width: 160px;
	height: 160px;
	border: 1px solid blue;
}
</style>
