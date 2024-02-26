import UserAvatar from "@/components/Avatar";
import Task from "@/components/Task";
import { getTasksFromTaskListId } from "@/lib/dataTask";
import { getUserNameAndAvatar } from "@/lib/dataUser";
import { displayNumberOfUnfinishedTasks } from "@/lib/taskUtils";

type TaskListTitleProps = {
  userId: string;
  taskListId: string;
};

const TaskListTitle = async ({ userId, taskListId }: TaskListTitleProps) => {
  const tasks = await getTasksFromTaskListId(taskListId);

  const user = await getUserNameAndAvatar(userId);

  return (
    <>
      <div className="cursor-pointer bg-blue-100 p-2 mb-4 rounded-md flex items-center hover:border-4 hover:border-orange-600 hover:p-1">
        <UserAvatar name={user.name} src={user.imageUrl} />
        <div className="ml-4 flex flex-col">
          <p className="text-blue-950 font-bold">{user.name}</p>
          <p>{displayNumberOfUnfinishedTasks(tasks)}</p>
        </div>
      </div>
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
    </>
  );
};

export default TaskListTitle;
