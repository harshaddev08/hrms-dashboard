"use client";
import Image from "next/image";
import {
  AppIcon,
  BriefcaseIcon,
  CalendarCheckIcon,
  CoinDollarIcon,
  CommunityIcon,
  NotepadIcon,
  NotesIcon,
  SettingsIcon,
  UsersIcon,
  UsersTwoIcon,
} from "@/components/icons";
import { cn } from "@/utils/cn";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    icon: AppIcon,
    href: "/",
  },
  {
    name: "All Employees",
    icon: UsersIcon,
    href: "/employees",
  },
  {
    name: "All Departments",
    icon: CommunityIcon,
    href: "/departments",
  },
  {
    name: "Attendance",
    icon: CalendarCheckIcon,
    href: "/attendance",
  },
  {
    name: "Payroll",
    icon: CoinDollarIcon,
    href: "/payroll",
  },
  {
    name: "Jobs",
    icon: BriefcaseIcon,
    href: "/jobs",
  },
  {
    name: "Candidates",
    icon: UsersTwoIcon,
    href: "/candidates",
  },
  {
    name: "Leaves",
    icon: NotepadIcon,
    href: "/leaves",
  },
  {
    name: "Holidays",
    icon: NotesIcon,
    href: "/holidays",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
];

interface IMenuItem {
  name: string;
  icon: typeof AppIcon;
  href: string;
}

interface SidebarMenuItemProps {
  item: IMenuItem;
  isActive: boolean;
}

const SidebarMenu = ({ item, isActive }: SidebarMenuItemProps) => {
  const router = useRouter();

  const handleOnclick = () => {
    router.push(item.href);
  };

  return (
    <button
      onClick={handleOnclick}
      className={cn(
        "flex items-center px-5 py-3.5 gap-4 h-12.5 rounded-tr-xl rounded-br-xl ",
        isActive &&
          "border-l-3  border-primary-500 bg-primary-5 text-primary-500 font-semibold",
        !isActive && "border-l-3 border-transparent "
      )}
    >
      <item.icon />
      <span>{item.name}</span>
    </button>
  );
};

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full bg-gray-20 w-72 p-8 rounded-[20px]">
      <div className="flex w-full flex-col gap-8">
        <div className="relative w-32 h-12.5">
          <Image
            src="/images/hrms-logo.png"
            alt="logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          {menuItems.map((item, index) => (
            <SidebarMenu
              key={index}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
