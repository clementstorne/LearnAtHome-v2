import { Button } from "@/components/ui/button";
import { getTaskLists } from "@/lib/dataTask";
import { filterTaskListData } from "@/lib/taskUtils";
import { ListPlus } from "lucide-react";
import TaskListTitle from "./components/TaskListTitle";
import TasksList from "./components/TasksList";

const userId = "b6566e5b-60d3-4e7e-8771-831e155d6c49";

const page = async () => {
  const data = await getTaskLists(userId);
  const taskList = filterTaskListData(data, userId);

  return (
    <main className="w-full h-full pt-48 px-8 md:pl-36 md:pr-8 flex">
      <section className="w-1/3 h-full border-r-2 pr-8 mb-8">
        {taskList.map((list) => (
          <TaskListTitle
            key={list.taskListId}
            userId={list.userId}
            taskListId={list.taskListId}
          />
        ))}
      </section>
      <section className="w-2/3 h-full pl-8">
        <Button className="mb-8">
          <span className="flex items-center">
            <ListPlus className="mr-2" /> Ajouter une nouvelle tâche
          </span>
        </Button>
        <TasksList userId={userId} />
      </section>
    </main>
  );
};

export default page;
