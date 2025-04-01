// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const deas = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/deas",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const docentes = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/docentes",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const familias = defineCollection({
        loader: glob({
        pattern: "**/*.md",
        base: "./src/content/familias",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { deas, docentes, familias };
