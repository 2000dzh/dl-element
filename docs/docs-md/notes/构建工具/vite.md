# Vite 配置技巧

## 环境变量

### 基础配置

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量，这些变量在构建时会被静态地替换掉。这里有一些在所有情况下都可以使用的内建变量：

![An image](/gj-vite-1.png)

- `BASE_URL`：应用程序的基本 URL 路径，默认为 `/` 他由 [base配置项](https://cn.vitejs.dev/config/shared-options.html#base) 决定
- `DEV`：当前是否处于开发模式，在生产环境，这个值为 `false`
- `MODE`：当前的运行模式，development 表示开发模式，生产环境，是 production
- `prod`：与 DEV 相反，表示是否处于生产模式，在生产环境，这个值是 true
- `SSR`：当前是否运行在服务器端渲染环境，如果使用 SSR，服务器端运行时这个值是 true
