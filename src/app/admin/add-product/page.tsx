"use client";

import AddProductForm from "@/components/AddProductForm";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();

  // When a product is added, refresh the products page
  const handleProductAdded = () => {
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-lg">
        <AddProductForm onProductAdded={handleProductAdded} />
      </div>
    </div>
  );
}
