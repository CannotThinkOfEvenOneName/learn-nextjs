"use client";

import { loginAction } from "@/actions/auth-action";

export default function LoginForm() {
  return (
    <form
      action={loginAction}
      className="rounded-[20px] w-80 p-8 bg-[#310D84]"
      style={{ boxShadow: "-6px 3px 20px 4px #0000007d" }}
    >
      <h1 className="text-white text-3xl font-bold mb-4">Login</h1>
      <div className="space-y-4">
        <input
          name="email"
          type="text"
          placeholder="Email address"
          className="bg-[#8777BA] w-full p-2.5 rounded-md placeholder:text-gray-300 shadow-md shadow-blue-950"
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          className="bg-[#8777BA] w-full p-2.5 rounded-md placeholder:text-gray-300 shadow-md shadow-blue-950"
        />
      </div>
      <div className="mb-4">
        <span className="text-[#228CE0] text-[10px] ml-2 cursor-pointer">
          Forget Password?
        </span>
      </div>
      <div className="flex justify-center mb-4">
        <button
          type="submit"
          className="h-10 w-full cursor-pointer text-white rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] shadow-md shadow-blue-950"
        >
          Sign In
        </button>
      </div>
      <div className="text-gray-300 text-center">
        Don't have an account?
        <span className="text-[#228CE0] cursor-pointer">Sign up</span>
      </div>
    </form>
  );
}
