"use client";

import { signInWithGoogle } from "@/actions/auth-action";
import { useActionState } from "react";

export default function LoginGoogleForm() {
  const [state, formAction, isPending] = useActionState(signInWithGoogle, null);

  return (
    <>
      <form action={formAction}>
        <button className="w-full cursor-pointer text-center py-2 my-3 border flex items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-5 h-5 mr-2"
            alt="Google Icon"
          />
          <span className="dark:text-gray-300">Login with Google</span>
        </button>
      </form>
    </>
  );
}
