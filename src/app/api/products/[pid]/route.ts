import { NextResponse } from "next/server";
import { Product } from "@/types/products";


// GET /api/products
export async function GET(request: Request, {params}: {params: {pid: string}}) {
    const { pid } = params;
    const API_URL = `https://all-apis.com/products/${pid}`;

  try {
    const res = await fetch(API_URL, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const product = await res.json();

    return NextResponse.json({product});
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}
