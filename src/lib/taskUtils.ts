import { TaskData } from "@/types";

export const filterUnfinishedTasks = (taskList: TaskData[]) => {
  const unfinishedTasks = taskList.filter((task) => !task.isDone);
  return unfinishedTasks;
};

export const countUnfinishedTasks = (taskList: TaskData[]) => {
  const unfinishedTasks = filterUnfinishedTasks(taskList);
  return unfinishedTasks.length;
};
