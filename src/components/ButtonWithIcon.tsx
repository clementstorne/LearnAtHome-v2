import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

type ButtonWithIconProps = {
  category?: string;
  label: string;
  className?: string;
};

export function ButtonWithIcon({
  category,
  label,
  className,
}: ButtonWithIconProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case "logout":
        return <LogOut className="mr-2 h-4 w-4" />;
    }
  };
  return (
    <Button className={className}>
      {category && getIcon(category)} {label}
    </Button>
  );
}
