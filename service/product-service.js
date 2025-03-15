import { BASE_API_URL } from "@/constants/base-url";

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/products`);
    const products = await res.json();
    return products;
  } catch (err) {
    console.error(err);
  }
};

export const getProductById = async (productId) => {
  try {
    const res = await fetch(`${BASE_API_URL}/products/${productId}`);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
