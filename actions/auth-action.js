"use server";

import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const loginAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

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
