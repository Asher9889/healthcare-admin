import AllBlogs from "@/pages/blogs/AllBlogs";
import CreateBlog from "@/pages/blogs/CreateBlog";
import Dashboard from "@/pages/Dashboard";
import Orders from "@/pages/orders";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/blogs/create" element={<CreateBlog />} />
    </Routes>
  );
};
export default AppRoutes;
