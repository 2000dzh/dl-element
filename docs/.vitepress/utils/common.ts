import { MD_NAME } from "./constants";

export function addLinkPrefix<T>(arr: Array<T>) {
	return arr.reduce<Array<T>>((sum, item) => {
		const link = (item as any).link as string;
		if (link) {
			sum.push({
				...item,
				link: `/${MD_NAME}/${link}`
			});
		}
		return sum;
	}, []);
}
