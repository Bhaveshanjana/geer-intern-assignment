"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/product";

const BestSellerSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        setError("Failed to fetch products");
      }
    } catch (error) {
      setError("Error loading products");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(); // Call fetchProducts when the component mounts
  }, []);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Products:", products);
  }, [loading, error, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600  mb-4">{error}</p>
        <button
          onClick={fetchProducts}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    })
      .format(price)
      .replace("₹", "₹ ");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-wide">
          Best Seller
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Scrollable Products Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 px-12 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={product.imageUrl}
                  alt="logo"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Product Name */}
                <h3 className="text-gray-800 font-medium text-base leading-tight line-clamp-2 group-hover:text-gray-600 transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-center gap-3">
                  {/* Original Price */}
                  <span className="text-gray-400 text-sm line-through">
                    1200
                  </span>

                  {/* Discounted Price */}
                  <span className="text-gray-900 font-semibold text-lg">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mt-9">
        <button className="relative overflow-hidden px-12 py-3 bg-white text-black border border-black font-medium group transition-all duration-300 hover:text-white rounded-md">
          <Link href="/products" className="relative z-10">
            See All Items
          </Link>
          <span className="absolute top-0 left-0 w-full h-0 bg-black transition-all duration-300 group-hover:h-full"></span>
        </button>
      </div>
    </div>
  );
};

export default BestSellerSection;
