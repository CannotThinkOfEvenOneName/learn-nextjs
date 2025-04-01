import { apiRequest } from "@/utils/api";
import { redirect } from "next/navigation";

export async function loginService({ email, password }) {
  try {
    const res = await apiRequest("/api/v1/auths/login", "POST", {
      email: email,
      password: password,
    });
    if (!res) {
      redirect("/login");
    }
    return res;
  } catch (e) {}
}
