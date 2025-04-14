<script setup lang="ts">
import { ref, watch } from "vue";

let startX = 0;
let startY = 0;

const squares = ref(Array.from({ length: 16 }, () => ({ selected: false })));
const isSelecting = ref(false);
const selectionBoxStyle = ref({});
const selectList = ref<Array<number>>([]);
const cssStyleDisplay = ref<string>("");
const cssStyle = ref<string>("");

watch(
	() => selectList.value,
	newValue => {
		if (newValue.length > 0) {
			cssStyleDisplay.value = getGridAreas(newValue, 4);
		}
	}
);

function getGridAreas(indices, columns) {
	if (indices.length == 1) {
		let row = Math.floor(indices[0] / columns) + 1;
		let column = (indices[0] % columns) + 1;
		cssStyle.value = `grid-row: ${row}; grid-column: ${column};`;
		return ` <div class="grid-demo-color2">grid-row: ${row}; </div><div class="grid-demo-color2">grid-column: ${column};</div>`;
	}

	let startNum = indices[0];
	let endNum = indices[indices.length - 1];

	let minRow = Math.floor(startNum / columns) + 1;
	let maxRow = Math.floor(endNum / columns) + 1;
	let minColumn = (startNum % columns) + 1;
	let maxColumn = (endNum % columns) + 1;

	if (minRow == maxRow) {
		cssStyle.value = `grid-row: ${minRow}; grid-column: ${minColumn} / ${maxColumn + 1};`;
		return ` <div class="grid-demo-color2">grid-row: ${minRow};</div> <div class="grid-demo-color2">grid-column: ${minColumn} / ${maxColumn + 1};</div>`;
	}
	if (minColumn == maxColumn) {
		cssStyle.value = `grid-row: ${minRow} / ${maxRow + 1}; grid-column: ${minColumn};`;
		return ` <div class="grid-demo-color2">grid-row: ${minRow} / ${maxRow + 1};</div> <div class="grid-demo-color2">grid-column: ${minColumn};</div>`;
	}
	cssStyle.value = `grid-row: ${minRow} / ${maxRow + 1}; grid-column: ${minColumn} / ${maxColumn + 1};`;
	return ` <div class="grid-demo-color2">grid-row: ${minRow} / ${maxRow + 1};</div> <div class="grid-demo-color2">grid-column: ${minColumn} / ${maxColumn + 1};</div>`;
}

function resetFun() {
	squares.value.forEach(square => (square.selected = false));
	selectList.value = [];
	cssStyleDisplay.value = "";
	cssStyle.value = "";
}

function selectSquare(square, index: number) {
	square.value = true;
	selectList.value = [index];
}

function startSelection(e) {
	if (e.target.classList.contains("square")) {
		isSelecting.value = true;
		const rect = e.target.parentElement.getBoundingClientRect();
		startX = e.clientX - rect.left;
		startY = e.clientY - rect.top;

		// 清除之前的选中状态
		squares.value.forEach(square => (square.selected = false));
	}
}

function onMouseMove(e) {
	if (isSelecting.value) {
		const container = e.target.parentElement;
		const rect = container.getBoundingClientRect();
		let x = Math.min(e.clientX - rect.left, startX);
		let y = Math.min(e.clientY - rect.top, startY);
		let w = Math.abs(e.clientX - rect.left - startX);
		let h = Math.abs(e.clientY - rect.top - startY);

		selectionBoxStyle.value = {
			left: `${x}px`,
			top: `${y}px`,
			width: `${w}px`,
			height: `${h}px`
		};

		selectList.value = [];
		squares.value.forEach((square, index) => {
			const squareEl = document.getElementsByClassName("square")[index];
			let squareRect = squareEl.getBoundingClientRect();
			let isSquareInSelection =
				squareRect.right > rect.left + x &&
				squareRect.left < rect.left + x + w &&
				squareRect.bottom > rect.top + y &&
				squareRect.top < rect.top + y + h;

			square.selected = isSquareInSelection;
			if (isSquareInSelection) {
				selectList.value.push(index);
			}
		});
	}
}

function endSelection() {
	isSelecting.value = false;
	selectionBoxStyle.value = {};
}
</script>

