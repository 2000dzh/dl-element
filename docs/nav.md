---
description: 网址导航服务
dLayoutClass: d-nav-layout
outline: [2, 3, 4]
editLink: false
---

# 前端导航

<script setup>
import NAV_DATA from '@dv/configJson/nav.json'
</script>

<DNavLinks v-for="(value, key) in NAV_DATA" :title="key" :items="value" />

<style src="@dv/vitepress/styles/nav/index.scss"></style>
