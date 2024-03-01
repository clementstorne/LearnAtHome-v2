"use client";

import UsersService from "@/app/services/UsersService";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { NewUserBody } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserRoleEnum = z.enum(["tutor", "student"]);
type UserRoleEnum = z.infer<typeof UserRoleEnum>;

const formSchema = z
  .object({
    name: z.string().min(1, {
      message: "Le nom est requis",
    }),
    email: z
      .string()
      .min(1, {
        message: "L'email est requis",
      })
      .email({
        message: "Cet email n'est pas valide",
      }),
    password: z
      .string({
        required_error: "Le mot de passe est requis",
      })
      .min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères",
      })
      .refine(
        (value) => /(?=.*\d)/.test(value),
        "Le mot de passe doit contenir au moins un chiffre"
      )
      .refine(
        (value) => /(?=.*[a-z])/.test(value),
        "Le mot de passe doit contenir au moins une minuscule"
      )
      .refine(
        (value) => /(?=.*[A-Z])/.test(value),
        "Le mot de passe doit contenir au moins une majuscule"
      )
      .refine(
        (value) => /(?=.*[\W|_])/.test(value),
        "Le mot de passe doit contenir au moins un caractère spécial"
      ),
    confirmPassword: z
      .string({
        required_error: "Ce champ est requis",
      })
      .min(8, {
        message: "Le mot de passe doit contenir au moins 8 caractères",
      })
      .refine(
        (value) => /(?=.*\d)/.test(value),
        "Le mot de passe doit contenir au moins un chiffre"
      )
      .refine(
        (value) => /(?=.*[a-z])/.test(value),
        "Le mot de passe doit contenir au moins une minuscule"
      )
      .refine(
        (value) => /(?=.*[A-Z])/.test(value),
        "Le mot de passe doit contenir au moins une majuscule"
      )
      .refine(
        (value) => /(?=.*[\W|_])/.test(value),
        "Le mot de passe doit contenir au moins un caractère spécial"
      ),
    role: UserRoleEnum,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Les mots de passe ne sont pas identiques",
      path: ["confirmPassword"],
    }
  );

const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, email, password, role }: NewUserBody = values;
    try {
      const res = await UsersService.createUser({
        name,
        email,
        password,
        role,
      });
      if (res.status === 201) {
        signIn(undefined, { callbackUrl: "/dashboard" });
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email est déjà utilisé");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-80 w-full mt-8 mx-auto space-y-8 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Nom</FormLabel>
              <FormControl>
                <Input autoComplete="name" {...field} className="w-80" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  {...field}
                  className="w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Mot de passe</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="new-password"
                  {...field}
                  className="w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Confirmer le mot de passe</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="new-password"
                  {...field}
                  className="w-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="ml-2">Rôle</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row justify-around w-80"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="student" />
                    </FormControl>
                    <FormLabel className="font-normal">Élève</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="tutor" />
                    </FormControl>
                    <FormLabel className="font-normal">Tuteur</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {errorMessage && (
          <p className="text-sm font-medium text-red-700 dark:text-red-900 !mt-16">
            {errorMessage}
          </p>
        )}

        <Button type="submit" className="w-60 !m-16">
          S&apos;inscrire
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
