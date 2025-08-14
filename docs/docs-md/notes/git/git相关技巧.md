# Git常用命令

## 相关学习文章和配置指南

- [Git 的奇技淫巧](https://github.com/521xueweihan/git-tips)
- [配置 Git 处理行结束符](https://docs.github.com/cn/get-started/getting-started-with-git/configuring-git-to-handle-line-endings)
- [Git 配置多个 SSH-Key](https://gitee.com/help/articles/4229)

## git 配置

```sh
# 查看当前的 Git 配置
git config --list

# 设置当前仓库用户名称,邮箱
git config user.name "名称"
git config user.email "邮箱"

# 设置全局用户名称,邮箱
git config --global user.name "名称"
git config --global user.email "邮箱"
```

## 项目远程仓库配置

```sh
# 查看远程仓库列表
git remote -v

# 添加新的远程仓库地址
git remote add  自定义远程仓库名称 远程仓库地址

# 删除指定远程仓库
git remote rm 自定义远程仓库名称

# 重新命名远程仓库名称
git remote rename 旧远程仓库名称 新远程仓库名称

# 将当前分支与远程仓库的指定分支建立跟踪关系
# 具体来说，--set-upstream-to=origin/main 表示将当前分支设置为跟踪远程仓库的 origin/main 分支。
# 这样，在使用 git push 和 git pull 等命令时，Git 将自动将你当前分支的改动推送到 origin/main 分支或从 origin/main 分支拉取改动
git branch --set-upstream-to=远程仓库名称/远程仓库分支名称

# 如果有多个远程仓库,查看本地分支于远程仓库的关联关系
# 这将显示本地分支的列表，以及每个分支关联的远程仓库和分支的详细信息。在输出中，你可以看到 [远程仓库名称/远程分支名称]，表示该本地分支正在跟踪指定的远程仓库和分支
git branch -vv
```

## git 文件操作

```sh
# 添加所有文件到暂存区
git add .
```

```sh
# 提交暂存区到仓库区
git commit -m "提交信息"
```

```sh
# 显示仓库变更的文件的状态
git status -s
```

- M：表示文件已修改（Modified）
- A：表示文件已添加到暂存区（Added）
- D：表示文件已删除（Deleted）
- R：表示文件已重命名（Renamed）
- C：表示文件已复制（Copied）
- ??：表示文件未被跟踪（Untracked）

## git 分支操作

```sh
# 拉取指定远程仓库分支列表信息
git remote update origin -p

# 查看所有本地分支
git branch

# 查看远程分支
git branch -r

# 查看本地和远程分支
git branch -a

# 创建新分支
git branch dev

# 创建新分支,并切换到当前分支
git checkout -b dev

# 切换分支
git checkout dev

# 下载指定远程仓库分支(可以重命名)
git checkout -b 本地仓库分支名 origin/远程仓库分支名

# 删除本地仓库分支
git branch -d dev

# 删除远程分支
git push origin -d dev

# 重命名分支
git branch -m dev newdev

# 这个命令用于将本地仓库的更新推送到远程仓库。-u 参数用于将本地的 main 分支与远程仓库的 main 分支关联起来
git push -u origin main
```

## 保存当前未commit的代码

```sh
# 保存当前未commit的代码并添加备注 (不会保存新增的未跟踪文件)
git stash save "备注的内容"

# 保存当前未commit的代码并添加备注 保存未跟踪的文件（但不包括忽略的文件）
git stash save "备注的内容" --include-untracked

# 保存当前未commit的代码并添加备注 保存未跟踪的文件和忽略的文件
git stash save "备注的内容" --all

# 列出所有 stash 记录
git stash list

# 删除 stash 所有记录
git stash clear

# 应用最近一次的 stash
git stash apply

# 应用最近一次的 stash 随后删除该记录
git stash pop

# 删除最近一次的 stash
git stash drop

# 当有多条 stash，可以切换指定stash，首先使用stash list 列出所有记录：
git stash list
stash@{0}: WIP on ...
stash@{1}: WIP on ...
stash@{2}: On ...

应用指定 stash (pop,drop同理)
git stash apply stash@{1}

这种问题是因为VSCode中，花括号在 PowerShell 中被认为是代码块执行标识符，若想正常使用，可用反引号
eg：git stash pop stash@`{0`}
```

## 不同工作区撤销更改

暂存区的内容可以通过 git add 命令添加，也可以通过 git reset 命令撤销

```sh
# 撤回暂存区的更改
git reset 1.js

# 撤回暂存区所有文件的更改
git reset

# 撤回工作区的更改(多个文件用空格隔开)
git checkout -- 1.js

# 撤回所有文件在工作区的更改
git checkout ./
```

## 回退 commit

回退你已提交的 commit ,并将 commit 的修改内容放回到暂存区

如果是已经 push 的 commit 也可以使用该命令,不过再次 push 时,由于远程分支远程分支和本地分支有差异,
需要强制推送 git push -f 来覆盖 reset 的 commit。

```sh
# 回退最近一次的 commit
git reset --soft HEAD^

# 回退指定的 commit
git reset --soft commitId
```

还有一点需要注意,在 reset --soft 指定 commit 号时,会将该 commit 到最近一次的 commit 之间的的所有修改内容全部回退,
而不是针对指定的 commit 号。

```sh
# 举个栗子:

git log
commit a1
2022年9月3日21:16:51
update(a): a

commit b1
2022年9月3日21:15:51
update(b): b

commit c1
2022年9月3日21:14:51
update(c): c

# 此时 rest 到 c1
git reset --soft c1

git log
commit c1
2022年9月3日21:14:51
update(c): c

# 此时的 HEAD 到了 c1，而 a1、b1 的修改内容都回到了暂存区。
```
