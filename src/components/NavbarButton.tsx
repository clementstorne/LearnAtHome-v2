import {
  CalendarDays,
  Home,
  ListTodo,
  LogOut,
  MessageCircleMore,
  User,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type NavbarButtonProps = {
  category: "home" | "profile" | "message" | "calendar" | "task" | "logout";
  href: string;
  className?: string;
};

const NavbarButton = ({ category, href, className }: NavbarButtonProps) => {
  const getIcon = (category: string) => {
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

  return (
    <Button
      asChild
      className={`${className} rounded-full bg-orange-600 text-black hover:bg-white border-4 border-orange-600 hover:text-black h-10
      md:w-16 md:h-16 md:my-4`}
    >
      <Link href={href}>{getIcon(category)}</Link>
    </Button>
  );
};

export default NavbarButton;
