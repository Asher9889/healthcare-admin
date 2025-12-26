import z from "zod";

export const blogSchema = z
  .object({
    title: z.string().min(4, "Title must be at least 4 characters long"),
    summary: z.string().min(4, "Summary must be at least 4 characters long"),
    content: z.object({
    type: z.literal("doc"),
    content: z.array(z.any()).min(1, "Content cannot be empty"),
  }),

    // optional URL
    featuredImage: z
      .string()
      .trim()
      .url("Featured Image must be a valid URL")
      .optional()
      .or(z.literal("")),

    // optional file input
    featuredImageFile: z.instanceof(FileList).optional(),

    author: z.string().min(4, "Author must be at least 4 characters long"),
  })
  // .refine(
  //   (data) =>
  //     // enforce: either URL or File must exist
  //     (data.featuredImage && data.featuredImage !== "") ||
  //     (data.featuredImageFile && data.featuredImageFile.length > 0),
  //   {
  //     message: "Please provide an image URL or upload a file",
  //     path: ["featuredImage"], // attach error under featuredImage
  //   }
  // );

export type Blog = z.infer<typeof blogSchema>;
