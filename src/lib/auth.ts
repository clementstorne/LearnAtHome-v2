import prisma from "@/lib/prisma";
import { UserDB } from "@/types";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user: UserDB | null = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            imageUrl: user.imageUrl,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          imageUrl: user.imageUrl,
          role: user.role,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      delete session.user.image;
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          imageUrl: token.imageUrl,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
