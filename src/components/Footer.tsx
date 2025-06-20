import { Instagram, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-2xl mx-auto lg:max-w-6xl">
          {/* Newsletter Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xl lg:text-2xl font-light mb-6 lg:mb-8 tracking-wide">
              Subscribe To Newsletter
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center max-w-xl mx-auto border-b">
              <div className="flex items-center flex-1 mr-0 sm:mr-4 mb-4 sm:mb-0 w-full sm:w-auto">
                <span>
                  <Mail className="w-5 h-5 mr-2" />
                </span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent outline-none flex-1 py-3 text-white w-full"
                />
              </div>
              <button className="text-white font-light tracking-wide hover:text-gray-300 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row lg:gap-20 mb-12 lg:mb-16 space-y-12 lg:space-y-0">
            {/* Company Info */}
            <div className="lg:flex-shrink-0">
              <img
                src="/logo02.avif"
                alt="logo.png"
                className="w-24 h-12 lg:w-28 lg:h-14 mb-8 lg:mb-12 mx-auto lg:mx-0"
              />
              <div className="space-y-2 text-base lg:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
                <p className="max-w-lg mx-auto lg:mx-0">
                  2nd floor, Rajhans House, opp. Nayara petrol pump, Varachha
                  road, Surat 395006
                </p>
                <p className="mt-4">Mon - Sat from 9:00 AM - 7:00 PM IST</p>
                <p>
                  Email: <span className="text-white">contact@geer.in</span>
                </p>
                <p>
                  Phone: <span className="text-white">+91 9773114418</span>
                </p>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-6 justify-center lg:justify-start">
                <a
                  href="#"
                  className="rounded-full hover:bg-white hover:rounded-full hover:text-black p-1 transition-all duration-300"
                >
                  <span>
                    <Twitter />
                  </span>
                </a>
                <a
                  href="#"
                  className="rounded-full hover:bg-white hover:rounded-full hover:text-black p-1 transition-all duration-300"
                >
                  <span>
                    <Instagram />
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile: Grid layout for sections, Desktop: Flex layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-20 gap-12  flex-1">
              {/* About Section */}
              <div>
                <h4 className="text-lg font-light mb-6 tracking-wide text-center sm:text-left">
                  ABOUT
                </h4>
                <ul className="space-y-3 text-sm text-center sm:text-left">
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        OUR STORY
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        BEYOND CONFLICT FREE
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        CUSTOMER REVIEW
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Policies Section */}
              <div>
                <h4 className="text-lg font-light mb-6 tracking-wide text-center sm:text-left">
                  POLICIES
                </h4>
                <ul className="space-y-3 text-sm text-center sm:text-left">
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        TERMS & CONDITIONS
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        PRIVACY POLICY
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        FAQ
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        RETURN & REFUND
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        SHIPPING POLICY
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Education Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-lg font-light mb-6 tracking-wide text-center sm:text-left">
                  EDUCATION
                </h4>
                <ul className="space-y-3 text-sm text-center sm:text-left">
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        DIAMOND BUYING GUIDE
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        LAB GROWN DIAMONDS
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        RING SIZE CHART
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        JEWELLERY CARE
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                  <li className="group">
                    <div className="relative inline-block">
                      <a href="#" className="block">
                        BLOG
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="border-t border-white p-5 bg-black ">
        <p className="text-lg text-gray-400 ">
          © 2025.
          <span className="text-white ml-2">Geer</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
