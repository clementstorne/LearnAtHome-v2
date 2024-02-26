import { MISSING_PARAMETER, SERVER_ERROR } from "@/lib/errorMessages";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const taskId = req.nextUrl.pathname.split("/tasks/")[1];

  if (!taskId) {
    return Response.json(
      {
        error: MISSING_PARAMETER,
      },
      { status: 400 }
    );
  }

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
      select: {
        content: true,
        isDone: true,
        taskListId: true,
      },
    });

    if (!task) {
      return Response.json(
        {
          error: "Task not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Successfully got task.", task },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: SERVER_ERROR,
        error,
      },
      { status: 500 }
    );
  }
}

type UpdateTaskBody = {
  isDone: boolean;
};

export async function PATCH(req: NextRequest) {
  const taskId = req.nextUrl.pathname.split("/tasks/")[1];

  if (!taskId) {
    return Response.json(
      {
        error: MISSING_PARAMETER,
      },
      { status: 400 }
    );
  }

  try {
    const { isDone }: UpdateTaskBody = await req.json();

    const task = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: { isDone },
      select: {
        content: true,
        isDone: true,
        taskListId: true,
      },
    });

    return Response.json(
      { message: "Successfully updated task.", task },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: SERVER_ERROR,
        error,
      },
      { status: 500 }
    );
  }
}
