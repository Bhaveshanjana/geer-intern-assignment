export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
  createdAt: string;
}

export interface CreateProductRequest {
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";
