import Link from "next/link";

export default function CategoryLayout ({children}) {
	return (
		<>
		<Link href={"/category/category-list"}>All Category</Link>
		{children}
		</>
	)
}