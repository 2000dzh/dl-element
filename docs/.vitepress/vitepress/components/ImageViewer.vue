<script setup lang="ts">
import { useData } from "vitepress";
import { watch, ref, reactive, onMounted, onUnmounted } from "vue";
import zhConfig from "tdesign-vue-next/es/locale/zh_CN";
import type { GlobalConfigProvider } from "tdesign-vue-next";

defineOptions({
	name: "ImageViewer"
});

type PreviewImageInfo = {
	url: string;
	list: Array<string>;
	index: number;
};

const globalConfig = zhConfig as unknown as GlobalConfigProvider;
const { isDark, frontmatter } = useData();

// tdesign 暗色切换 https://tdesign.tencent.com/vue-next/dark-mode
watch(isDark, () => {
	if (!import.meta.env.SSR) {
		// 使用document的代码
		if (isDark.value) {
			document.documentElement.setAttribute("theme-mode", "dark");
		} else {
			document.documentElement.removeAttribute("theme-mode");
		}
	}
});

// 处理图片预览
const show = ref(false);
const previewImageInfo = reactive<PreviewImageInfo>({ url: "", list: [], index: 0 });

function previewImage(e: Event) {
	const target = e.target as HTMLElement;
	// 绑定事件的元素
	const currentTarget = e.currentTarget as HTMLElement;

	// 网址导航服务页面不展示
	if (frontmatter.value.dLayoutClass === "d-nav-layout") {
		return;
	}

	if (target.tagName.toLowerCase() === "img") {
		const imgs = currentTarget.querySelectorAll<HTMLImageElement>(".content-container .main img");

		const index = Array.from(imgs).findIndex(el => el === target);
		const urls = Array.from(imgs).map(el => el.src);
		const url = target.getAttribute("src");

		previewImageInfo.url = url!;
		previewImageInfo.list = urls;
		previewImageInfo.index = index;

		show.value = true;
	}
}

onMounted(() => {
	if (!import.meta.env.SSR) {
		const docDomContainer = document.querySelector("#VPContent");
		docDomContainer && docDomContainer.addEventListener("click", previewImage);
	}
});

onUnmounted(() => {
	if (!import.meta.env.SSR) {
		const docDomContainer = document.querySelector("#VPContent");
		docDomContainer && docDomContainer.removeEventListener("click", previewImage);
	}
});
</script>

<template>
	<div class="image-viewer">
		<ClientOnly>
			<t-config-provider :global-config="globalConfig">
				<t-image-viewer
					v-model:visible="show"
					:images="previewImageInfo.list"
					:default-index="previewImageInfo.index"
					@close="show = false"
				/>
			</t-config-provider>
		</ClientOnly>
	</div>
</template>

<style>
/* 不提供下载功能 */
.t-image-viewer__modal-icon:nth-child(7) {
	display: none !important;
}
</style>
