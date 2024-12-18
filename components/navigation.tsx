import React from "react";
import { House, Settings, CircleCheck, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "",
    icon: House,
    activeIcon: House,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: CircleCheck,
    activeIcon: CircleCheck,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    activeIcon: Settings,
  },
  {
    label: "Members",
    href: "/Members",
    icon: Users,
    activeIcon: Users,
  },
];

type Props = {};

export default function Navigation({}: Props) {
  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;
        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opcity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
}
