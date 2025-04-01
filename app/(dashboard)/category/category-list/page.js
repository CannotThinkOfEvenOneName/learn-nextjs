import { getAllCategories } from "@/service/category-service";
import Link from "next/link";

export default async function CategoryListPage() {
  const { payload: categories } = await getAllCategories();
  console.log("categories ", categories);
  return (
    <>
      {categories.length <= 0 && <p>No category!!!</p>}
      {categories.length > 0 && (
        <div>
          {categories.map((category) => (
            <div className="m-4 cursor-pointer" key={category.categoryId}>
				<Link href={`/category/category-list/${category.categoryId}`}>
				{category.name}
				</Link>
            
            </div>
          ))}
        </div>
      )}
    </>
  );
}
