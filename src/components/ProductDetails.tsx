"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800  mb-2">
              {product.name}
            </h1>
            {product.category && (
              <p className="text-amber-600  font-medium">{product.category}</p>
            )}
          </div>

          <div className="text-4xl font-bold text-amber-600 ">
            ${product.price.toFixed(2)}
          </div>

          {product.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800  mb-2">
                Description
              </h3>
              <p className="text-gray-600  leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          <div className="pt-6">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
