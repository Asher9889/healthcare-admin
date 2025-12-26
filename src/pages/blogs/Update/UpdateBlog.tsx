import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Blog, blogSchema } from "@/validations";
import { FeaturedImageField, TipTapEditor } from "@/components";
import { getBlog, updateBlog } from "../services/blog.api";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function UpdateBlog() {
    const [_blog, setBlog] = useState<Blog>({
        title: "",
        summary: "",
        content: {
            type: "doc",
            content: [],
          },
        author: "",
        featuredImage: "",
    })
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const slug = pathname.split("/")[3];

    const fetchBlog = async () => {
        const data = await getBlog(slug);
        setBlog(data.data || {});
        reset({
            title: data.data.title,
            summary: data.data.summary,
            content: data.data.content,
            featuredImage: data.data.featuredImage,
            author: data.data.author,
        });
    }

    useEffect(() => {
        fetchBlog();
    }, [])

    const {
        register,
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<Blog>({
        resolver: zodResolver(blogSchema)
    });

    // const title = watch("title");
    // const slug = title?.toLowerCase().trim().replace(/\s+/g, "-");

    const onSubmit = async (data: Blog) => {
        try {
            const newBlog = {
                ...data,
                slug,
            };
            delete newBlog.featuredImageFile;
            const result = await updateBlog(slug, newBlog);
            if (!result.status) {
                toast.error(result.message);
                return;
            }
            toast.success(result.message);
            navigate("/blogs");
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Failed to create blog");
            console.error(error);
        }
    };

    return (
        <Card className="mx-auto">
            <CardHeader>
                <CardTitle>Edit Blog</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* TITLE */}
                    <div className="grid gap-1">
                        <Label>Title</Label>
                        <Input   {...register("title")} />
                        {errors.title && (
                            <p className="text-red-500 text-sm">{errors.title.message}</p>
                        )}
                    </div>

                    {/* SLUG (auto) */}
                    <div className="grid gap-1">
                        <Label>Slug (auto)</Label>
                        <Input  value={slug} className="bg-muted" />
                    </div>

                    {/* SUMMARY */}
                    <div className="grid gap-1">
                        <Label>Summary</Label>
                        <Textarea  rows={2} {...register("summary")} />
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
                        <Input  {...register("author")} />
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



                    <Button  type="submit" className="w-full">
                        Update Blog
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
