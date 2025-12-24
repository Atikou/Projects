import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        cover: z.string(),
        tags: z.array(z.string()).default([]),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date().optional(),
        tags: z.array(z.string()).default([]),
        tech: z.array(z.string()).default([]),
        cover: z.string().optional(), // TODO: public/images/... 的路径
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

export const collections = { blog, notes, projects };
