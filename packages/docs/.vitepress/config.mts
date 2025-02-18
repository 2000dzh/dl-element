import { defineConfig } from 'vitepress';
import {
	containerPreview,
	componentPreview,
} from '@vitepress-demo-preview/plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Dl-Element',
	description: '高仿 ElementPlus 组件库',
	base: '/dl-element/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '开始使用', link: '/home' },
			{ text: '组件', link: '/components/button' },
		],
		sidebar: [
			{
				text: '指南',
				collapsed: false,
				items: [{ text: '快速开始', link: '/home' }],
			},
			{
				text: '基础组件',
				collapsed: false,
				items: [
					{ text: 'Button 按钮', link: 'components/button' },
					{ text: 'Collapse 折叠面板', link: 'components/collapse' },
				],
			},
			{
				text: '反馈组件',
				collapsed: false,
				items: [{ text: 'Alert 提示', link: 'components/alert' }],
			},
			// {
			// 	text: 'echarts地图',
			// 	collapsed: false,
			// 	items: [{ text: 'map', link: 'components/map' }],
			// },
      {
				text: '无限滚动组件',
				collapsed: false,
				items: [{ text: 'SeamlessScroll 无限滚动', link: 'components/seamless-scroll' }],
			},
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/2000dzh/dl-element' },
		],
	},
	markdown: {
		config(md) {
			md.use(containerPreview);
			md.use(componentPreview);
		},
	},

	// vite: {
	// 	define: {
	// 		__version__: JSON.stringify({ a: 1 }),
	// 	},
	// },
});
