# vue-cli配置

## 环境变量

未指定mode，则默认去执行.env.production

指定mode为outterProduction，则会默认去执行.env.outterProduction

```json
"build": "vue-cli-service build",
"build:outter": "vue-cli-service build --mode outterProduction",
```
