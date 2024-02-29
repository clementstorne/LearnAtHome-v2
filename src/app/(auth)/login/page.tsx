import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import LoginForm from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Connectez-vous à votre compte - Learn@Home",
};

const page = () => {
  return (
    <main className="w-full h-full pt-48 px-8">
      <Suspense>
        <LoginForm />
      </Suspense>
      <div className="flex flex-col flex-nowrap items-center space-y-4">
        <Link href={"/signup"}>Je n&apos;ai pas encore de compte</Link>
        <Link href={"/reset-password"}>J&apos;ai oublié mon mot de passe</Link>
      </div>
    </main>
  );
};

export default page;
