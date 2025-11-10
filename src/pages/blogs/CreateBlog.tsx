import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RichTextEditor from "@/components/custom/RichTextEditor";

export default function CreateBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [author, setAuthor] = useState("");

  const slug = title.toLowerCase().trim().replace(/\s+/g, "-");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const blog = {
      id: crypto.randomUUID(),
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      author,
    };

    console.log("New Blog Created:", blog);

    // Later -> API call

    navigate("/blogs");
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-1">
            <Label>Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-1">
            <Label>Slug (auto)</Label>
            <Input value={slug} disabled className="bg-muted" />
          </div>

          <div className="grid gap-1">
            <Label>Summary</Label>
            <Textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              required
            />
          </div>

          <div className="grid gap-1">
            {/* <Label>Content</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              required
            /> */}
            <Label>Content</Label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>

          <div className="grid gap-1">
            <Label>Featured Image URL</Label>
            <Input
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
            />
          </div>

          <div className="grid gap-1">
            <Label>Author</Label>
            <Input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Create Blog
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
