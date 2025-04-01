import DeleteCategoryButton from "@/components/button/delete-category-button";

export default async function CategoryDetailPage({ params }) {
  const categoryId = (await params).categoryId;
  return (
    <>
      <DeleteCategoryButton id={categoryId} />
    </>
  );
}
