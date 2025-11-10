// import { NavLink, useLocation } from "react-router-dom";
// import { navItems } from "@/routes";
// import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarMenuSub,
//   SidebarMenuSubItem,
//   SidebarMenuSubButton,
// } from "@/components/ui/sidebar";

// export default function AppSidebar() {
//   const { pathname } = useLocation();

//   return (
//     <Sidebar collapsible="icon">
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>

//           <SidebarGroupContent>
//             <SidebarMenu>
//               {navItems
//                 .filter((item) => !item.skip)
//                 .map((item) => (
//                   <SidebarItem
//                     key={item.name}
//                     item={item}
//                     pathname={pathname}
//                   />
//                 ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

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
} from "@/components/ui/sidebar";
import { useLocation, NavLink } from "react-router-dom";
import { navItems } from "@/routes";

export default function AppSidebar() {
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon">
      {/* ✅ Collapse button sits here — always correct position */}
      <SidebarHeader className="flex justify-end p-2">
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems
                //@ts-ignore
                .filter((item) => !item.skip)
                .map((item) => (
                  <SidebarItem
                    key={item.name}
                    item={item}
                    pathname={pathname}
                  />
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function SidebarItem({ item, pathname }: { item: any; pathname: string }) {
  // Has children -> parent section menu
  if (item.children?.length) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={item.name}>
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
