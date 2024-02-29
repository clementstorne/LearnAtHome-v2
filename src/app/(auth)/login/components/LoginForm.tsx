"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
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
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
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
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl,
        // callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-80 w-full mt-10 mx-auto space-y-8 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2">Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} className="w-80" />
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
                <Input type="password" {...field} className="w-80" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-60 !m-16">
          Se connecter
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
