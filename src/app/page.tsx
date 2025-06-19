import CollectionSection from "@/components/CollectionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ShopByCategorySection from "@/components/ShopByCategorySection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 bg-white ">
        <h1 className="text-center mb-11 mt-9 text-3xl font-bold">
          Shop By Shape
        </h1>
        <div className="flex gap-16 justify-center text-lg text-center items-center overflow-scroll md:overflow-auto">
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/round.webp" alt="logo" />
            <span>Round</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/oval.webp" width={50} alt="logo" />
            <span>Oval</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/cushion.webp" width={50} alt="logo" />
            <span>Cushion</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/emerald.png" width={50} alt="logo" />
            <span>Emerald</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/pear.webp" width={50} alt="logo" />
            <span>Pear</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/heart.webp" width={50} alt="logo" />
            <span>Heart</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/radiant.webp" width={50} alt="logo" />
            <span>Radiant</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/princess.png" width={50} alt="logo" />
            <span>Princess</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/marquise.webp" width={50} alt="logo" />
            <span>Marquise</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
            <img src="/shap/asscher.webp" width={50} alt="logo" />
            <span>Asscher</span>
          </div>
        </div>
      </section>

      {/* ShopbyCategory Section */}
      <ShopByCategorySection />

      {/* Daimond Section*/}
      <div className=" max-w-[1450] mx-auto">
        <img
          src="/banners/Geer_website_banner1-1.webp"
          alt=""
          className="rounded-r-md"
        />
      </div>

      {/* Collection Section*/}
      <CollectionSection />

      {/* Inquery Section */}
      <div className=" max-w-[1450] mx-auto">
        <img src="/Geer_website_banner2.webp" alt="" className="rounded-lg" />
      </div>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}
