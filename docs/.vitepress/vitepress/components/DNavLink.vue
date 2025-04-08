<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import { slugify } from "@mdit-vue/shared";
import type { NavLink } from "../types";

defineOptions({
	name: "DNavLink"
});

const props = defineProps<{
	noIcon?: boolean;
	icon?: NavLink["icon"];
	title?: NavLink["title"];
	desc?: NavLink["desc"];
	link: NavLink["link"];
}>();

const formatTitle = computed(() => {
	if (!props.title) {
		return "";
	}
	return slugify(props.title);
});

const svg = computed(() => {
	if (typeof props.icon === "object") return props.icon.svg;
	return "";
});
</script>

<template>
	<a v-if="link" class="d-nav-link" :href="link" target="_blank" rel="noreferrer">
		<article class="box">
			<div class="box-header">
				<template v-if="!noIcon">
					<div v-if="svg" class="icon" v-html="svg"></div>
					<div v-else-if="icon && typeof icon === 'string'" class="icon">
						<img :src="withBase(icon)" :alt="title" onerror="this.parentElement.style.display='none'" />
					</div>
				</template>
				<h5 v-if="title" :id="formatTitle" class="title" :class="{ 'no-icon': noIcon }">
					{{ title }}
				</h5>
			</div>
			<p v-if="desc" class="desc">{{ desc }}</p>
		</article>
	</a>
</template>

<style lang="scss" scoped>
.d-nav-link {
	--d-nav-icon-box-size: 40px;
	--d-nav-icon-size: 24px;
	--d-nav-box-gap: 12px;

	display: block;
	border: 1px solid var(--vp-c-bg-soft);
	border-radius: 8px;
	height: 100%;
	background-color: var(--vp-c-bg-soft);
	transition: all 0.25s;
	&:hover {
		box-shadow: var(--vp-shadow-2);
		border-color: var(--vp-c-brand);
		text-decoration: initial;
		background-color: var(--vp-c-bg-soft-up);
	}

	.box {
		display: flex;
		flex-direction: column;
		position: relative;
		padding: var(--d-nav-box-gap);
		height: 100%;
		color: var(--vp-c-text-1);
		&-header {
			display: flex;
			align-items: center;
		}
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: calc(var(--d-nav-box-gap) - 2px);
		border-radius: 6px;
		width: var(--d-nav-icon-box-size);
		height: var(--d-nav-icon-box-size);
		font-size: var(--d-nav-icon-size);
		background-color: var(--vp-c-bg-soft-down);
		transition: background-color 0.25s;
		:deep(svg) {
			width: var(--d-nav-icon-size);
			fill: currentColor;
		}
		:deep(img) {
			border-radius: 4px;
			width: var(--d-nav-icon-size);
		}
	}

	.title {
		overflow: hidden;
		flex-grow: 1;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 16px;
		font-weight: 600;
		&:not(.no-icon) {
			line-height: var(--d-nav-icon-box-size);
		}
	}

	.desc {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		flex-grow: 1;
		margin: calc(var(--d-nav-box-gap) - 2px) 0 0;
		line-height: 1.5;
		font-size: 12px;
		color: var(--vp-c-text-2);
	}
}

@media (max-width: 960px) {
	.d-nav-link {
		--d-nav-icon-box-size: 36px;
		--d-nav-icon-size: 20px;
		--d-nav-box-gap: 8px;

		.title {
			font-size: 14px;
		}
	}
}
</style>
