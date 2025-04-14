# Grid布局

> 参考内容1 [链接](https://juejin.cn/post/7459005223173554213) 参考内容2 [链接](https://juejin.cn/post/7467869746236571683)

<script setup>
import demo1 from '../../../examples/grid/demo1.vue'
import demo2 from '../../../examples/grid/demo2.vue'
import demo3 from '../../../examples/grid/demo3.vue'
import demo4 from '../../../examples/grid/demo4.vue'
import demo5 from '../../../examples/grid/demo5.vue'
</script>

## 基础使用

grid-template-columns 分配列的空间大小

grid-template-rows 分配行的空间大小

<demo1 />

## 子项分配

<demo2 />

## 响应式布局

`auto-fit` 网格项会拉伸以填充整个网格容器的宽度，即便是在网格项不足以填满行时

`minmax` 定义的范围大于或等于 min， 小于或等于 max

随着左边区域的减少，当宽度减少至 min的最小宽度时，此时子容器将溢出父容器
需要适配的话可以这样修改(配合min函数即可)

```css
grid-template-columns: repeat(auto-fit, minmax(min(100%, 100px), 1fr));
```

<demo3 />

## 复杂布局案例

<demo4 />

## 对齐方式

<demo5 />
