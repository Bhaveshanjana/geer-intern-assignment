"use client";

import { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  searchTerm?: string;
  sortOption?: string;
}

export default function ProductGrid({
  searchTerm = "",
  sortOption = "name",
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        setError("Failed to fetch products");
      }
    } catch (error) {
      setError("Error loading products");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          (product.description &&
            product.description.toLowerCase().includes(searchLower)) ||
          (product.category &&
            product.category.toLowerCase().includes(searchLower))
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      case "price":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "date":
        return [...filtered].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      default:
        return filtered;
    }
  }, [products, searchTerm, sortOption]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
        <button
          onClick={fetchProducts}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (filteredAndSortedProducts.length === 0) {
    if (searchTerm) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            No rings found matching "{searchTerm}".
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search terms or browse all rings.
          </p>
        </div>
      );
    }
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">No rings found.</p>
        <p className="text-gray-500 dark:text-gray-400">
          Try adding some rings to see them here.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 py-4">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
