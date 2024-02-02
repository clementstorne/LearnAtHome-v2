import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { shortenText } from "@/lib/utils";

type MessagePreviewProps = {
  name: string;
  message: string;
};

const MessagePreview = ({ name, message }: MessagePreviewProps) => {
  return (
    <div className="flex flex-row flex-nowrap justify-start items-start space-x-4 my-2">
      <Avatar className="h-20 w-20">
        <AvatarImage
          src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${name}}`}
        />
      </Avatar>
      <div className="flex flex-col flex-nowrap space-y-1">
        <h3>{name}</h3>
        <p className="text-sm">{shortenText(message, 170)}</p>
      </div>
    </div>
  );
};

export default MessagePreview;
