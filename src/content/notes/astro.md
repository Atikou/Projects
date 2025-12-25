---
title: "Astro使用记录"
description: "Astro使用记录"
cover: images/notes/astro/anita-austvika-jh8jkm7kwTs-unsplash.jpg
tags: ["学习","Astro"]
date: "2025-12-25"
draft: false
---

## 特殊文件/文件夹
---


## 问题
---
GitPage上的路径非常反人类，只能用相对路径，导致本地运行没毛病一上传就找不到路径。
1. 路径一定不能 **/** 开头
2. **astro.config.mjs** 里面一定要检查环境比如
```
import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://atikou.github.io",
  base: isProd ? "/Projects/" : "/",
});
```
