import { authOptions } from "@/lib/auth";
import { getTasksFromTaskListId } from "@/lib/dataTask";
import { getUser } from "@/lib/dataUser";
import { UserData } from "@/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import TaskListTitle from "./TaskListTitle";

type TaskListProps = {
  userId: string;
  taskListId: string;
};

const TaskList = async ({ userId, taskListId }: TaskListProps) => {
  const tasks = await getTasksFromTaskListId(taskListId);
  const creator = await getUser(userId);

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  } else {
    const user = session?.user as UserData;
    const userData = { id: user.id, role: user.role };

    return (
      <>
        <TaskListTitle creator={creator} tasks={tasks} user={userData} />
      </>
    );
  }
};

export default TaskList;
