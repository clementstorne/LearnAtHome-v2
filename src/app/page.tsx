import LinkButton from "@/components/LinkButton";
import Image from "next/image";

LinkButton;

export default function Home() {
  return (
    <main className="h-screen w-screen bg-blue-950 flex flex-col justify-center items-center">
      <Image
        src={"/Learn@Home.svg"}
        alt="Learn@Home - Guide éducatif en ligne pour tous"
        width={450}
        height={320}
        priority={true}
      />
      <nav className="flex flex-row flex-nowrap justify-between items-center">
        <LinkButton
          href="/login"
          label="J'ai déjà un compte"
          className="mr-4"
        />
        <LinkButton href="/signup" label="Je veux créer un compte" />
      </nav>
    </main>
  );
}
