"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItemLink(item) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 ${
        item.href === pathname ? "bg-gray-300" : "bg-none"
      }`}
      href={item.href}
    >
      {item.icon}
      <span className="ml-2 text-sm font-medium">{item.label}</span>
    </Link>
  );
}
