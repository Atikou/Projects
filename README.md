# Astro Blog

一个使用 Astro 重写的标准博客站点，保留了原有目录结构和 Markdown 内容。

## 内容来源

- 博客：`src/content/blog`
- 笔记：`src/content/notes`
- 项目：`src/content/projects`

## 页面结构

- 首页：`/`
- 博客列表：`/blogs/`
- 博客详情：`/blogs/[slug]/`
- 笔记列表：`/notes/`
- 笔记详情：`/notes/[slug]/`
- 项目列表：`/projects/`
- 项目详情：`/projects/[slug]/`

## 本地开发

```sh
npm install
npm run dev
```

## 构建

```sh
npm run build
npm run preview
```
