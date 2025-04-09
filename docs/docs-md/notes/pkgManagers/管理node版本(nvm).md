# 管理node版本(nvm)

nvm管理node版本后npm、cnpm、pnpm不是内部或外部指令 解决方案 [文章链接](https://blog.csdn.net/iamkaikai/article/details/133901242)

## 查看nvm的安装根路径

```sh
nvm root
```

## 查看所有node版本

建议选择 LTS 中的版本进行安装 LTS 即(Long Term Support)长期支持版本

```sh
nvm list available
```

## 下载指定版本

```sh
nvm install 16.14.2
```

## 切换指定版本

```sh
nvm use 16.14.2
```

## 查看所有已下载的版本

```sh
nvm list
```
