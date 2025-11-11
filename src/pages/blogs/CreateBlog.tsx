import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Blog, blogSchema } from "@/validations";
import { TipTapEditor } from "@/components";

export default function CreateBlog() {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    // setValue,
    watch,
    formState: { errors },
  } = useForm<Blog>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      summary: "",
      content: "",
      featuredImage: "",
      author: "",
    },
  });

  const title = watch("title");
  const slug = title?.toLowerCase().trim().replace(/\s+/g, "-");

  const onSubmit = (data: Blog) => {
    const newBlog = {
      ...data,
      slug,
      id: crypto.randomUUID(),
    };

    console.log("New Blog Created:", newBlog);

    // TODO: API call

    navigate("/blogs");
  };

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* TITLE */}
          <div className="grid gap-1">
            <Label>Title</Label>
            <Input {...register("title")} />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* SLUG (auto) */}
          <div className="grid gap-1">
            <Label>Slug (auto)</Label>
            <Input value={slug} disabled className="bg-muted" />
          </div>

          {/* SUMMARY */}
          <div className="grid gap-1">
            <Label>Summary</Label>
            <Textarea rows={2} {...register("summary")} />
            {errors.summary && (
              <p className="text-red-500 text-sm">{errors.summary.message}</p>
            )}
          </div>

          {/* CONTENT */}
          <div className="grid gap-1">
            <Controller 
              name="content"
              control={control}
              render={({ field }) => (
                <TipTapEditor
                  {...field}
                />
              )}
            />
            
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content.message}</p>
            )}
          </div>

          {/* IMAGE */}
          <div className="grid gap-1">
            <Label>Featured Image URL</Label>
            <Input {...register("featuredImage")} />
            {errors.featuredImage && (
              <p className="text-red-500 text-sm">
                {errors.featuredImage.message}
              </p>
            )}
          </div>

          {/* AUTHOR */}
          <div className="grid gap-1">
            <Label>Author</Label>
            <Input {...register("author")} />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Create Blog
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
