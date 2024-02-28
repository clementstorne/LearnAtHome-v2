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

export const getUserByEmail = cache(async (email: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
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

export const getUserNameAndAvatar = cache(async (id: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      name: true,
      imageUrl: true,
      role: true,
    },
  });
  return user;
});
