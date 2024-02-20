import { MISSING_PARAMETER, SERVER_ERROR } from "@/lib/errorMessages";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
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

type UpdateUserBody = {
  name?: string;
  email?: string;
  password?: string;
  imageUrl?: string;
};

export async function PATCH(req: NextRequest) {
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
    const { name, email, password, imageUrl }: UpdateUserBody =
      await req.json();

    console.log(name);

    const credentials: Partial<UpdateUserBody> = {};

    if (name !== undefined) {
      credentials.name = name;
    }
    if (email !== undefined) {
      credentials.email = email;
    }
    if (password) {
      const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/g;
      if (!regex.test(password)) {
        Response.json(
          {
            error:
              "The password provided does not meet the required format. Please ensure your password meets the specified criteria and try again.",
          },
          { status: 400 }
        );
      }
      const hash = bcrypt.hashSync(password, 10);
      credentials.password = hash;
    }
    if (imageUrl !== undefined) {
      credentials.imageUrl = imageUrl;
    }

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: credentials,
      select: {
        name: true,
        email: true,
        role: true,
      },
    });

    return Response.json(
      { message: "Successfully updated user.", user },
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

export async function DELETE(req: NextRequest) {
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
    } else {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });

      return Response.json(
        { message: "Successfully deleted user." },
        { status: 200 }
      );
    }
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
