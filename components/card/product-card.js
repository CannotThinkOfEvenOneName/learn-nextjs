import { Card, CardFooter, Image } from "@heroui/react";
import Link from "next/link";

export default function ProductCard(product) {
  return (
    <Card
      key={product.id}
      isFooterBlurred
      className="w-full h-[300px]"
      classNames={{
        base: "rounded-md",
        footer: "rounded-md",
      }}
    >
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={product.image}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between gap-4">
        <div>
          <p className="text-black text-tiny line-clamp-1">{product.title}</p>
          <p className="text-black text-tiny">${product.price}</p>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="text-tiny text-white bg-primary p-2 rounded-md"
        >
          Detail
        </Link>
      </CardFooter>
    </Card>
  );
}
