import TasksSection from "@/app/dashboard/components/TasksSection";
import MessagePreview from "@/components/MessagePreview";
import NextEventsList from "@/components/NextEventsList";

import messages from "@/data/messages.json";
import users from "@/data/users.json";

const user = users.filter(
  (user) => user.id === "b6566e5b-60d3-4e7e-8771-831e155d6c49"
  // (user) => user.id === "f4ef1c03-141d-49fd-8585-56721168a5ae"
)[0];

export default function Home() {
  return (
    <main
      className="w-full h-full flex flex-col pt-48 px-8 pb-20 space-y-8 md:space-y-0
      md:pl-36 md:pr-8 md:pb-0 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-4"
    >
      <section>
        <h2>Bienvenue {user.name}</h2>
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
        <NextEventsList userId={user.id} />
      </section>
      <TasksSection userId={user.id} />
    </main>
  );
}
