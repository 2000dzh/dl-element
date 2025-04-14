<script setup lang="ts">
import { computed } from "vue";
import { slugify } from "@mdit-vue/shared";
import DNavLink from "./DNavLink.vue";
import type { NavLink } from "../types";

defineOptions({
	name: "DNavLinks"
});

const props = defineProps<{
	title: string;
	noIcon?: boolean;
	items: NavLink[];
}>();

const formatTitle = computed(() => slugify(props.title));
</script>

<template>
	<h2 v-if="title" :id="formatTitle" tabindex="-1">
		{{ title }}
		<a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
	</h2>
	<div class="d-nav-links">
		<DNavLink v-for="item in items" :noIcon="noIcon" v-bind="item" />
	</div>
</template>

<style lang="scss" scoped>
.d-nav-links {
	--d-nav-gap: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
	row-gap: var(--d-nav-gap);
	column-gap: var(--d-nav-gap);
	grid-auto-flow: row dense;
	justify-content: center;
	margin-top: var(--d-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
	@media (min-width: $media) {
		.d-nav-links {
			grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
		}
	}
}

@media (min-width: 960px) {
	.d-nav-links {
		--d-nav-gap: 20px;
	}
}
</style>
