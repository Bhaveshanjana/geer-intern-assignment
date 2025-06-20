"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryItem {
  id: string;
  image: string;
  title: string;
  href: string;
  alt: string;
  description: string;
}

const categories: CategoryItem[] = [
  {
    id: "rings",
    title: "rings",
    image: "/rings/Rings.webp",
    href: "/rings",
    alt: "Diamond rings collection",
    description:
      "Exquisite lab-grown diamond rings, offering elegance for every occasion from solitaires to cocktail style.",
  },
  {
    id: "earrings",
    title: "EARRINGS",
    image: "/rings/Earring.webp",
    href: "/earrings",
    alt: "Diamond earrings collection",
    description:
      "Exquisite lab-grown diamond earring, offering elegance for every occasion rom studs to dangles style.",
  },
  {
    id: "pendants",
    title: "pendants",
    image: "/rings/Pendants.webp",
    href: "/pendants",
    alt: "Diamond pendants collection",
    description:
      "Exquisite lab-grown diamond pendants that perfectly complement your unique sense and style.",
  },
  {
    id: "bracelets",
    title: "bracelets",
    image: "/rings/Bracelets.webp",
    href: "/bracelets",
    alt: "Diamond bracelets collection",
    description:
      "Graceful lab-grown diamond bracelets, blending traditional charm with modern elegance, crafted to shine.",
  },
  {
    id: "bangles",
    title: "bangles",
    image: "/rings/Bangles.webp",
    href: "/bangles",
    alt: "Diamond bangles collection",
    description:
      "Graceful lab-grown diamond bangles, blending traditional charm with modern elegance, crafted to shine.",
  },
  {
    id: "necklaces",
    title: "necklaces",
    image: "/rings/Necklaces.webp",
    href: "/necklaces",
    alt: "Diamond necklaces collection",
    description:
      "Beautifully crafted lab-grown diamond necklaces that make a bold statement of sophistication and style.",
  },
];

interface JewelryCategoriesProps {
  className?: string;
}

export default function ShopByCategorySection({
  className = "",
}: JewelryCategoriesProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className={`py-8 md:py-12 lg:py-9 ${className}`}>
      <div className="max-w-[1400] mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Shop By Category
        </h1>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-1 md:gap-0.5">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden bg-gray-100 aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/8] block"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 ">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover rounded-sm"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16.66vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

              {/* Hover Content Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* Blurred Background */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h1 className="text-gray-800 text-sm md:text-base leading-relaxed w-48 bg-white/30 h-full flex flex-col justify-center items-center">
                    <p className="uppercase text-xl">{category.title} </p>
                    <p className=" w-36 mt-7 font-semibold">
                      {category.description}
                    </p>
                  </h1>
                </div>
              </div>

              {/* Mobile Touch Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
