# 使用IIFE提升性能

> IIFE 定义

IIFE（Immediately Invoked Function Expression，立即执行函数表达式）是一种在JavaScript中定义后立即执行的匿名函数模式。它的主要作用是创建一个独立的作用域，避免全局变量污染和命名冲突，同时可以实现模块化开发

> 参考内容 [视频链接](https://www.bilibili.com/video/BV1Xw6GYhEdM/?spm_id_from=333.788.recommend_more_video.13&vd_source=692353464081b3c198c7b3131b381813)

## 示例1

```js
// 优化前
function addEvent(el, eventName, handler) {
	if (window.addEventListener) {
		el.addEventListener(eventName, handler);
	} else if (window.attachEvent) {
		el.attachEvent(`on${eventName}`, handler);
	} else {
		el[`on${eventName}`] = handler;
	}
}

// 优化后
const addEvent1 = (() => {
	if (window.addEventListener) {
		return (el, eventName, handler) => el.addEventListener(eventName, handler);
	} else if (window.attachEvent) {
		return (el, eventName, handler) => el.attachEvent(`on${eventName}`, handler);
	} else {
		return (el, eventName, handler) => (el[`on${eventName}`] = handler);
	}
})();
```

## 示例2

在高频调用场景下，removeSpace1 性能更好，适合需要极致优化的场景

在普通场景下差异可以忽略，选择代码更简洁的 removeSpace 更合适

```js
// 优化前
function removeSpace(str) {
	return str.replace(/\s/g, "");
}

// 优化后
const removeSpace1 = (() => {
	let reg = /\s/g;

	return str => {
		return str.replace(reg, "");
	};
})();
```
