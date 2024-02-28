import { Metadata } from "next";
import Link from "next/link";
import SignupForm from "./components/SignupForm";

export const metadata: Metadata = {
  title: "Créez un compte - Learn@Home",
};

const page = () => {
  return (
    <main className="w-full h-full pt-48 px-8">
      <SignupForm />
      <div className="flex flex-col flex-nowrap items-center space-y-4">
        <Link href={"/login"}>J&apos;ai déjà un compte</Link>
        <Link href={"/reset-password"}>J&apos;ai oublié mon mot de passe</Link>
      </div>
    </main>
  );
};

export default page;
