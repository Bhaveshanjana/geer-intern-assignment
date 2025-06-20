import Link from "next/link";

const CareGuidSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ring Size Card */}
        <div className="bg-[#f0f0f0] border border-black rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-between h-24 md:h-fit">
          <div className="p-6">
            <img
              src="/banners/Geer_website_banner_2-1.webp"
              alt=""
              className="h-20 w-20 rounded-full bg-white"
            />
          </div>
          <div className="mr-12 text-center border-b border-black ">
            <span className="text-2xl font-light text-gray-500"></span>
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">
              Find Your Ring Size
            </h3>
            <Link
              href="/ring-size-guide"
              className=" text-blue-600 hover:text-blue-800 font-medium"
            >
              View
            </Link>
          </div>
        </div>

        {/* Jewellery Care Card */}
        <div className="bg-[#f0f0f0] border border-black rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex items-center justify-between h-24 md:h-fit ">
          <div className="p-6">
            <img
              src="/banners/Geer_website_banner_2-2.webp"
              alt=""
              className="h-20 w-20 rounded-full bg-white"
            />
          </div>
          <div className="mr-12 text-center border-b border-black">
            <span className="text-2xl font-light text-gray-500"></span>
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">
              JewelleryCare Guid
            </h3>
            <Link
              href="/ring-size-guide"
              className=" text-blue-600 hover:text-blue-800 font-medium"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuidSection;
