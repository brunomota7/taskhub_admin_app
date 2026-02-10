"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

const items = [
  { label: "Usuários", href: "/users" },
  { label: "Grupos", href: "/groups" },
  { label: "Tasks", href: "/tasks" },
];

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive && "bg-accent text-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
