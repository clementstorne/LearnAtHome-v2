import UserAvatar from "@/components/Avatar";
import { getUser } from "@/lib/dataUser";
import { cn } from "@/lib/utils";
import ProfileForm from "./components/ProfileForm";

const userId = "b6566e5b-60d3-4e7e-8771-831e155d6c49";

const page = async () => {
  const user = await getUser(userId);

  return (
    <main
      className={cn(
        "w-full h-full pt-48 px-8 flex flex-col items-center",
        "md:pl-36 md:pr-8"
      )}
    >
      <UserAvatar name={user.name} src={user.imageUrl} className="h-48 w-48" />
      <ProfileForm user={user} />
    </main>
  );
};

export default page;
