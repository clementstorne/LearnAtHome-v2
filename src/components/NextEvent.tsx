import { formatDate, formatTime } from "@/lib/dateUtils";

type NextEventProps = {
  name: string;
  place: string;
  start: string;
  finish: string;
};

const NextEvent = ({ name, place, start, finish }: NextEventProps) => {
  const date = formatDate(start);
  const time = formatTime(start);

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
      <div className="flex flex-col items-center bg-blue-100 p-2 w-36">
        <p className=" text-blue-950">{date}</p>
        <p className=" text-blue-950">à {time}</p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="font-bold">{name}</p>
        <p className="text-sm font-li">{place}</p>
      </div>
    </div>
  );
};

export default NextEvent;
