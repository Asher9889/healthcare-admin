import { getAllBlogs } from "../services/blog.api";

export async function useBlogs() {
    try {
        const data = await getAllBlogs();
        return data;
    } catch (error) {
        console.log(error);
    }
} 