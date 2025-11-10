import { lazy } from "react";
import { Home, FileText, Plus, Settings } from "lucide-react";
import { type NavItem } from "./interfaces";



export const lazyPage = (path: string) => lazy(() => import(`../pages/${path}`).then((m) => ({ default: m.default })));

export const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: Home,
    element: lazyPage("dashboard"),
  },

  {
    name: "Blogs",
    icon: FileText,
    children: [
      {
        name: "All Blogs",
        path: "/blogs",
        // element: BlogList,
      },
      {
        name: "Create Blog",
        path: "/blogs/create",
        icon: Plus,
        // element: BlogCreate,
      },
      {
        name: "Edit Blog",
        path: "/blogs/:id/edit",
        // element: BlogEdit,
        skip: true, // hide from sidebar
      },
      {
        name: "View Blog",
        path: "/blogs/:id",
        // element: BlogView,
        skip: true, // hide from sidebar
      },
    ],
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    // element: SettingsPage,
  },
];
