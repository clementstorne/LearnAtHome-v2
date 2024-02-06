import MessagePreview from "@/components/MessagePreview";
import TaskList from "@/components/TaskList";

import messages from "@/data/messages.json";

export default function Home() {
  return (
    <main
      className="w-full h-full flex flex-col pt-48 px-8 pb-20 space-y-8 md:space-y-0
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
        <TaskList />
      </section>
    </main>
  );
}
