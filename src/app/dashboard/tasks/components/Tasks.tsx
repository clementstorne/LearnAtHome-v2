import Task from "@/components/Task";
import { TaskData } from "@/types";

type TasksProps = {
  tasks: TaskData[];
};

const Tasks = ({ tasks }: TasksProps) => {
  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isDone={task.isDone}
          />
        ))}
    </div>
  );
};

export default Tasks;
