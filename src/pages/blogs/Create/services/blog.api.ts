import { endPoints, api } from "@/api";
import { type Blog } from "@/validations";

export async function createBlogService(payload: Blog) {
  const { data } = await api.post(endPoints.createBlog.url, payload);
  return data;
}
