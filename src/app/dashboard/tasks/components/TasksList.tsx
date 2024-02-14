import Task from "@/components/Task";
import { getTasks } from "@/lib/dataTask";

type TaskListProps = {
  userId: string;
};

const TasksList = async ({ userId }: TaskListProps) => {
  const tasks = await getTasks(userId);

  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          <Task key={task.id} id={task.id} content={task.content} isDone={task.isDone} />
        ))}
    </div>
  );
};

export default TasksList;
