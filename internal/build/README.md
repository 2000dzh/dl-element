## scripts 命令解释

```bash
pnpm run start
具体指令 gulp --require @esbuild-kit/cjs-loader -f gulpfile.ts
gulp默认不支持esm和ts，@esbuild-kit/cjs-loader通过使用esbuild实时将esm和ts转换为CommonJS
```