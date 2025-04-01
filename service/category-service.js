import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export async function getAllCategories() {
  const token = await getAuthToken();
  const res = await apiRequest("/api/v1/categories", "GET", null, token, {
    cache: "force-cache",
  });  
  return res;
}
