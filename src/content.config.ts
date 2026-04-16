import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const coverSchema = z.string().regex(/^images\/.+/, "cover 必须是 images/... 且不能以 / 开头");

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: coverSchema,
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: coverSchema,
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cover: coverSchema,
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        demo: z.string().url().optional(),
        github: z.string().url().optional(),
        store: z.string().url().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blogs, notes, projects };
