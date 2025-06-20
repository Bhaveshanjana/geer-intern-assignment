"use client";

import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Our Ring Collection
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover stunning rings and jewelry for every occasion
          </p>
        </div>

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        <div className="mt-8">
          <ProductGrid searchTerm={searchTerm} sortOption={sortOption} />
        </div>
      </div>
    </div>
  );
}
