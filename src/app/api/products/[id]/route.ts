import { NextRequest, NextResponse } from "next/server";
import { deleteProduct, getProductById } from "@/lib/data";
import { ApiResponse, Product } from "@/types/product";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Product ID is required",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const deleted = deleteProduct(id);

    if (!deleted) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Product not found",
      };
      return NextResponse.json(response, { status: 404 });
    }

    const response: ApiResponse<null> = {
      success: true,
      message: "Product deleted successfully",
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to delete product",
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body: Product = await request.json();

    if (!id) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Product ID is required",
      };
      return NextResponse.json(response, { status: 400 });
    }

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

    // Check if product exists
    const existingProduct = getProductById(id);
    if (!existingProduct) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Product not found",
      };
      return NextResponse.json(response, { status: 404 });
    }

    // Import the update function
    const { updateProduct } = await import("@/lib/data");
    const updatedProduct = updateProduct(id, body);

    const response: ApiResponse<Product> = {
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse<null> = {
      success: false,
      error: "Failed to update product",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
