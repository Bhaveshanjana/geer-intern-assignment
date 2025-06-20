"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ManageProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this ring?")) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Ring deleted successfully!");
        fetchProducts(); // Refresh the list
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(data.error || "Failed to delete ring");
      }
    } catch (error) {
      setMessage("Error deleting ring");
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      const response = await fetch(`/api/products/${editingProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingProduct),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Ring updated successfully!");
        setEditingProduct(null);
        fetchProducts(); // Refresh the list
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(data.error || "Failed to update ring");
      }
    } catch (error) {
      setMessage("Error updating ring");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50  flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 ">Loading rings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50  py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white  rounded-lg shadow-md p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800  mb-2">
                Manage Rings
              </h1>
              <p className="text-gray-600 ">
                Edit or delete rings from your store.
              </p>
            </div>
            <button
              onClick={() => router.push("/admin/add-product")}
              className="w-full sm:w-auto bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium cursor-pointer"
            >
              Add New Ring
            </button>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                message.includes("successfully")
                  ? "bg-green-100  text-green-700  border border-green-200 "
                  : "bg-red-100  text-red-700  border border-red-200 "
              }`}
            >
              {message}
            </div>
          )}

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 ">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                    Ring
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-gray-200 0">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16 relative">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="64px"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 ">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500 ">
                            {product.description?.substring(0, 50)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                      {product.category || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="text-amber-600 hover:text-amber-900  transition-colors p-0.5 px-2 bg-cyan-300 rounded-md cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 hover:text-black  transition-colors p-0.5 px-2 bg-cyan-300 rounded-md cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50  rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-20 w-20 relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900  truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500  mt-1">
                      {product.description?.substring(0, 60)}...
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-bold text-amber-600 ">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 ">
                        {product.category || "N/A"}
                      </span>
                    </div>
                    <div className="mt-3 flex space-x-3">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-amber-600 hover:text-amber-900  transition-colors text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-900  transition-colors text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500  text-lg">No rings found.</p>
              <button
                onClick={() => router.push("/admin/add-product")}
                className="mt-4 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
              >
                Add Your First Ring
              </button>
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white  rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 ">
                Edit Ring
              </h2>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700  mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900 "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700  mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900 "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700  mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={editingProduct.imageUrl}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        imageUrl: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900 "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700  mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={editingProduct.category || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900 "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700  mb-1">
                    Description
                  </label>
                  <textarea
                    value={editingProduct.description || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        description: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300  rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white  text-gray-900 "
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="flex-1 bg-gray-300  text-gray-700  py-2 px-4 rounded-md hover:bg-gray-400  transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
