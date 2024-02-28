import Task from "@/components/Task";
import { getTasks } from "@/lib/dataTask";
import { countUnfinishedTasks, filterUnfinishedTasks } from "@/lib/taskUtils";

type TasksSectionProps = {
  userId: string;
};

const TasksSection = async ({ userId }: TasksSectionProps) => {
  const tasks = await getTasks(userId);
  const unfinishedTasks = filterUnfinishedTasks(tasks);
  const numberOfUnfinishedTasks = countUnfinishedTasks(tasks);
  return (
    <section>
      <h2>
        Mes tâches à terminer{" "}
        {numberOfUnfinishedTasks !== 0 && `(${numberOfUnfinishedTasks})`}
      </h2>
      {numberOfUnfinishedTasks === 0 ? (
        <p>Aucune tâche à terminer</p>
      ) : (
        <div className="flex flex-col">
          {unfinishedTasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              isDone={task.isDone}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TasksSection;
