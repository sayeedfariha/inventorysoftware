'use client'
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Box,
  BadgePercent,
  ScanBarcode,
  Gem,
  Component,
  CircleUserRound,
  User,
  Cable,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// Menu items.
const items = [{
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "User",
    url: "#",
    icon: User,
    subItems: [
      {
        title: "User",
        url: "/user",
      },
      { title: "User Role", url: "/user/User_Role" },
    ],
  },
  
  {
    title: "Sales",
    url: "/Sales",
    icon: BadgePercent,
  },
  {
    title: "Supplier",
    url: "/Supplier",
    icon: Cable,
  },
  {
    title: "Products",
    url: "#",
    icon: Box,
    subItems: [
      {
        title: "Product Category and Info",
        url: "/product/Product_category&info",
      },
      { title: "Product Sub Category", url: "/product/Product_sub_category" },
    ],
  },
  {
    title: "Purchases",
    url: "/purchases",
    icon: ScanBarcode,
  },
  {
    title: "Brands",
    url: "/brand",
    icon: Gem,
  },
  {
    title: "Models",
    url: "/model",
    icon: Component,
    
  },
];

export default function AppSidebar() {
  const pathname = usePathname(); // Get the current route

  return (
    <Sidebar>
      <header className="px-2 py-4 ">
        <Link
          href={"/"}
          className="flex gap-2 items-center p-2 rounded-xl hover:bg-neutral-300"
        >
          <CircleUserRound className="w-10 h-10" />
          <div>
            <h2 className="text-md font-bold">Inventory</h2>
            <h4 className="text-xs text-neutral-400">Role</h4>
          </div>
        </Link>
      </header>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible
                      defaultOpen={true}
                      className="group/collapsible"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                          <div className="flex items-center select-none cursor-pointer">
                            <item.icon className="mr-2" />
                            <span>{item.title}</span>
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <a
                                href={subItem.url}
                                className={`block p-1 mb-1 rounded-md select-none ${
                                  pathname === subItem.url
                                    ? "bg-neutral-200 text-blue-600"
                                    : ""
                                }`}
                              >
                                {subItem.title}
                              </a>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    // Non-collapsible items
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center ${
                          pathname === item.url
                            ? "bg-neutral-200 text-blue-600"
                            : ""
                        }`}
                      >
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
