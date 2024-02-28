import TasksSection from "@/app/dashboard/components/TasksSection";
import MessagePreview from "@/components/MessagePreview";
import NextEventsList from "@/components/NextEventsList";

import messages from "@/data/messages.json";
import { authOptions } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/login");
  } else {
    return (
      <main
        className={cn(
          "w-full h-full flex flex-col pt-48 px-8 pb-20 space-y-8",
          "md:space-y-0 md:pl-36 md:pr-8 md:pb-0 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-4"
        )}
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
        <NextEventsList userId={user.id} />
        <TasksSection userId={user.id} />
      </main>
    );
  }
}
