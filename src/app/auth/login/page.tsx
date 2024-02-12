import Link from "next/link";
import LoginForm from "./components/LoginForm";

const page = () => {
  return (
    <main className="w-full h-full pt-48 px-8">
      <LoginForm />
      <div className="flex flex-col flex-nowrap items-center space-y-4">
        <Link href={"/auth/signup"}>Je n&apos;ai pas encore de compte</Link>
        <Link href={"/auth/reset-password"}>
          J&apos;ai oublié mon mot de passe
        </Link>
      </div>
    </main>
  );
};

export default page;
