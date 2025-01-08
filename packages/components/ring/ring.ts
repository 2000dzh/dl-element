import { definePropType } from '@dl-element/utils';
import type { Ratio } from './type.ts';

export const ringPorps = {
	ratioList: {
		type: definePropType<Ratio>(Array),
		default: () => [],
	},
	size: {
		type: Number,
		default: 200,
	},
	strokeWidth: {
		type: Number,
		default: 20,
	},
};
