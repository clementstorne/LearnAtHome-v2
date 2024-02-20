import { MISSING_PARAMETER, SERVER_ERROR } from "@/lib/errorMessages";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      select: {
        content: true,
        isDone: true,
        ownerId: true,
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

type NewTaskBody = {
  content: string;
  ownerId: string;
};

export async function POST(req: NextRequest) {
  const { content, ownerId }: NewTaskBody = await req.json();

  if (!content || !ownerId) {
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
        ownerId,
      },
      select: {
        content: true,
        isDone: true,
        ownerId: true,
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
