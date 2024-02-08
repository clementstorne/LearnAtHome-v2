import UserAvatar from "@/components/Avatar";
import tasksList from "@/data/tasks.json";
import { countUnfinishedTasks } from "@/lib/taskUtils";

type TaskListTitleProps = {
  user: any;
};

const TaskListTitle = ({ user }: TaskListTitleProps) => {
  const tasks = tasksList.filter((task) => task.ownerId === user.id);
  const numberOfUnfinishedTasks = countUnfinishedTasks(tasks);

  return (
    <div className="bg-blue-200 p-2 mb-4 flex items-center hover:border-4 hover:border-orange-600 hover:p-1">
      <UserAvatar name={user.name} />
      <div className="ml-4 flex flex-col">
        <p className="text-blue-950 font-bold">{user.name}</p>
        <p>
          {numberOfUnfinishedTasks === 0
            ? "numberOfUnfinishedTasks"
            : `${numberOfUnfinishedTasks} tâches à terminer`}
        </p>
      </div>
    </div>
  );
};

export default TaskListTitle;
