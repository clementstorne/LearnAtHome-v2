import { getTaskLists } from "@/lib/dataTask";
import { filterTaskListData } from "@/lib/taskUtils";
import { cn } from "@/lib/utils";
import TaskList from "./components/TasksList";

const userId = "b6566e5b-60d3-4e7e-8771-831e155d6c49";

const page = async () => {
  const data = await getTaskLists(userId);
  const taskList = filterTaskListData(data, userId);

  return (
    <main
      className={cn(
        "w-full h-full pt-48 px-8 flex flex-col",
        "md:pl-36 md:pr-8 md:grid md:grid-cols-3"
      )}
    >
      {taskList.map((list) => (
        <TaskList
          key={list.taskListId}
          userId={list.userId}
          taskListId={list.taskListId}
        />
      ))}
    </main>
  );
};

export default page;
