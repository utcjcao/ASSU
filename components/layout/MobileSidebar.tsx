"use client";

import Link from "next/link";
import { X } from "lucide-react";
import type { NavGroup } from "./nav";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

interface MobileSidebarProps {
  nav: NavGroup[];
  isRouteActive: (href: string) => boolean;
  isSubrouteActive: (href: string) => boolean;
}

export default function MobileSidebar({
  nav,
  isRouteActive,
  isSubrouteActive,
}: MobileSidebarProps) {
  const { setOpenMobile, isMobile } = useSidebar();

  if (!isMobile) return null;

  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row items-center justify-between p-4">
        <h2 className="text-base font-semibold text-sidebar-foreground">
          Menu
        </h2>
        <button
          type="button"
          onClick={() => setOpenMobile(false)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          aria-label="Close mobile navigation menu"
        >
          <X className="h-4 w-4" />
        </button>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="p-2">
        <SidebarMenu>
          {nav.map((group) => (
            <SidebarMenuItem key={group.href}>
              <SidebarMenuButton
                asChild
                isActive={isRouteActive(group.href)}
              >
                <Link
                  href={group.href}
                  onClick={() => setOpenMobile(false)}
                >
                  {group.label}
                </Link>
              </SidebarMenuButton>
              {group.type === "dropdown" ? (
                <SidebarMenuSub>
                  {group.items.map((item) => (
                    <SidebarMenuSubItem key={item.href}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={isSubrouteActive(item.href)}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpenMobile(false)}
                        >
                          {item.label}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
