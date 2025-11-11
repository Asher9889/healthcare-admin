import z from "zod";

export const blogSchema = z.object({
    title: z.string().min(4, "Title must be at least 4 characters long"),
    summary: z.string().min(4, "Summary must be at least 4 characters long"),
    content: z.string().min(4, "Content must be at least 4 characters long"),
    featuredImage: z.string().min(4, "Featured Image must be at least 4 characters long"),
    author: z.string().min(4, "Author must be at least 4 characters long"),
});

export type Blog = z.infer<typeof blogSchema>;