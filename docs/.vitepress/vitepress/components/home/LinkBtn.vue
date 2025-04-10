<template>
	<div class="link-btn">
		<p class="note-archiving">📁笔记归档</p>
		<svg
			stroke-width="4"
			stroke="currentColor"
			viewBox="0 0 24 24"
			fill="none"
			class="arrow-btn"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
		</svg>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$--hovered-color: #eea948;

.link-btn {
	display: flex;
	justify-content: space-between;
	position: relative;

	.note-archiving {
		font-size: 20px;
		font-weight: 900;
		margin-right: 5px;
	}

	.arrow-btn {
		width: 15px;
		// 为元素添加一个0.2秒的过渡效果，使元素的样式变化更加平滑
		transition: 0.2s;
		//设置过渡效果的延迟时间为0.2秒，这样可以在触发过渡效果之前有一个延迟
		transition-delay: 0.2s;
	}

	&:hover {
		.arrow-btn {
			transform: translateX(4px);
			stroke: $--hovered-color;
		}

		&::after {
			width: 100%;
		}
	}

	&::after {
		content: "";
		position: absolute;
		left: 0px;
		bottom: -5px;
		width: 0px;
		height: 2px;
		background-color: $--hovered-color;
		transition: 0.3s ease-out;
	}
}
</style>
