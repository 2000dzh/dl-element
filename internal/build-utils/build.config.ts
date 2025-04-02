import { defineBuildConfig } from 'unbuild';

// unbuild使用文档
// https://juejin.cn/post/7310412236648202249?searchId=20250220102820BF6C835226BB7E96071E

// unbuild --stub
// unbuild --stub 是一个用于开发阶段的便捷命令，它通过生成“桩”（stub）文件来优化开发体验，避免在开发过程中频繁重新打包

// TODO
// 执行 build 命令打包无法识别 @pnpm/types 依赖不能生成类型文件

export default defineBuildConfig({
	entries: ['src/index.ts'],
	clean: true,
	outDir: 'dist',
	// 是否生成 .d.ts 文件
	declaration: true,
	rollup: {
		emitCJS: true,
	},
});
