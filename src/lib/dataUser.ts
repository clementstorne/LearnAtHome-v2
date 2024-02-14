import prisma from "@/lib/prisma";
import { cache } from "react";

export const getUser = cache(async (id: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      role: true,
    },
  });
  return user;
});