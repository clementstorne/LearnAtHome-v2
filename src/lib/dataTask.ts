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
