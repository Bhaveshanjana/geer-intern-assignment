"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: string;
  name: string;
  review: string;
  initials: string;
}

interface CustomerReviewsProps {
  reviews?: Review[];
}

const CustomerSection: React.FC<CustomerReviewsProps> = ({
  reviews = [
    {
      id: "1",
      name: "Nimrit Shetty",
      review:
        "Wedding collection is something that I fell head over heels for. As a bride I was looking for green diamonds and also in my budget range. And to my surprise, maximum shopping happened with their video chat support. Their team is very...",
    },
    {
      id: "2",
      name: "Aditi Reddy",
      review:
        "My sister lives in Mumbai and I am in Bangalore. This Rakshabandhan I wanted to surprise her with a gift and Geer.in became a blessing. I found the best diamond necklace for her in my budget. And the best part was that their packaging made it look like a personal gift for her.",
    },
    {
      id: "3",
      name: "Priya Sharma",
      review:
        "Amazing quality jewelry and excellent customer service. The delivery was super fast and the packaging was premium. I ordered earrings for my wedding and they exceeded my expectations. Will definitely recommend to friends and family.",
    },
    {
      id: "4",
      name: "Rajesh Kumar",
      review:
        "Bought an engagement ring from here and the experience was fantastic. The video consultation helped me choose the perfect diamond. The ring quality is outstanding and my fiancée absolutely loves it. Great value for money!",
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
          Customer Reviews
        </h1>
      </div>

      {/* Reviews Container */}
      <div className="relative">
        {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
        <button
          onClick={goToPrevious}
          className="hidden sm:block absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="hidden sm:block absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
          aria-label="Next review"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
        </button>

        {/* Reviews Slider */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={review.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 lg:space-x-12">
                  {/* Dark Review Card */}
                  <div className="order-2 lg:order-1">
                    <div className="bg-black text-white p-6 sm:p-8 lg:p-7 rounded-2xl sm:rounded-3xl">
                      {/* Avatar */}
                      <div className="mb-4 sm:mb-6">
                        <img
                          src="/logo/logo02.webp"
                          alt=""
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full text-black font-bold text-xl"
                        />
                      </div>
                      <div className="flex flex-col">
                        {/* Review Text */}
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-100">
                          {review.review}
                        </p>
                        {/* Reviewer Name */}
                        <p className="text-lg sm:text-xl font-semibold text-white">
                          {review.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Light Review Card */}
                  <div className="order-1 lg:order-2 bg-gray-50 text-gray-800 p-6 sm:p-8 lg:p-12 flex flex-col justify-center rounded-2xl sm:rounded-3xl relative">
                    {/* Large Quote Mark */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-4xl sm:text-5xl lg:text-6xl text-gray-300 font-serif leading-none">
                      "
                    </div>

                    {/* Review Text */}
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-700 relative z-10">
                      {reviews[(currentIndex + 1) % reviews.length].review}
                    </p>

                    {/* Reviewer Name */}
                    <p className="text-lg sm:text-xl font-semibold text-gray-900 relative z-10">
                      {reviews[(currentIndex + 1) % reviews.length].name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex sm:hidden justify-center mt-6 space-x-4">
          <button
            onClick={goToPrevious}
            className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 w-6 sm:w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
