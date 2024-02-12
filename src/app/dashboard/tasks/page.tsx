import { Button } from "@/components/ui/button";
import users from "@/data/users.json";
import { ListPlus } from "lucide-react";
import TaskListTitle from "./components/TaskListTitle";
import TasksList from "./components/TasksList";

const user = users.filter(
  (user) => user.id === "b6566e5b-60d3-4e7e-8771-831e155d6c49"
)[0];

const page = () => {
  return (
    <main className="w-full h-full pt-48 px-8 md:pl-36 md:pr-8 flex">
      <section className="w-1/3 h-full border-r-2 pr-8 mb-8">
        <TaskListTitle user={user} />
      </section>
      <section className="w-2/3 h-full pl-8">
        <Button className="mb-8">
          <span className="flex items-center">
            <ListPlus className="mr-2" /> Ajouter une nouvelle tâche
          </span>
        </Button>
        <TasksList userId={user.id} />
      </section>
    </main>
  );
};

export default page;
