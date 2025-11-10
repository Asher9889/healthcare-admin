// import { lazy } from "react";
// import { Home, FileText, Plus, Settings } from "lucide-react";
// import { type NavItem } from "./interfaces";

// export const lazyPage = (path: string) =>
//   lazy(() => import(`../pages/${path}`).then((m) => ({ default: m.default })));

// export const navItems: NavItem[] = [
//   {
//     name: "Dashboard",
//     path: "/",
//     icon: Home,
//   },

//   {
//     name: "Blogs",
//     icon: FileText,
//     children: [
//       {
//         name: "All Blogs",
//         path: "/blogs",
//       },
//       {
//         name: "Create Blog",
//         path: "/blogs/create",
//         icon: Plus,
//       },
//       {
//         name: "Edit Blog",
//         path: "/blogs/:id/edit",
//         skip: true,
//       },
//       {
//         name: "View Blog",
//         path: "/blogs/:id",
//         skip: true,
//       },
//     ],
//   },

//   {
//     name: "Settings",
//     path: "/settings",
//     icon: Settings,
//   },
// ];

import { lazy } from "react";
import {
  Home,
  FileText,
  Plus,
  Settings,
  Users,
  BarChart3,
  ShoppingCart,
  Boxes,
  MessageSquare,
  Bell,
} from "lucide-react";

export const lazyPage = (path: string) =>
  lazy(() => import(`../pages/${path}`).then((m) => ({ default: m.default })));

export const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
  },

  {
    name: "Blogs",
    icon: FileText,
    children: [
      { name: "All Blogs", path: "/blogs" },
      { name: "Create Blog", path: "/blogs/create", icon: Plus },
      { name: "Edit Blog", path: "/blogs/:id/edit", skip: true },
      { name: "View Blog", path: "/blogs/:id", skip: true },
    ],
  },

  {
    name: "Users",
    icon: Users,
    children: [
      { name: "All Users", path: "/users" },
      { name: "Add User", path: "/users/create", icon: Plus },
      { name: "Edit User", path: "/users/:id/edit", skip: true },
    ],
  },

  {
    name: "Products",
    icon: Boxes,
    children: [
      { name: "All Products", path: "/products" },
      { name: "Add Product", path: "/products/create", icon: Plus },
      { name: "Edit Product", path: "/products/:id/edit", skip: true },
    ],
  },

  {
    name: "Orders",
    path: "/orders",
    icon: ShoppingCart,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },

  {
    name: "Messages",
    path: "/messages",
    icon: MessageSquare,
  },

  {
    name: "Notifications",
    path: "/notifications",
    icon: Bell,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
