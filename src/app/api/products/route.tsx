import { NextResponse } from "next/server";

const API_URL = "https://all-apis.com/products";

// GET /api/products
export async function GET() {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const products = await res.json();

    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}
