"use client";

import { deleteCategoryAction } from "@/actions/category-action";
import { useActionState } from "react";

export default function DeleteCategoryButton({ id }) {
  const [state, formAction, isPending] = useActionState(
    deleteCategoryAction.bind(this, id),
    null
  );

  if (state.status != "OK") {
    alert("Failed to delete");
  }
  return (
    <>
      <form action={formAction}>
        <button
          disabled={isPending}
          type="submit"
          className="h-10 w-full cursor-pointer text-white rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] shadow-md shadow-blue-950"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </form>
    </>
  );
}
