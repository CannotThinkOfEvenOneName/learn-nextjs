import BreadCrumbDetail from "@/components/breadcrumb/breadcrumb-detail";
import { getProductById } from "@/service/product-service";
import { Image } from "@heroui/react";

export default async function ProductDetailPage({ params }) {
  const productId = (await params).productId;
  const product = await getProductById(productId);

  return (
    <>
    <BreadCrumbDetail categoryName={product.category} productName={product.title} />
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
              />
            </div>
            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">
                {product.category.toUpperCase()}
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  ${product.price}{" "}
                </span>
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: Math.floor(product.rating.rate) }).map(
                  (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )
                )}

                <span className="ml-2 text-gray-600">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
