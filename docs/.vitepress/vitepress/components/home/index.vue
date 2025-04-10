<template>
	<div class="home-content">
		<div class="content-area">
			<div class="navigation-bar-hea">
				<span class="recently-released">📖最近发布</span>
				<LinkBtn />
			</div>
			<div class="recently-posts">
				<div class="post-item" v-for="(obj, index) in recentlyPosts" :key="index">
					<ArticleCard :obj="obj" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { notesList } from "../../../config/sidebars";
import LinkBtn from "./LinkBtn.vue";
import ArticleCard from "./ArticleCard.vue";

type Item = {
	items?: Item[];
	creationTime: string;
	text: string;
};

function getRecentlyPosts(data) {
	const arr = Object.values<Item>(data);
	const result: Array<Omit<Item, "children">> = [];

	arr.forEach(item => {
		if (Array.isArray(item.items)) {
			result.push(...item.items);
		}
	});

	return result.sort((a, b) => new Date(b.creationTime).getTime() - new Date(a.creationTime).getTime()).slice(0, 8);
}

const recentlyPosts = ref(getRecentlyPosts(notesList));
</script>

<style scoped lang="scss">
.home-content {
	width: 100%;

	.content-area {
		max-width: 1400px;
		margin: auto;

		.navigation-bar-hea {
			display: flex;
			justify-content: space-between;
			padding: 20px 40px;
			align-items: center;

			.recently-released {
				font-size: 20px;
				font-weight: 900;
			}
		}

		.recently-posts {
			display: grid;
			padding: 20px;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			grid-row-gap: 20px;
			grid-column-gap: 20px;
			grid-auto-flow: row dense;
			justify-content: center;
		}
	}
}
</style>
