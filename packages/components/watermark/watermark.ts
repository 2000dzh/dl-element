import { definePropType } from "@dl-element/utils";
import type { ExtractPropTypes } from "vue";

export interface WatermarkFontType {
	color?: string;
	fontSize?: number | string;
	fontWeight?: "normal" | "light" | "weight" | number;
	fontStyle?: "none" | "normal" | "italic" | "oblique";
	fontFamily?: string;
	textAlign?: "start" | "end" | "left" | "right" | "center";
	textBaseline?: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
}

export const watermarkProps = {
	zIndex: {
		type: Number,
		default: 9
	},
	rotate: {
		type: Number,
		default: -22
	},
	width: Number,
	height: Number,
	image: String,
	content: {
		type: definePropType<Array<string> | string>([String, Array]),
		default: "Hello LiMing"
	},
	font: {
		type: definePropType<WatermarkFontType>(Object)
	},
	gap: {
		type: definePropType<[number, number]>(Array),
		default: () => [100, 100]
	},
	offset: {
		type: definePropType<[number, number]>(Array)
	}
};

export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>;
