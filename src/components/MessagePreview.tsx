import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { shortenText } from "@/lib/utils";

type MessagePreviewProps = {
  name: string;
  message: string;
};

const MessagePreview = ({ name, message }: MessagePreviewProps) => {
  return (
    <div className="flex flex-col flex-nowrap mb-4">
      <div className="flex flex-row items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${name}}`}
          />
        </Avatar>
        <h3>{name}</h3>
      </div>
      <p className="text-sm mt-2">{shortenText(message, 170)}</p>
    </div>
  );
};

export default MessagePreview;
