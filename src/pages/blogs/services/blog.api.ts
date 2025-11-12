import { endPoints, api } from "@/api";
import { type Blog } from "@/validations";

export async function createBlog(payload: Blog) {
  const { data } = await api.post(endPoints.createBlog.url, payload);
  return data;
}

export async function getAllBlogs() {
  const { data } = await api.get(endPoints.getAllBlogs.url);
  return data;
}

export async function getBlog(slug: string){
  const { data } = await api.get(endPoints.getBlog.url.replace(":slug", slug))
  return data;
}

export async function updateBlog(slug: string, payload: Blog){
  const { data } = await api.put(endPoints.updateBlog.url.replace(":slug", slug), payload)
  return data;
}
