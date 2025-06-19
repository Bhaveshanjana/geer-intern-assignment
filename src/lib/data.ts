import fs from "fs";
import path from "path";
import { Product, CreateProductRequest } from "@/types/product";

const dataFilePath = path.join(process.cwd(), "data", "products.json");

export function getProducts(): Product[] {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading products data:", error);
    return [];
  }
}

export function saveProducts(products: Product[]): void {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error writing products data:", error);
    throw new Error("Failed to save products");
  }
}

export function addProduct(productData: CreateProductRequest): Product {
  const products = getProducts();
  const newProduct: Product = {
    id: Date.now().toString(),
    ...productData,
    createdAt: new Date().toISOString(),
  };

  products.push(newProduct);
  saveProducts(products);
  return newProduct;
}

export function updateProduct(id: string, productData: Product): Product {
  const products = getProducts();
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    throw new Error("Product not found");
  }

  const updatedProduct: Product = {
    ...products[productIndex],
    ...productData,
    id, // Ensure ID doesn't change
    createdAt: products[productIndex].createdAt, // Preserve original creation date
  };

  products[productIndex] = updatedProduct;
  saveProducts(products);
  return updatedProduct;
}

export function deleteProduct(id: string): boolean {
  const products = getProducts();
  const initialLength = products.length;
  const filteredProducts = products.filter((product) => product.id !== id);

  if (filteredProducts.length === initialLength) {
    return false; // Product not found
  }

  saveProducts(filteredProducts);
  return true;
}

export function getProductById(id: string): Product | null {
  const products = getProducts();
  return products.find((product) => product.id === id) || null;
}
