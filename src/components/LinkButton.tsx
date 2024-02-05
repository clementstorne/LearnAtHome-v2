import Link from "next/link";
import { Button } from "./ui/button";

type LinkButtonProps = {
  href: string;
  label: string;
  className?: string;
};

const LinkButton = ({ href, label, className }: LinkButtonProps) => {
  return (
    <Button
      asChild
      className={`${className}  bg-orange-600 text-black outline-none hover:bg-white focus:bg-white border-4 border-orange-600 hover:text-black my-4`}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default LinkButton;
