import { getAllProducts } from "@/service/product-service";
import Link from "next/link";

export default async function DashboardPage() {
  const products = await getAllProducts();
  const allCategory = [...new Set(products.map((item) => item.category))];

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>All Category</h1>

        <div className="grid grid-cols-4 gap-8">
          {allCategory.map((cateogry) => (
            <Link href={`/products?categoryName=${cateogry}`} key={cateogry}>
              <div className="bg-white p-8 rounded-md text-center">
              {cateogry}
              </div>
            
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
