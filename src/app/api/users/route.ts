import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        name: true,
        email: true,
        role: true,
      },
    });
    return Response.json({ message: "Successfully got all users.", users });
  } catch (error) {
    return Response.json({
      message:
        "The server encountered an unexpected condition that prevented it from fulfilling the request. Please try again later or contact the administrator.",
      error,
    });
  }
}

type NewUserBody = {
  name: string;
  email: string;
  password: string;
  role: "tutor" | "student";
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role }: NewUserBody = await req.json();

    if (!name || !email || !password || !role) {
      return new NextResponse(
        JSON.stringify({
          error:
            "The server could not process the request because a required parameter is missing. Please include all necessary parameters and try again.",
        }),
        { status: 400 }
      );
    }

    const imageUrl = `https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${name}}`;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        imageUrl,
        role,
      },
    });

    return Response.json(
      { message: "Successfully created user.", newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return Response.json({
      message:
        "The server encountered an unexpected condition that prevented it from fulfilling the request. Please try again later or contact the administrator.",
      error,
    });
  }
}
