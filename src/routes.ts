import { Home, FileText, Plus } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import { AllBlogs, CreateBlog, Blog, EditBlog  } from "./pages";

// export const lazyPage = (path: string) =>
//   lazy(() => import(`../pages/${path}`).then((m) => ({ default: m.default })));

export const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
    element: Dashboard,
    skip: false,
  },

  {
    name: "Blogs",
    path: "/blogs",
    icon: FileText,
    element: AllBlogs,
    skip: false,
    children: [
      // { name: "All Blogs", path: "/blogs", element: NotFound,},
      { name: "Create Blog", path: "/blogs/create", icon: Plus, element: CreateBlog, skip: false, },
      // { name: "Edit Blog", path: "/blogs/:id/edit", element: NotFound, },
      { name: "View Blog", path: "/blogs/:slug", element: Blog, },
      { name: "Edit Blog", path: "/blogs/update/:slug", element: EditBlog, },
    ],
  },

  // {
  //   name: "Users",
  //   icon: Users,
  //   children: [
  //     { name: "All Users", path: "/users" },
  //     { name: "Add User", path: "/users/create", icon: Plus },
  //     { name: "Edit User", path: "/users/:id/edit", skip: true },
  //   ],
  // },

  // {
  //   name: "Products",
  //   icon: Boxes,
  //   children: [
  //     { name: "All Products", path: "/products" },
  //     { name: "Add Product", path: "/products/create", icon: Plus },
  //     { name: "Edit Product", path: "/products/:id/edit", skip: true },
  //   ],
  // },

  // {
  //   name: "Orders",
  //   path: "/orders",
  //   icon: ShoppingCart,
  // },

  // {
  //   name: "Analytics",
  //   path: "/analytics",
  //   icon: BarChart3,
  // },

  // {
  //   name: "Messages",
  //   path: "/messages",
  //   icon: MessageSquare,
  // },

  // {
  //   name: "Notifications",
  //   path: "/notifications",
  //   icon: Bell,
  // },

  // {
  //   name: "Settings",
  //   path: "/settings",
  //   icon: Settings,
  // },
];


export const routes = navItems.flatMap((item) => {
  const parent = item.path
    ? [{ name: item.name, path: item.path, icon: item.icon, element: item.element, skip: item.skip }]
    : [];

  const children = item.children?.map((child) => ({
    name: child.name,
    path: child.path,
    icon: child.icon,
    element: child.element,
    skip: child.skip,
  })) ?? [];

  return [...parent, ...children];
});

