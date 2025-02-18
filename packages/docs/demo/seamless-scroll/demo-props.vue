<script setup>
// import { ref } from 'vue';
</script>

<template>
  <div>
    <DlSeamlessScroll
      class="the-demo-list"
      :delay="1"
      :duration="0.2"
    >
      <div class="the-demo-list__item">
        1
      </div>
      <div class="the-demo-list__item">
        2
      </div>
      <div class="the-demo-list__item">
        3
      </div>
      <div class="the-demo-list__item">
        4
      </div>
      <div class="the-demo-list__item">
        5
      </div>
      <div class="the-demo-list__item">
        6
      </div>
      <div class="the-demo-list__item">
        7
      </div>
      <div class="the-demo-list__item">
        8
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
