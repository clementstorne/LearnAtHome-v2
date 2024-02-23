import { TaskData } from "@/types";

export const filterUnfinishedTasks = (taskList: TaskData[]) => {
  const unfinishedTasks = taskList.filter((task) => !task.isDone);
  return unfinishedTasks;
};

export const countUnfinishedTasks = (taskList: TaskData[]) => {
  const unfinishedTasks = filterUnfinishedTasks(taskList);
  return unfinishedTasks.length;
};

export const displayNumberOfUnfinishedTasks = (taskList: TaskData[]) => {
  const numberOfUnfinishedTasks = countUnfinishedTasks(taskList);

  switch (numberOfUnfinishedTasks) {
    case 0:
      return "Toutes les tâches sont terminées";
    case 1:
      return "1 tâche à terminer";
    default:
      return `${numberOfUnfinishedTasks} tâches à terminer`;
  }
};

type UserTaskList = {
  userId: string;
  taskListId: string;
};

export const filterTaskListData = (
  data: UserTaskList[],
  userIdToRemove: string
) => {
  return data.filter((item) => {
    if (item.userId === userIdToRemove) {
      return !data.some(
        (otherItem) =>
          otherItem.taskListId === item.taskListId &&
          otherItem.userId !== userIdToRemove
      );
    }
    return true;
  });
};
