import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-40 z-50  bg-blue-950 flex justify-center items-center shadow">
      <Link href="/dashboard">
        <h1 className="hidden">Learn@Home</h1>
        <Image
          src={"/Learn@Home.svg"}
          alt="Learn@Home - Guide éducatif en ligne pour tous"
          width={225}
          height={160}
        />
      </Link>
    </header>
  );
};

export default Header;
