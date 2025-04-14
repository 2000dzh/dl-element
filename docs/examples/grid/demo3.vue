<script setup lang="ts">
import { ref } from "vue";

const displayWidth = ref(450);
const displayRef = ref<HTMLDivElement | null>(null);

function vResizeFn() {
	let startWidth = 0;
	let startX = 0;

	function onMouseDown(el) {
		function onMouseMove(e) {
			const diffX = e.clientX - startX;
			displayWidth.value = startWidth + diffX;
		}

		function onMouseup() {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseup);
		}

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseup);

		startX = el.clientX;
		startWidth = displayRef.value!.offsetWidth;
	}

	return {
		mounted(el) {
			el.addEventListener("mousedown", onMouseDown);
		},
		beforeUnmount(el) {
			el.removeEventListener("mousedown", onMouseDown);
		}
	};
}

const vResize = vResizeFn();
</script>

<template>
  <div class="box">
    <div class="display-box">
      <div
        ref="displayRef"
        class="parent"
        :style="{ width: displayWidth + 'px' }"
      >
        <div class="child">
          1
        </div>
        <div class="child">
          2
        </div>
        <div class="child">
          3
        </div>
        <div class="child">
          4
        </div>
        <div class="child">
          5
        </div>
        <div class="child">
          6
        </div>
        <div class="child">
          7
        </div>
        <div class="child">
          8
        </div>
      </div>
      <div
        v-resize
        class="line"
      />
      <div
        ref="codeRef"
        class="code"
      >
        <div class="origin">
          .parent {
        </div>
        <div class="color2">
          display: grid;
        </div>
        <div class="color2">
          grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
        </div>
        <div class="origin">
          }
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
</style>

<style scoped>
.box {
	background: hsl(210deg 15% 6%);
}

.parent {
	position: relative;
	padding: 10px;
	margin: 60px auto;
	gap: 10px;
}

.child {
	display: grid;
	place-content: center;
	height: 100px;
	border: 2px solid hsl(210deg 8% 50%);
	border-radius: 3px;
	background: hsl(210deg 15% 20%);
	color: white;
	font-size: 1.3125rem;
	font-weight: bold;
}

.child:first-child {
	margin-right: 2px;
}

.child:last-child {
	margin-left: 2px;
}

.display-box {
	min-height: 460px;
	display: flex;
	margin: 30px auto;
	width: 90%;
	border: 1px solid hsl(210deg 10% 40%);
	border-radius: 8px;
	overflow: auto;
}
.line {
	width: 4px;
	min-height: 100%;
	background-color: #fff;
	cursor: ew-resize;
}
.code {
	flex: 1;
	background-color: #151f28;
	padding: 20px;
	border-radius: 6px;
	box-sizing: border-box;
}
.origin {
	color: #f8c265;
	line-height: 30px;
}
.color2 {
	color: #a3ffea;
	text-indent: 2em;
	line-height: 30px;
}
</style>
