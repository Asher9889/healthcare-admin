import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Blog, blogSchema } from "@/validations";
import { FeaturedImageField, TipTapEditor } from "@/components";
import { createBlog } from "../services/blog.api";
import { toast } from "sonner";

export default function CreateBlog() {
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    setValue,
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

  const onSubmit = async(data: Blog) => {
   try {
     const newBlog = {
       ...data,
       slug,
     };
     delete newBlog.featuredImageFile;
     const result = await createBlog(newBlog);
     if(!result.status) {
       toast.error(result.message);
       return;
     }
     toast.success(result.message);
     navigate("/blogs");
   } catch (error:any) {
     toast.error(error?.response?.data?.message || "Failed to create blog");
    console.error(error);
   }
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

          {/* IMAGE */}
        <FeaturedImageField
          register={register}
          setValue={setValue}
          error={errors.featuredImage}
          watch={watch}
        />
          {/* AUTHOR */}
          <div className="grid gap-1">
            <Label>Author</Label>
            <Input {...register("author")} />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
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

          

          <Button type="submit" className="w-full">
            Create Blog
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
