import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CART_FILE = path.join(process.cwd(), "src/data/cart.json");

export async function GET() {
    try {
        const file = await fs.readFile(CART_FILE, "utf-8");
        const cart = JSON.parse(file);
        return NextResponse.json({cart});
    } catch(err) {
        return NextResponse.json({error: "Failed to load cart"}, {status: 500});
    }
}

export async function POST(req: Request) {
    try {
        const newItem = await req.json();

        const file = await fs.readFile(CART_FILE, "utf-8");
        const cart = JSON.parse(file);

        cart.push(newItem);

        await fs.writeFile(CART_FILE, JSON.stringify(cart, null, 2));

        return NextResponse.json({cart});
    } catch(err){
        return NextResponse.json({ error: "Faied to add item"}, {status: 500});
    }
}