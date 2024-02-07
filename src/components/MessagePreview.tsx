import UserAvatar from "@/components/Avatar";
import { shortenText } from "@/lib/stringUtils";

type MessagePreviewProps = {
  name: string;
  message: string;
};

const MessagePreview = ({ name, message }: MessagePreviewProps) => {
  return (
    <div className="flex flex-col flex-nowrap mb-4">
      <div className="flex flex-row items-center space-x-4">
        <UserAvatar name={name} />
        <p className="font-bold text-blue-950">{name}</p>
      </div>
      <p className="text-sm mt-2">{shortenText(message, 170)}</p>
    </div>
  );
};

export default MessagePreview;
