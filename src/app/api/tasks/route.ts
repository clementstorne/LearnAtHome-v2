import { MISSING_PARAMETER, SERVER_ERROR } from "@/lib/errorMessages";
import prisma from "@/lib/prisma";
import { NewTaskBody } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      select: {
        content: true,
        isDone: true,
        taskListId: true,
      },
    });
    return Response.json({ message: "Successfully got all tasks.", tasks });
  } catch (error) {
    return Response.json({
      message: SERVER_ERROR,
      error,
    });
  }
}

export async function POST(req: NextRequest) {
  const { content, taskListId }: NewTaskBody = await req.json();

  if (!content || !taskListId) {
    return new NextResponse(
      JSON.stringify({
        error: MISSING_PARAMETER,
      }),
      { status: 400 }
    );
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        content,
        isDone: false,
        taskListId,
      },
      select: {
        content: true,
        isDone: true,
        taskListId: true,
      },
    });

    return Response.json(
      { message: "Successfully created task.", newTask },
      { status: 201 }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return Response.json({
      message: SERVER_ERROR,
      error,
    });
  }
}
