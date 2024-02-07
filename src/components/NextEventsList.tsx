import NextEvent from "@/components/NextEvent";
import eventsList from "@/data/events.json";

type NextEventsListProps = {
  userId: string;
};

const NextEventsList = ({ userId }: NextEventsListProps) => {
  const events = eventsList.filter((event) => event.ownerId === userId);

  return (
    <div>
      {events.map((event) => (
        <NextEvent
          key={event.id}
          name={event.name}
          place={event.place}
          start={event.start}
          finish={event.finish}
        />
      ))}
    </div>
  );
};

export default NextEventsList;
