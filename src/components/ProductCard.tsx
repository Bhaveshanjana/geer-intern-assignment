"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col items-center">
          <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1 truncate w-full text-center">
            {product.name}
          </h3>
          <p className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-0 text-center">
            ${product.price.toFixed(2)}
          </p>
          <span className="mt-2 text-sm text-amber-700 dark:text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 underline cursor-pointer">
            View Details
          </span>
        </div>
      </Link>
    </div>
  );
}
