import { NavLink } from "react-router-dom";
import { navItems } from "@/routes";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
  name: string;
  path?: string;
  icon?: any;
  skip?: boolean;
  children?: NavItem[];
}

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems
                .filter((item) => !item.skip)
                .map((item) => (
                  <SidebarItem key={item.name} item={item} />
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}



const SidebarItem = ({ item }: { item: NavItem }) => {
  // skip items
  if (item.skip) return null;

  // has children → render nested menu
  if (item.children?.length) {
    return (
      <SidebarMenuItem>
        <div className="px-2 py-1 text-sm font-medium text-muted-foreground">
          {item.name}
        </div>

        <SidebarMenu>
          {item.children
            .filter((child) => !child.skip)
            .map((child) => (
              <SidebarItem key={child.name} item={child} />
            ))}
        </SidebarMenu>
      </SidebarMenuItem>
    );
  }

  // leaf node
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.path!}
          className={({ isActive }) =>
            [
              "flex items-center gap-2",
              isActive ? "text-primary font-medium" : "",
            ].join(" ")
          }
        >
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.name}</span>
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
