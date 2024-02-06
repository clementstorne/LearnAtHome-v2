import NextEvent from "@/components/NextEvent";
import events from "@/data/events.json";

const NextEventsList = () => {
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
