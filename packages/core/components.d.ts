export {};

declare module 'vue' {
	interface ComponentCustomProperties {
		$echarts: typeof import('./echarts.ts')['default'];
	}
}
