import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Collection {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface ExploreCollectionsProps {
  collections?: Collection[];
}

const ShopByPriceSEction: React.FC<ExploreCollectionsProps> = ({
  collections = [
    {
      id: "1",
      title: "Under ₹9999",
      image: "/discount/Under_9999.webp",
      alt: "Everyday Romance Collection",
    },
    {
      id: "2",
      title: "Under ₹14999",
      image: "/discount/Under_14999.webp",
      alt: "Wedding Season Ready Collection",
    },
    {
      id: "3",
      title: "Under ₹24999",
      image: "/discount/Under_24999.webp",
      alt: "Rings That Say Yes Collection",
    },
    {
      id: "4",
      title: "Under ₹39999",
      image: "/discount/Under_39999.jpg",
      alt: "The Gentleman's Edit Collection",
    },
  ],
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 tracking-wide">
          Explore Collections
        </h1>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {collections.map((collection, index) => (
          <div key={collection.id} className=" cursor-pointer ">
            {/* Image Container */}
            <div className="relative w-full aspect-square rounded-t-3xl rounded-b-sm overflow-hidden shadow-lg hover:shadow-xl transform ">
              <Link href="/products">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </Link>
            </div>
            {/* Title */}
            <div className="mt-6 text-center transition-colors duration-300 group">
              <Link
                href="/products"
                className="text-sm md:text-base font-semibold text-gray-800 tracking-widest uppercase leading-relaxed hover:text-gray-600"
              >
                {collection.title}
              </Link>
              <p className=" w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByPriceSEction;
