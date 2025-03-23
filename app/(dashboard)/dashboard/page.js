import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.token) {
    return <p>Not login yettttttt!!!!!</p>;
  }
  return <>dashboard page</>;
}
