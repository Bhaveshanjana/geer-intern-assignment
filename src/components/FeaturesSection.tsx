import React from "react";

const FeaturesSection = () => {
  return (
    <div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-evenly mt-12 sm:mt-9 mb-4 sm:mb-6 overflow-hidden mx-4 sm:mx-6 lg:mx-10 gap-4 sm:gap-2 lg:gap-0">
        <img
          src="/features/Free_14_Days_Return.svg"
          alt="Modern Heirlooms"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
        <img
          src="/features/Free_Shipping_Both_Ways.svg"
          alt="Ethical Sourcing"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
        <img
          src="/features/Assured_Buy_Back.svg"
          alt="Handcrafted Excellence"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
        <img
          src="/features/Certified_Jewellery.svg"
          alt="Affordable Luxury"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