<template>
  <div class="box">
    <div
      class="reset-btn"
      @click="resetFun"
    >
      重置
    </div>
    <div class="code-display">
      <div class="code">
        <div class="origin">
          .parent {
        </div>
        <div class="grid-demo-color2">
          display: grid;
        </div>
        <div class="grid-demo-color2">
          grid-template-columns: repeat(4, 1fr);
        </div>
        <div class="grid-demo-color2">
          grid-template-rows:repeat(4, 1fr);
        </div>
        <div class="origin">
          }
        </div>

        <div
          class="origin"
          style="margin-top: 20px"
        >
          .child {
        </div>
        <div v-html="cssStyleDisplay" />
        <div class="origin">
          }
        </div>
      </div>
      <div class="container">
        <div
          class="square-bg"
          @mousedown="startSelection"
          @mousemove="onMouseMove"
          @mouseup="endSelection"
        >
          <div
            v-for="(item, index) in squares"
            :key="index"
            class="square"
            @click="selectSquare(item, index)"
          />
        </div>
        <div class="square-list">
          <div
            v-if="cssStyle"
            class="square"
            :style="cssStyle"
          >
            <div class="square-inner" />
          </div>
        </div>
        <div
          v-if="isSelecting"
          class="selection-box"
          :style="selectionBoxStyle"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
	background: hsl(210deg 15% 6%);
	padding: 20px;
}
.container {
	width: 300px;
	overflow: hidden;
	border: 1px solid hsl(210deg 10% 40%);
	border-radius: 8px;
	position: relative;
	user-select: none;
	aspect-ratio: 1/1;
}
.square-bg,
.square-list {
	width: calc(100% + 2px);
	height: calc(100% + 2px);
	touch-action: none;
	position: relative;
	display: grid;
	grid-template-rows: repeat(4, 1fr);
	grid-template-columns: repeat(4, 1fr);
	overflow: hidden;
}
.square-list {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}
.square {
	position: relative;
	border-right: 2px dashed #75808a;
	border-bottom: 2px dashed #75808a;
	overflow: hidden;
	cursor: pointer;
}
.selection-box {
	position: absolute;
	border: 1px dashed red;
	pointer-events: none;
}
.square:after {
	content: "";
	position: absolute;
	inset: 2px;
	background: radial-gradient(
		circle at 50% 50%,
		#fff 0,
		hsla(0, 0%, 100%, 0.987) 4.1%,
		hsla(0, 0%, 100%, 0.896) 11.25%,
		hsla(0, 0%, 100%, 0.741) 17.5%,
		hsla(0, 0%, 100%, 0.55) 23.5%,
		hsla(0, 0%, 100%, 0.352) 29.4%,
		hsla(0, 0%, 100%, 0.175) 35.5%,
		hsla(0, 0%, 100%, 0.049) 42.25%,
		hsla(0, 0%, 100%, 0) 50%
	);
	opacity: 0;
	transition: all 0.5s;
}
.square:hover:after {
	opacity: 0.6;
	transform: scale(1.5);
	transition: all 0.2s;
}
.square-list .square {
	position: relative;
	display: flex;
	font-size: 1rem;
	padding: 2px;
	margin: 2px;
	transition: opacity 0.4s;
	will-change: opacity;
	animation: fadeFromTransparent 0.4s;
	background: #75808a;
	opacity: 0.9;
	border-radius: 4px;
}
.square-list .square .square-inner {
	flex: 1 1;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 16px;
	background: #1a1f23;
	border-radius: 2px;
}

.code {
	background-color: #151f28;
	padding: 20px;
	border-radius: 6px;
	width: 380px;
	box-sizing: border-box;
}
.origin {
	color: #f8c265;
	line-height: 30px;
}

.code-display {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
	margin-top: 30px;
}

.reset-btn {
	width: 100px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	border: 1px solid #272e35;
	border-radius: 4px;
	opacity: 0.7;
	cursor: pointer;
	margin: 20px auto;
}
</style>

<style>
.grid-demo-color2 {
	color: #a3ffea;
	text-indent: 2em;
	line-height: 30px;
}
</style>
