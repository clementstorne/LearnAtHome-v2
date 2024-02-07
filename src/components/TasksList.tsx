import Task from "@/components/Task";
import tasksList from "@/data/tasks.json";

type TaskListProps = {
  userId: string;
};

const TasksList = ({ userId }: TaskListProps) => {
  const tasks = tasksList.filter((task) => task.ownerId === userId);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} content={task.content} isDone={task.isDone} />
      ))}
    </div>
  );
};

export default TasksList;
