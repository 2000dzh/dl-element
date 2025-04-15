# npm常用命令

## 镜像相关

设置淘宝镜像

```sh
npm config set registry https://registry.npmmirror.com
```

查看当前镜像源地址

```sh
npm config get registry
```

## 创建限制项目node版本文件

```sh
echo "v18.17.0" > .nvmrc
```

## 查看依赖包的安装路径

全局包的路径

```sh
# 输出示例 C:\Users\用户\.npm-global\node_modules
npm root -g

# 输出示例 C:\Users\用户\.npm-global
npm config get prefix
```

当前项目包的路径

```sh
npm root
```

## 查看已安装的依赖包

查看全局已安装的包

```sh
# 会把包的依赖也列出来
npm list -g
# 加上层级控制显示深度,这样就只会显示安装的包了
npm list -g --depth 0
```

查看当前项目已安装的包

```sh
npm list --depth 0
# 只显示生产环境的包
npm list --depth 0 --prod
# 只显示开发环境的包
npm list --depth 0 --dev
```

## 初始化项目

创建 package.json

```sh
npm init -y
```

## 常用命令简写说明

```sh
-g  =>  --global (表示安装到全局)
-S  =>  --save (表示安装的包将写入package.json里面的 dependencies 生产依赖)(默认)
-D  =>  --save (表示安装的包将写入packege.json里面的 devDependencies 开发依赖)
 i  =>  install (表示安装)
```

## 安装包

安装全局包

```sh
npm i -g axios
```

当前项目安装包

```sh
npm i axios (安装到 dependencies 生产依赖)
npm i -S axios  (安装包信息将加入到 dependencies 生产依赖)
npm i -D axios  (安装包信息将加入到 devDependencies 开发依赖)
```

## 删除包

删除全局包

```sh
npm uninstall -g axios
```

当前项目删除包

```sh
npm uninstall axios
```

## 更新包

更新全局包

```sh
npm update -g axios
```

当前项目更新包

```sh
# 更新依赖到最新版本
npm update axios
# 更新依赖到指定版本
npm update axios@3.2
```

## 已经全局安装了pnpm和yarn，但系统仍然提示无法识别对应命令

首先确认是否安装成功(通过全局包路径确认),然后再确认是否设置系统环境变量

1. 获取 npm 全局路径

```sh
# 输出示例 C:\Users\用户\.npm-global
npm config get prefix
```

2. 手动添加路径到系统环境变量

- 按下 Win + S，搜索 “环境变量” → 选择 “编辑系统环境变量”
- 点击 “环境变量” → 在 “用户变量” 或 “系统变量” 中找到 Path → 点击 “编辑”
- 添加以下路径（根据实际输出调整）：

```sh
C:\Users\用户\.npm-global
```

- 点击 “确定” 保存所有窗口

3. 重启终端

- 关闭当前 PowerShell 或 VS Code 终端，重新打开后执行

```sh
pnpm --version
```

## 脚本命令相关

执行顺序：并行执行 `&`，顺序执行 `&&`

例 1：`npm run script1.js & npm run script2.js`

例 2：`npm run script1.js && npm run script2.js`
