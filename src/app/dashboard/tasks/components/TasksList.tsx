import { getTasksFromTaskListId } from "@/lib/dataTask";
import { getUserNameAndAvatar } from "@/lib/dataUser";
import TaskListTitle from "./TaskListTitle";
import Tasks from "./Tasks";

type TaskListProps = {
  userId: string;
  taskListId: string;
};

const TaskList = async ({ userId, taskListId }: TaskListProps) => {
  const tasks = await getTasksFromTaskListId(taskListId);
  const user = await getUserNameAndAvatar(userId);

  return (
    <>
      <TaskListTitle user={user} tasks={tasks} />
    </>
  );
};

export default TaskList;
