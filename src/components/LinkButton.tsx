import Link from "next/link";
import { Button } from "./ui/button";

type LinkButtonProps = {
  href: string;
  label: string;
  className?: string;
};

const LinkButton = ({ href, label, className }: LinkButtonProps) => {
  return (
    <Button asChild className={`${className} mt-4`}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default LinkButton;
