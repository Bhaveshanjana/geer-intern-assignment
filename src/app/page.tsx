"use client"

import BestSellerSection from "@/components/BestSellerSection";
import CareGuidSection from "@/components/CareGuidSection";
import CollectionSection from "@/components/CollectionSection";
import CustomerSection from "@/components/CustomerSerction";
import EssentialSection from "@/components/EssentialSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturesSection02 from "@/components/FeaturesSection02";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ShapeSection from "@/components/ShapSection";
import ShopByCategorySection from "@/components/ShopByCategorySection";
import ShopByPriceSEction from "@/components/ShopByPriceSection";
import { Product } from "@/types/product";
import { useState } from "react";

export default function Home() {

  return (
    <div className="">
      <HeroSection />

      {/* Features Section */}
      <ShapeSection />

      {/* ShopbyCategory Section */}
      <ShopByCategorySection />

      {/* Daimond Section*/}
      <div className=" md:max-w-[1450] md:mx-auto mx-5">
        <img
          src="/banners/Geer_website_banner1-1.webp"
          alt=""
          className="rounded-r-md"
        />
      </div>

      {/* Collection Section*/}
      <CollectionSection />

      {/* Inquery Section */}
      <div className=" md:max-w-[1450] md:mx-auto mx-5">
        <img
          src="/banners/Geer_website_banner2.webp"
          alt=""
          className="rounded-lg"
        />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Best seller Section */}
      <BestSellerSection />

      {/* features Section 02 */}
      <FeaturesSection02 />

      {/* Shop By Price Section*/}
      <ShopByPriceSEction />

      {/* Essential Section */}
      <EssentialSection />

      {/* Kajal aggarwal  */}
      <div className=" max-w-[1450] mx-auto">
        <img
          src="banners//Geer_website_banner_3.webp"
          alt=""
          className="rounded-lg"
        />
      </div>

      {/* Customer Review Section*/}
      <CustomerSection />

      {/* CareGuid Section*/}
      <CareGuidSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
