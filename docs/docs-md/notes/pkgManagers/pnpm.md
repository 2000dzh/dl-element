# pnpm常用命令

## 初始化项目

创建 package.json

```sh
pnpm init
```

## 安装包

当前项目安装包

```sh
pnpm add axios (安装到 dependencies 生产依赖)
pnpm add -S axios  (安装包信息将加入到 dependencies 生产依赖)
pnpm add -D axios  (安装包信息将加入到 devDependencies 开发依赖)
```

## 删除包

当前项目删除包

```sh
pnpm remove axios
```

## 更新包

当前项目更新包

```sh
# 更新依赖到最新版本
pnpm update axios
# 更新依赖到指定版本
pnpm update axios@3.2
```

## 工作空间（Workspace）

monorepo 的简单理解就是单仓库多包管理

一个工作空间必须在它的根目录有一个 pnpm-workspace.yaml 文件。

pnpm 并不是通过目录名称，而是通过目录下 package.json 文件的 name 字段来识别仓库内的包与模块的

### 创建 pnpm-workspace.yaml 文件

Windows

```sh
echo "" > pnpm-workspace.yaml
```

### 安装全局依赖

```sh
pnpm add axios  -w
```

### 给指定模块安装依赖

```sh
pnpm --filter a add axios
```

### 删除指定包的依赖

```sh
pnpm --filter a remove axios
```
