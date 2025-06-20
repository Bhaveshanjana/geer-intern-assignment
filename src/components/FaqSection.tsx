"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQComponentProps {
  faqs?: FAQ[];
}

const FaqSection: React.FC<FAQComponentProps> = ({
  faqs = [
    {
      id: "1",
      question: "What types of lab grown diamond Jewellery do you offer?",
      answer:
        "We offer a wide range of lab grown diamond Jewellery, including engagement rings, wedding bands, earrings, necklaces, bracelets, and more. We also offer customization options to create a unique piece that's perfect for you.",
    },
    {
      id: "2",
      question: "How do I care for my lab grown diamond Jewellery?",
      answer:
        "Lab grown diamond Jewellery should be cared for in the same way as natural diamond Jewellery. It should be cleaned regularly using mild soap and water or a Jewellery cleaner, and should be stored in a secure place when not in use.",
    },
    {
      id: "3",
      question:
        "Do you offer customization options for lab grown diamond Jewellery?",
      answer:
        "Yes, we offer a range of customization options for our lab grown diamond Jewellery. Please contact us for more information.",
    },
    {
      id: "4",
      question: "What is your return policy for lab grown diamond Jewellery?",
      answer: "Please refer to our Returns page for more information.",
    },
    {
      id: "5",
      question:
        "Is lab grown diamond Jewellery of the same quality as natural diamond Jewellery?",
      answer:
        "Yes, lab-grown diamond Jewellery is of the same quality as natural diamond Jewellery in terms of its physical and chemical properties. However, because lab grown diamonds are created in a laboratory rather than being mined from the earth, they may be priced differently than natural diamonds.",
    },
    {
      id: "6",
      question:
        "Are there any downsides to buying lab grown diamond Jewellery?",
      answer:
        "Some people may view lab grown diamonds Jewellery as less desirable than natural diamond Jewellery because they lack the same  or symbolic value associated with diamonds that have been mined from the earth. Additionally, some people may prefer the unique imperfections and inclusions found in natural diamonds over the more  appearance of lab-grown diamonds. However, these are largely personal preferences, and there are many benefits to choosing lab-grown diamond Jewellery, including its affordability and environmental friendliness.",
    },
    {
      id: "7",
      question: "What is fine Jewellery?",
      answer:
        "Fine Jewellery, also known as high-end or luxury Jewellery, refers to Jewellery that is made from high-quality materials such as precious metals, gemstones, and diamonds. Fine Jewellery is typically designed and crafted by skilled artisans, and is often sold in high-end Jewellery stores or boutiques.",
    },
    {
      id: "8",
      question: "Can Lab Grown diamond Jewellery be resized or repaired?",
      answer:
        "Yes, Lab Created-diamond Jewellery can be resized or repaired by a professional jeweller. However, it's important to find a jeweller who is experienced in working with diamonds to ensure that they are handled properly.",
    },
  ],
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full mx-auto px-2 py-3 md:px-16 md:py-12">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-0 p-2 md:p-6 border-b">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border-b border-gray-200  last:border-b-0"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
            >
              {/* Question Text */}
              <span className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed pr-4">
                {faq.question}
              </span>

              {/* Plus/Minus Icon */}
              <div className="flex-shrink-0 ml-4">
                {openItems.has(faq.id) ? (
                  <Minus className="w-6 h-6 text-gray-600" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-600" />
                )}
              </div>
            </button>

            {/* Answer Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(faq.id)
                  ? "max-h-96 opacity-100 pb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-600 text-base md:text-lg leading-relaxed ">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
