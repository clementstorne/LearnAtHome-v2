import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/stringUtils";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  name: string;
  src?: string;
  className?: string;
};

const UserAvatar = ({ name, src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-12 w-12", className)}>
      {src ? (
        <AvatarImage src={src} />
      ) : (
        <AvatarImage
          src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${name}}`}
        />
      )}

      <AvatarFallback className="bg-blue-950 text-white">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
