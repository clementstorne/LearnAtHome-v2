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

export const formatTaskListData = (data: UserTaskList[]) => {
  const filteredResult = {};
  const result = [];

  for (const item of data) {
    if (!filteredResult[item.taskListId]) {
      filteredResult[item.taskListId] = item;
    }
  }

  for (const key in filteredResult) {
    result.push(filteredResult[key]);
  }

  return result;
};
