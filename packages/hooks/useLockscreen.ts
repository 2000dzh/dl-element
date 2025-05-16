import { isRef, onScopeDispose, watch } from "vue";
import { isClient, hasClass, removeClass, getScrollBarWidth, addClass, getStyle } from "@dl-element/utils";
import type { Ref } from "vue";

/**
 * 用于监控 ref 值以锁定或解锁屏幕的 Hook。
 *
 * @param trigger {Ref<boolean>}
 */
export default function useLockscreen(trigger: Ref<boolean>) {
	if (!isRef(trigger)) {
		throw new TypeError("useLockscreen: You need to pass a ref param to this function");
	}

	const hiddenCls = "dl-mask--hidden";

	if (!isClient || hasClass(document.body, hiddenCls)) {
		return;
	}

	let scrollBarWidth = 0;
	let withoutHiddenClass = false;
	let bodyWidth = "0";

	const cleanup = () => {
		if (withoutHiddenClass && document) {
			document.body.style.width = bodyWidth;
			removeClass(document.body, hiddenCls);
		}
	};

	watch(trigger, val => {
		if (!val) {
			cleanup();
			return;
		}

		withoutHiddenClass = !hasClass(document.body, hiddenCls);
		if (withoutHiddenClass) {
			bodyWidth = document.body.style.width;
			addClass(document.body, hiddenCls);
		}
		// 获取滚动条宽度
		scrollBarWidth = getScrollBarWidth();
		// 网页是否有出现滚动条
		const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
		const bodyOverflowY = getStyle(document.body, "overflowY");
		if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
			document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
		}
	});
	onScopeDispose(() => cleanup());
}
