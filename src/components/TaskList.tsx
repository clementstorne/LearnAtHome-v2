import Task from "@/components/Task";
import tasks from "@/data/tasks.json";

const TaskList = () => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task.label} isComplete={task.isComplete} />
      ))}
    </div>
  );
};

export default TaskList;
