import prisma from "@/lib/prisma";
import { cache } from "react";

export const getTasks = cache(async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      tasks: true,
    },
  });

  const taskListIds = user?.tasks.map((item) => item.taskListId);

  const tasks = await prisma.task.findMany({
    where: {
      taskListId: { in: taskListIds },
    },
    select: {
      id: true,
      content: true,
      isDone: true,
    },
    orderBy: [
      {
        isDone: "asc",
      },
    ],
  });
  return tasks;
});

export const getTaskLists = cache(async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      tasks: true,
    },
  });

  if (user) {
    const taskListIds = user.tasks.map((item) => item.taskListId);

    const taskLists = await prisma.user_TaskList.findMany({
      where: {
        taskListId: { in: taskListIds },
      },
      select: {
        userId: true,
        taskListId: true,
      },
    });
    return taskLists;
  } else {
    throw new Error("userId doesn't exists");
  }
});

export const getTasksFromTaskListId = cache(async (taskListId: string) => {
  const tasks = await prisma.task.findMany({
    where: {
      taskListId: taskListId,
    },
    select: {
      id: true,
      content: true,
      isDone: true,
    },
    orderBy: [
      {
        isDone: "asc",
      },
    ],
  });
  return tasks;
});
