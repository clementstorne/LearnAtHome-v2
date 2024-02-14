import prisma from "@/lib/prisma";
import { cache } from "react";

export const getTasks = cache(async (userId: string) => {
  const tasks = await prisma.task.findMany({
    where: {
      ownerId: userId,
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

export const updateTask = async (id: string) => {
  const updatedTask = await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      isDone: true,
    },
    select: {
      id: true,
      content: true,
      isDone: true,
    },
  });
  return updatedTask;
};
