import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Blog } from "@/types/blog";

export default function AllBlogs() {
  const blogs: Blog[] = []; // Later → load from backend

  return (
    <div className="max-w-4xl mx-auto space-y-4">
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
          {blogs.map((blog: any) => (
            <Card key={blog.id}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
