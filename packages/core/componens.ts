import { DlMap } from "@dl-element/components/map";
import { DlLoadCure } from "@dl-element/components/load-cure";
import { DlRing } from "@dl-element/components/ring";
import { DlSeamlessScroll } from "@dl-element/components/seamless-scroll";
import { DlWatermark } from "@dl-element/components/watermark";
import type { Plugin } from "vue";

export default [DlLoadCure, DlMap, DlRing, DlSeamlessScroll, DlWatermark] as Array<Plugin>;
