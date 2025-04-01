"use server";

import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

const formLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email format." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export const loginAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const result = formLoginSchema.safeParse({
    email,
    password,
  });

  if (!result.success) {
    return result.error.format();
  }

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect("/");
};

export const signOutAction = async () => {
  await signOut();
};

export const signInWithGoogle = async () => {
  await signIn("google", {
    callbackUrl: "/",
  });
};
