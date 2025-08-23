import { Product, StoredUser } from "@/types/products";


// Here is the fectching from all the products
export async function fetchProducts(): Promise<Product[]> {
    const res = await fetch('/api/products', { cache: "no-store"});
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products;
}


// Here is the fetching from a single product
export async function fetchProductById(id: string | number): Promise<Product> {
    const res = await fetch(`/api/products/${id}`, {cache: "no-store"});
    if(!res.ok) throw new Error('Failed to fetch product');
    const data = await res.json();
    return data.product;
}

