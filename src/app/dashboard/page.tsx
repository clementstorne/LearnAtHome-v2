import MessagePreview from "@/components/MessagePreview";

const messages = [
  {
    id: "9e819927-5d73-4630-9ead-977c19e73899",
    sender: "Denis Chastain",
    content:
      "Suspendisse vel felis. Ut lorem lorem, interdum eu, tincidunt sit amet, laoreet vitae, arcu.",
  },
  {
    id: "c13a269d-ad2a-4c25-8c11-9aa5d21a57fc",
    sender: "Juliette Bechard",
    content:
      "Quisque eu mi a augue mollis posuere. Donec  tincidunt, lorem at vestibulum pulvinar, felis purus sit amet accumsan. Mauris et diam mattis, placerat magna non, hendrerit tellus. Maecenas sem leo, cursus vel venenatis…",
  },
];

export default function Home() {
  return (
    <main
      className="w-full h-full flex flex-col pt-48 px-8 pb-14 space-y-8 md:space-y-0
      md:pl-36 md:pr-8 md:pb-0 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-4"
    >
      <section>
        <h2>Bienvenue Enzo Jodoin</h2>
        <p>Dernière connexion le 11/01/2023 à 13:17</p>
      </section>
      <section>
        <h2>Mes messages non lus</h2>
        {messages.map((message) => (
          <MessagePreview
            key={message.id}
            name={message.sender}
            message={message.content}
          />
        ))}
      </section>
      <section>
        <h2>Mes prochains événements</h2>
      </section>
      <section>
        <h2>Mes tâches</h2>
      </section>
    </main>
  );
}
