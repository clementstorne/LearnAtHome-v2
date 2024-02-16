import { MISSING_PARAMETER, SERVER_ERROR } from "@/lib/errorMessages";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.pathname.split("/users/")[1];

  if (!userId) {
    return Response.json(
      {
        error: MISSING_PARAMETER,
      },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return Response.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Successfully got user.", user },
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
