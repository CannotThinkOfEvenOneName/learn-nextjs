"use client";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useRouter } from "next/navigation";
export default function SelectCategory({ allCategory }) {
  const categories = allCategory.map((category) => ({
    label: category,
    key: category,
    description: `This is ${category} category`,
  }));

  const router = useRouter();

  return (
    <>
      <Autocomplete
        className="max-w-xs"
        defaultItems={categories}
        defaultSelectedKey="cat"
        label="Filter product by category"
        placeholder="Search For category"
        scrollShadowProps={{
          isEnabled: false,
        }}
        onInputChange={(value) =>
          router.replace(`/products?categoryName=${value}`)
        }
      >
        {(item) => (
          <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </>
  );
}
