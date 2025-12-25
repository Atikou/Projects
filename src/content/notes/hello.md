---
title: "test"
description: "这是一篇测试文章"
cover: /notes/test.jpg
tags: ["a"]
date: "2025-12-01"
draft: false
---


# Hello Astro 👋

这是一篇 **测试文章**，用于验证以下功能是否工作正常：

- ✅ `src/content/blog` 是否能被 `getCollection("blog")` 正确读取  
- ✅ 博客首页是否能正确列出文章  
- ✅ 点击后是否能进入 `/blog/hello/`  
- ✅ `title / description / date / tags` 是否能正常显示  

---

## 为什么使用 Content Collection？

因为它带来几个好处：

1. **类型安全**：字段由 `config.ts` 统一定义
2. **结构清晰**：内容与页面逻辑分离
3. **可扩展**：后续加 RSS、标签页都很方便

---

## 下一步你可以做什么？

- 再建一篇 `world.md`，看看排序是否正确  
- 给文章加图片（放在 `public/images/`）  
- 开始写真正的博客内容 ✍️  

---

> 如果你现在还没创建 `src/pages/blog/[...slug].astro`，  
> 点击这篇文章会 **404** ——这是正常的，下一步需要补这个详情页。

如果你愿意，我可以 **下一条直接把 `[...slug].astro` 写给你**，并保证同样 **0 TypeScript 报错**。
