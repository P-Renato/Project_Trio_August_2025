import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CART_FILE = path.join(process.cwd(), "src/data/cart.json");

// 🔹 Utility: safely read the file or return empty cart
async function readCartFile() {
  try {
    const file = await fs.readFile(CART_FILE, "utf-8");
    return JSON.parse(file);
  } catch {
    return []; // if file missing or invalid, return empty cart
  }
}

// 🔹 Utility: write the updated cart back to file
async function writeCartFile(cart: any[]) {
  await fs.writeFile(CART_FILE, JSON.stringify(cart, null, 2));
}

// GET - fetch cart
export async function GET() {
  try {
    const cart = await readCartFile();
    return NextResponse.json({ cart });
  } catch {
    return NextResponse.json(
      { error: "Failed to load cart" },
      { status: 500 }
    );
  }
}

// POST - add item
export async function POST(req: Request) {
  try {
    const newItem = await req.json();

    const cart = await readCartFile();
    cart.push(newItem);
    await writeCartFile(cart);

    return NextResponse.json({ success: true, cart });
  } catch {
    return NextResponse.json(
      { error: "Failed to add item" },
      { status: 500 }
    );
  }
}

// DELETE - remove item
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    let cart = await readCartFile();
    cart = cart.filter((item: any) => item.id !== id);

    await writeCartFile(cart);

    return NextResponse.json({ success: true, cart });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
