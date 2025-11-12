import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBlogs } from "../hooks/useBlogs";
import type { Blog } from "@/validations";
import { useEffect, useState } from "react";

interface BlogData extends Blog {
  slug: string;
  createdAt: Date;
}

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const data = await useBlogs();
    setBlogs(data?.data || []);
  }

  return (
    <div className="mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">All Blogs</h1>
        <Button asChild>
          <Link to="/blogs/create">Create Blog</Link>
        </Button>
      </div>

      {blogs.length === 0 && (
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            No blogs yet.
          </CardContent>
        </Card>
      )}

      {blogs.length > 0 && (
        <div className="space-y-3">
          {blogs.map((blog) => (
            <Card key={blog.slug} className="overflow-hidden">
              <div className="flex flex-col sm:flex-row">

                {/* Image */}
                {blog.featuredImage ? (
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="h-36 w-full sm:w-44 object-cover"
                  />
                ) : (
                  <div className="h-36 w-full sm:w-44 bg-muted flex items-center justify-center text-sm text-muted-foreground">
                    No Image
                  </div>
                )}

                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2 text-lg font-semibold">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-3">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {blog.summary}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>By {blog.author}</span>
                      {blog.createdAt && (
                        <span>
                          {/* {format(new Date(blog.createdAt), "dd MMM yyyy")} */}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/blogs/${blog.slug}`}>
                        <Button size="sm" variant="default">
                          View
                        </Button>
                      </Link>

                      <Link to={`/blogs/update/${blog.slug}`}>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
