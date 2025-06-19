import React from "react";
import Image from "next/image";

interface Collection {
  id: string;
  title: string;
  image: string;
  alt: string;
}

interface ExploreCollectionsProps {
  collections?: Collection[];
}

const CollectionSection: React.FC<ExploreCollectionsProps> = ({
  collections = [
    {
      id: "1",
      title: "EVERYDAY ROMANCE",
      image: "/collection/valentine_collection.webp",
      alt: "Everyday Romance Collection",
    },
    {
      id: "2",
      title: "WEDDING SEASON READY",
      image: "/collection/Wedding_colletion.webp",
      alt: "Wedding Season Ready Collection",
    },
    {
      id: "3",
      title: "RINGS - THAT SAY YES!",
      image: "/collection/Men_s_collection.webp",
      alt: "Rings That Say Yes Collection",
    },
    {
      id: "4",
      title: "THE GENTLEMAN'S EDIT",
      image: "/collection/engagement_ring_collection.webp",
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
            <div className="relative w-full aspect-square rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg hover:shadow-xl transform ">
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            {/* Title */}
            <div className="mt-6 text-center transition-colors duration-300 group">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 tracking-widest uppercase leading-relaxed hover:text-gray-600">
                {collection.title}
              </h3>
              <p className=" w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
