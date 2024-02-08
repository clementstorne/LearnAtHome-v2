import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/stringUtils";

type UserAvatarProps = {
  name: string;
  className?: string;
};

const UserAvatar = ({ name, className }: UserAvatarProps) => {
  return (
    <Avatar className={className ? `${className}` : "h-12 w-12"}>
      <AvatarImage
        src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${name}}`}
      />
      <AvatarFallback className="bg-blue-950 text-white">
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
