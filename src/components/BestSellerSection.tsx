"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  alt: string;
}

interface BestSellerCarouselProps {
  products?: Product[];
}

const BestSellerSection: React.FC<BestSellerCarouselProps> = ({
  products = [
    {
      id: "1",
      name: "Aurora Dual-Stone Designer Ring",
      image: "/rings/Bangles.webp",
      originalPrice: 60599,
      discountedPrice: 55873,
      alt: "Aurora Dual-Stone Designer Ring",
    },
    {
      id: "2",
      name: "Celestia Bloom Diamond Statement...",
      image: "/rings/Bracelets.webp",
      originalPrice: 40048,
      discountedPrice: 36837,
      alt: "Celestia Bloom Diamond Statement Ring",
    },
    {
      id: "3",
      name: "Aurora Bloom Pear & Marquise Dia...",
      image: "/rings/Earring.webp",
      originalPrice: 53244,
      discountedPrice: 48983,
      alt: "Aurora Bloom Pear & Marquise Diamond Ring",
    },
    {
      id: "4",
      name: "Celestia Luxe Twin-Baguette Diamo...",
      image: "/rings/Necklaces.webp",
      originalPrice: 65617,
      discountedPrice: 60281,
      alt: "Celestia Luxe Twin-Baguette Diamond Ring",
    },
    {
      id: "5",
      name: "Elegant Solitaire Diamond Ring",
      image: "/rings/Pendants.webp",
      originalPrice: 45000,
      discountedPrice: 41250,
      alt: "Elegant Solitaire Diamond Ring",
    },
    {
      id: "6",
      name: "Royal Crown Diamond Ring",
      image: "/rings/images/ring-6.jpg",
      originalPrice: 75000,
      discountedPrice: 68750,
      alt: "Royal Crown Diamond Ring",
    },
  ],
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
            <div
              key={product.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={product.image}
                  alt={product.alt}
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
                    {formatPrice(product.originalPrice)}
                  </span>

                  {/* Discounted Price */}
                  <span className="text-gray-900 font-semibold text-lg">
                    {formatPrice(product.discountedPrice)}
                  </span>
                </div>
              </div>
            </div>
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
