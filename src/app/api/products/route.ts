import { NextRequest, NextResponse } from "next/server";
import { getProducts, addProduct } from "@/lib/data";
import { CreateProductRequest, ApiResponse, Product } from "@/types/product";

export async function GET() {
  try {
    const products = getProducts();
    const response: ApiResponse<Product[]> = {
      success: true,
      data: products,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to fetch products",
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateProductRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.price || !body.imageUrl) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Name, price, and imageUrl are required",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Validate price is a positive number
    if (typeof body.price !== "number" || body.price <= 0) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Price must be a positive number",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const newProduct = addProduct(body);
    const response: ApiResponse<typeof newProduct> = {
      success: true,
      data: newProduct,
      message: "Product added successfully",
    };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to add product",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
