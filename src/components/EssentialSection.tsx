import React from "react";
import Image from "next/image";

interface Essential {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

interface EssentialsForYouProps {
  essentials?: Essential[];
}

const EssentialSection: React.FC<EssentialsForYouProps> = ({
  essentials = [
    {
      id: "1",
      image: "/Essentials/Traditional_Wear.webp",
      alt: "Traditional Wear Jewelry",
    },
    {
      id: "2",
      image: "/Essentials/Office_Wear.webp",
      alt: "Office Wear Jewelry",
    },
    {
      id: "3",
      image: "/Essentials/Party_Wear.webp",
      alt: "Party Wear Jewelry",
    },
    {
      id: "4",
      image: "/Essentials/Everyday_Wear.webp",
      alt: "Everyday Wear Jewelry",
    },
  ],
}) => {
  return (
    <div className="w-full max-w-[1380px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-3xl font-bold text-gray-900 tracking-wide">
          Essentials for You
        </h1>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {essentials.map((essential) => (
          <div
            key={essential.id}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Card Container */}
            <div className="relative w-full h-64 md:h-72 lg:h-75 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              {/* Background Image */}
              <Image
                src={essential.image}
                alt={essential.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialSection;
