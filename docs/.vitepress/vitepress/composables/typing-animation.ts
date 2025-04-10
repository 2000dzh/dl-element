import { useRoute, useData } from "vitepress";
import { onMounted, watch, onBeforeUnmount } from "vue";

export function useTypingAnimation() {
	const route = useRoute();
	const { frontmatter } = useData();
	let intersectionObserver: IntersectionObserver | null = null;
	const filterRoutingList = ["/dl-element/"];

	const addTypingAnimation = () => {
		if (frontmatter.value.dNoAnimation) {
			clearObserver();
			return;
		}

		const main = (document.querySelector(".vp-doc>div") as HTMLElement) || {};

		const paragraph = getChildNodes(main.childNodes || []);

		paragraph.forEach(item => {
			const observer = new IntersectionObserver(([{ isIntersecting }]) => {
				item.classList.remove("animate__animated");
				item.classList.remove("animate__fadeInUp");
				item.classList.remove("animate__fadeInDown");

				const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

				// 进入可视区
				if (isIntersecting) {
					observer.unobserve(item);

					item.classList.add("animate__animated");

					if (distanceFromTop > 0) {
						item.classList.add("animate__fadeInUp");
					} else if (distanceFromTop === 0) {
						// 初始化
						item.classList.add("animate__fadeInDown");
					}
				}
			});
			observer.observe(item);
			intersectionObserver = observer;
		});
	};

	const getChildNodes = nodes => {
		const nodeList: Array<Element> = [];
		nodes.forEach(node => {
			// 只添加元素节点
			if (node.nodeType === Node.ELEMENT_NODE) {
				nodeList.push(node);
			}
		});

		return nodeList;
	};

	const clearObserver = () => {
		if (intersectionObserver) {
			intersectionObserver.disconnect();
			intersectionObserver = null;
		}
	};

	watch(
		() => route.path,
		() => {
			clearObserver();
			addTypingAnimation();
		},
		{
			flush: "post"
		}
	);

	onMounted(() => {
		addTypingAnimation();
	});

	onBeforeUnmount(() => {
		clearObserver();
	});
}
