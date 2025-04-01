"use client";

import { signOutAction } from "@/actions/auth-action";
import { useActionState } from "react";

export default function SignOutForm() {
  const [state, formAction, isPending] = useActionState(signOutAction, null);

  return (
    <>
      <form action={formAction}>
        <button
          disabled={isPending}
          type="submit"
          className="h-10 w-full cursor-pointer text-white rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] shadow-md shadow-blue-950"
        >
          {isPending ? "Signing out..." : "Sign out"}
        </button>
      </form>
    </>
  );
}
