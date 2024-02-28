import NextEvent from "@/components/NextEvent";
import eventsList from "@/data/events.json";

type NextEventsSectionProps = {
  userId: string;
};

const NextEventsSection = ({ userId }: NextEventsSectionProps) => {
  const events = eventsList.filter((event) => event.ownerId === userId);

  return (
    <section>
      <h2>Mes prochains événements</h2>
      {events.length === 0 ? (
        <p>Aucun événement programmé</p>
      ) : (
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
      )}
    </section>
  );
};

export default NextEventsSection;
