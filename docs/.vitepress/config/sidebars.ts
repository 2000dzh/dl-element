import { MD_NAME } from "../utils/constants";
import componentLocale from "../configJson/component.json";
import notesLocale from "../configJson/notes.json";

type Item = {
	text: string;
	children?: Item[];
	link?: string;
};

function mapPrefix(item: Item, prefix = "") {
	if (item.children && item.children.length > 0) {
		return {
			...item,
			items: item.children.map(item => mapPrefix(item, prefix))
		};
	}

	return {
		...item,
		link: `/${MD_NAME}/${prefix}${item.link}`
	};
}

function getSidebarData(data: Record<string, Item>, prefix = "") {
	return Object.values(data).map(item => mapPrefix(item, prefix));
}

const getSidebars = () => {
	const info = {
		"/component/": getSidebarData(componentLocale, "component"),
		"/notes/": getSidebarData(notesLocale, "notes")
	};

	// 数据示例
	// return {
	// 	"/docs-md/component/": [
	// 		{
	// 			text: "标题",
	// 			items: [
	// 				{ text: "111", link: "/docs-md/component/111" },
	// 				{ text: "222", link: "/docs-md/component/222" }
	// 			]
	// 		}
	// 	]
	// };

	return Object.fromEntries(Object.entries(info).map(([key, val]) => [`/${MD_NAME}${key}`, val]));
};

const sidebar = getSidebars();

export const notesList = getSidebarData(notesLocale, "notes")

export default sidebar;
