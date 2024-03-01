import {
  EMAIL_ALREADY_USED,
  MISSING_PARAMETER,
  SERVER_ERROR,
} from "@/lib/errorMessages";
import prisma from "@/lib/prisma";
import { NewUserBody } from "@/types";
import bcrypt from "bcrypt";
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
      message: SERVER_ERROR,
      error,
    });
  }
}

export async function POST(req: NextRequest) {
  const { name, email, password, role }: NewUserBody = await req.json();

  if (!name || !email || !password || !role) {
    return new NextResponse(
      JSON.stringify({
        error: MISSING_PARAMETER,
        message: "c'est ici",
      }),
      { status: 400 }
    );
  }

  try {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      return new NextResponse(
        JSON.stringify({
          error: EMAIL_ALREADY_USED,
        }),
        { status: 409 }
      );
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const nameForAvatar = name.split(" ").join("");
    const imageUrl = `https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${nameForAvatar}}`;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        imageUrl,
        role,
      },
      select: {
        name: true,
        email: true,
        imageUrl: true,
        role: true,
      },
    });

    return Response.json(
      { message: "Successfully created user.", newUser },
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
