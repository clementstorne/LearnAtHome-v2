import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen h-40 z-40 bg-blue-950 flex justify-center items-center shadow">
      <h1 className="hidden">Learn@Home</h1>
      <Link href="/dashboard">
        <Image
          src={"/Learn@Home.svg"}
          alt="Learn@Home - Soutien scolaire en ligne pour tous"
          width={225}
          height={160}
          priority={true}
        />
      </Link>
    </header>
  );
};

export default Header;
