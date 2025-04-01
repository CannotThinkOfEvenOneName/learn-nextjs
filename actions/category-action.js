"use server";

import { deleteCategoryService } from "@/service/category-service";
import { revalidateTag } from "next/cache";

export async function deleteCategoryAction(categoryId) {
  const res = await deleteCategoryService(categoryId);
  revalidateTag("category");
  return res;
}
