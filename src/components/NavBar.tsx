"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white opacity-90 backdrop-blur-xl  shadow-sm border-b border-gray-100  sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-8xl  px-4 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-600  transition-colors"
          >
            <img src="logo.webp" alt="logo.png" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Rings Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => handleDropdownToggle("rings")}
                className="text-black  hover:text-gray-900 transition-colors flex items-center uppercase text-sm "
              >
                RINGS
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "rings" && (
                <div className="absolute left-0 mt-2 w-48 bg-white  rounded-md shadow-lg py-2 z-50 border border-gray-200 ">
                  <Link
                    href="/rings/engagement"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Engagement Rings
                  </Link>
                  <Link
                    href="/rings/wedding"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Wedding Rings
                  </Link>
                  <Link
                    href="/rings/fashion"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Fashion Rings
                  </Link>
                </div>
              )}
            </div>

            {/* Earrings Dropdown */}
            <div className="group relative ">
              <button
                onMouseEnter={() => handleDropdownToggle("earrings")}
                className="text-black hover:text-gray-900  transition-colors  flex items-center uppercase text-sm"
              >
                EARRINGS
                <svg
                  className="w-4 h-4 ml-1 group-hover:-scale-100 transition-all duration-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "earrings" && (
                <div className="absolute left-0 mt-2 w-48 bg-white  rounded-md shadow-lg py-2 z-50 border border-gray-200 ">
                  <Link
                    href="/earrings/studs"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Stud Earrings
                  </Link>
                  <Link
                    href="/earrings/hoops"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Hoop Earrings
                  </Link>
                  <Link
                    href="/earrings/drops"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Drop Earrings
                  </Link>
                </div>
              )}
            </div>

            {/* Necklace Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => handleDropdownToggle("necklace")}
                className="text-black  hover:text-gray-900  transition-colors   flex items-center uppercase text-sm  "
              >
                NECKLACE
                <svg
                  className="w-4 h-4 ml-1 group-hover:-scale-100 transition-all duration-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "necklace" && (
                <div className="absolute left-0 mt-2 w-48 bg-white  rounded-md shadow-lg py-2 z-50 border border-gray-200 ">
                  <Link
                    href="/necklace/chains"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Chains
                  </Link>
                  <Link
                    href="/necklace/pendants"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Pendants
                  </Link>
                  <Link
                    href="/necklace/chokers"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Chokers
                  </Link>
                </div>
              )}
            </div>

            {/* Bracelets and Bangles Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => handleDropdownToggle("bracelets")}
                className="text-black hover:text-gray-900  transition-colors   flex items-center uppercase text-sm  "
              >
                BRACELETS AND BANGLES
                <svg
                  className="w-4 h-4 ml-1 group-hover:-scale-100 transition-all duration-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "bracelets" && (
                <div className="absolute left-0 mt-2 w-52 bg-white  rounded-md shadow-lg py-2 z-50 border border-gray-200 ">
                  <Link
                    href="/bracelets/tennis"
                    className="block px-4 py-2 text-sm text-gray-700 "
                    onClick={closeAllDropdowns}
                  >
                    Tennis Bracelets
                  </Link>
                  <Link
                    href="/bracelets/bangles"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Bangles
                  </Link>
                  <Link
                    href="/bracelets/charm"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Charm Bracelets
                  </Link>
                </div>
              )}
            </div>

            {/* Pendant and Mangalsutra Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => handleDropdownToggle("pendant")}
                className="text-black  hover:text-gray-900  transition-colors   flex items-center uppercase text-sm  "
              >
                PENDANT AND MANGALSUTRA
                <svg
                  className="w-4 h-4 ml-1 group-hover:-scale-100 transition-all duration-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "pendant" && (
                <div className="absolute left-0 mt-2 w-52 bg-white  rounded-md shadow-lg py-2 z-50 border border-gray-200 ">
                  <Link
                    href="/pendant/diamond"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Diamond Pendants
                  </Link>
                  <Link
                    href="/pendant/mangalsutra"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Mangalsutra
                  </Link>
                  <Link
                    href="/pendant/religious"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Religious Pendants
                  </Link>
                </div>
              )}
            </div>

            {/* Other Jewellery Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => handleDropdownToggle("other")}
                className="text-black  hover:text-gray-900  transition-colors   flex items-center uppercase text-sm  "
              >
                OTHER JEWELLERY
                <svg
                  className="w-4 h-4 ml-1 group-hover:-scale-100 transition-all duration-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "other" && (
                <div className="absolute left-0 mt-2 w-48 bg-white  rounded-md shadow-lg py-2 z-50 border border-gray-200 ">
                  <Link
                    href="/other/anklets"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Anklets
                  </Link>
                  <Link
                    href="/other/nose-pins"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Nose Pins
                  </Link>
                  <Link
                    href="/other/toe-rings"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
                    onClick={closeAllDropdowns}
                  >
                    Toe Rings
                  </Link>
                </div>
              )}
            </div>
            {/* Contact */}
            <Link
              href="/contact"
              className="text-black  hover:text-gray-900  transition-colors   uppercase text-sm  "
            >
              CONTACT
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="text-black  hover:text-gray-900  transition-colors   uppercase text-sm  "
            >
              ABOUT
            </Link>
          </div>
          {/* Admin option */}
          <div className=" hidden md:block">
            {/* Admin Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAdminOpen(!isAdminOpen)}
                className="text-gray-600  hover:text-amber-600  transition-colors   flex items-center"
              >
                Admin
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isAdminOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white  rounded-md shadow-lg py-1 z-50 border border-gray-200 ">
                  <Link
                    href="/admin/add-product"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
                    onClick={() => setIsAdminOpen(false)}
                  >
                    Add Ring
                  </Link>
                  <Link
                    href="/admin/manage-products"
                    className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
                    onClick={() => setIsAdminOpen(false)}
                  >
                    Manage Rings
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600  hover:text-gray-900  focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 ">
              <div className="space-y-1">
                <button
                  onClick={() => handleDropdownToggle("mobile-rings")}
                  className="w-full text-left px-3 py-2 text-gray-700  hover:text-gray-900  transition-colors   flex items-center justify-between uppercase text-sm  "
                >
                  RINGS
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === "mobile-rings" && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/rings/engagement"
                      className="block px-3 py-1 text-sm text-gray-600 "
                      onClick={closeAllDropdowns}
                    >
                      Engagement Rings
                    </Link>
                    <Link
                      href="/rings/wedding"
                      className="block px-3 py-1 text-sm text-gray-600 "
                      onClick={closeAllDropdowns}
                    >
                      Wedding Rings
                    </Link>
                    <Link
                      href="/rings/fashion"
                      className="block px-3 py-1 text-sm text-gray-600 "
                      onClick={closeAllDropdowns}
                    >
                      Fashion Rings
                    </Link>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => handleDropdownToggle("mobile-earrings")}
                  className="w-full text-left px-3 py-2 text-gray-700  hover:text-gray-900  transition-colors   flex items-center justify-between uppercase text-sm  "
                >
                  EARRINGS
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === "mobile-earrings" && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/earrings/studs"
                      className="block px-3 py-1 text-sm text-gray-600 "
                      onClick={closeAllDropdowns}
                    >
                      Stud Earrings
                    </Link>
                    <Link
                      href="/earrings/hoops"
                      className="block px-3 py-1 text-sm text-gray-600 "
                      onClick={closeAllDropdowns}
                    >
                      Hoop Earrings
                    </Link>
                    <Link
                      href="/earrings/drops"
                      className="block px-3 py-1 text-sm text-gray-600 "
                      onClick={closeAllDropdowns}
                    >
                      Drop Earrings
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700  hover:text-gray-900  transition-colors   uppercase text-sm  "
                onClick={closeAllDropdowns}
              >
                CONTACT
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700  hover:text-gray-900  transition-colors   uppercase text-sm  "
                onClick={closeAllDropdowns}
              >
                ABOUT
              </Link>
              {/* Admin Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsAdminOpen(!isAdminOpen)}
                  className="w-full text-left px-3  text-gray-700  hover:text-gray-900  transition-colors flex items-center justify-between uppercase text-sm  "
                >
                  Admin
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isAdminOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      href="/admin/add-product"
                      className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
                      onClick={() => setIsAdminOpen(false)}
                    >
                      Add Ring
                    </Link>
                    <Link
                      href="/admin/manage-products"
                      className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 "
                      onClick={() => setIsAdminOpen(false)}
                    >
                      Manage Rings
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
