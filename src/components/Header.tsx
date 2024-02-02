import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "./ButtonWithIcon";

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 h-40 z-50  bg-blue-950 flex justify-center items-center shadow">
      <Link href="/">
        <h1 className="hidden">Learn@Home</h1>
        <Image
          src={"/Learn@Home.svg"}
          alt="Learn@Home - Guide éducatif en ligne pour tous"
          width={225}
          height={160}
        />
      </Link>
      <Link href="/auth/login">
        <ButtonWithIcon
          category="logout"
          label="Se déconnecter"
          className="absolute top-4 right-4 bg-orange-600 text-white"
        />
      </Link>
    </header>
  );
};

export default Header;
