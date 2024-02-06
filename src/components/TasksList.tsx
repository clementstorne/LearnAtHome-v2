import Task from "@/components/Task";
import tasks from "@/data/tasks.json";

const TasksList = () => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task.label} isComplete={task.isComplete} />
      ))}
    </div>
  );
};

export default TasksList;
