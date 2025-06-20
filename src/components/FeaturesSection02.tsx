import React from "react";

const FeaturesSection02 = () => {
  return (
    <div>
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-evenly mt-6 sm:mt-9 mb-4 sm:mb-6 overflow-hidden mx-4 sm:mx-6 lg:mx-10 gap-4 sm:gap-2 lg:gap-0">
        <img
          src="/features/Modern_Heirlooms.svg"
          alt="Modern Heirlooms"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
        <img
          src="/features/Ethical_Sourcing.svg"
          alt="Ethical Sourcing"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
        <img
          src="/features/Handcrafted_Excellence.svg"
          alt="Handcrafted Excellence"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
        <img
          src="/features/Affordable_Luxury.svg"
          alt="Affordable Luxury"
          className="w-24 sm:w-24 lg:w-28 flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default FeaturesSection02;
