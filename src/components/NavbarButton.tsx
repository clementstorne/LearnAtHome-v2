"use client";

import { cn } from "@/lib/utils";
import {
  CalendarDays,
  Home,
  ListTodo,
  LogOut,
  MessageCircleMore,
  User,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

type ButtonCategories =
  | "home"
  | "profile"
  | "message"
  | "calendar"
  | "task"
  | "logout";

const getIcon = (category: ButtonCategories) => {
  switch (category) {
    case "home":
      return <Home />;
    case "profile":
      return <User />;
    case "message":
      return <MessageCircleMore />;
    case "calendar":
      return <CalendarDays />;
    case "task":
      return <ListTodo />;
    case "logout":
      return <LogOut />;
  }
};

type LogOutButtonProps = {
  className?: string;
};

const LogOutButton = ({ className }: LogOutButtonProps) => {
  return (
    <Button
      className={cn("rounded-full h-10", "md:w-16 md:h-16 md:my-4", className)}
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      {getIcon("logout")}
    </Button>
  );
};

type NavbarButtonProps = {
  category: ButtonCategories;
  href: string;
  className?: string;
};

const NavbarButton = ({ category, href, className }: NavbarButtonProps) => {
  if (category === "logout") {
    return <LogOutButton className={className} />;
  } else {
    return (
      <Button
        asChild
        className={cn(
          "rounded-full h-10",
          "md:w-16 md:h-16 md:my-4",
          className
        )}
      >
        <Link href={href}>{getIcon(category)}</Link>
      </Button>
    );
  }
};

export default NavbarButton;
