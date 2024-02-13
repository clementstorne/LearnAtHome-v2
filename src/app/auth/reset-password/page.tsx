import Link from "next/link";
import ResetPasswordForm from "./components/ResetPasswordForm";

const page = () => {
  return (
    <main className="w-full h-full pt-48 px-8">
      <ResetPasswordForm />
      <div className="flex flex-col flex-nowrap items-center space-y-4">
        <Link href={"/auth/signup"}>Je n&apos;ai pas encore de compte</Link>
      </div>
    </main>
  );
};

export default page;
