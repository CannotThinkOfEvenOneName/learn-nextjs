import ProductCard from "@/components/card/product-card";
import SelectCategory from "@/components/select/select-category";
import { getAllProducts } from "@/service/product-service";
export default async function ProductPage({ searchParams }) {
  const allProducts = await getAllProducts();
  const allCategory = [...new Set(allProducts.map((item) => item.category))];

  const categoryName = (await searchParams).categoryName;
  const products = allProducts.filter(
    (product) => product.category === categoryName
  );

  return (
    <>
      <div className="flex items-center justify-between">
        <h1>{!categoryName ? "All Products" : categoryName}</h1>
        <SelectCategory allCategory={allCategory}/>
      </div>

      <div className="w-full grid grid-cols-4 gap-8">
        {!categoryName ? (
          allProducts.lenght <= 0 ? (
            <p>No Proudct</p>
          ) : (
            allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          )
        ) : products.lenght <= 0 ? (
          <p>No Proudct</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </>
  );
}
