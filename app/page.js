import { getAllCategories } from "@/service/category";

export default async function Home() {
  const categories = await getAllCategories();
  console.log(categories);

  return <>authorised</>;
}
