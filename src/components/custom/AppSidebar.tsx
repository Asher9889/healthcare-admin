import {
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "@/routes";
import { LogOut } from "lucide-react";
import { api } from "@/api";
import { useQueryClient } from "@tanstack/react-query";

export default function AppSidebar() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      // Clear auth cache
      queryClient.setQueryData(["auth", "me"], null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };


  return (
    <Sidebar collapsible="icon">
      {/* ✅ Collapse button sits here — always correct position */}
      <SidebarHeader className="flex justify-end p-2">
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems
                //@ts-ignore
                .filter((item) => !item.skip)
                .map((item) => {
                  return (
                    <SidebarItem
                      key={item.name}
                      item={item}
                      pathname={item.path}
                    />
                  )
                })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function SidebarItem({ item, pathname }: { item: any; pathname: string }) {
  const navigate = useNavigate();
  // Has children -> parent section menu
  if (item.children?.length) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton onClick={() => navigate(item.path)} tooltip={item.name}>
          {item.icon && <item.icon />}
          <span>{item.name}</span>
        </SidebarMenuButton>

        <SidebarMenuSub>
          {item.children
            .filter((sub: any) => !sub.skip)
            .map((sub: any) => (
              <SidebarMenuSubItem key={sub.name}>
                <SidebarMenuSubButton asChild isActive={pathname === sub.path}>
                  <NavLink to={sub.path}>
                    {sub.icon && <sub.icon />}
                    <span>{sub.name}</span>
                  </NavLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
        </SidebarMenuSub>
      </SidebarMenuItem>
    );
  }

  // Simple item (no children)
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={pathname === item.path}
        tooltip={item.name}
      >
        <NavLink to={item.path}>
          {item.icon && <item.icon />}
          <span>{item.name}</span>
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
