'use client'

import { useEffect, useState } from "react"
import { Product } from "@/types/products"
import Link from "next/link";
import { fetchProducts } from "@/lib/products";


export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
        fetchProducts()
            .then(setProducts)
            .catch((err) => console.error("Error fetching products: ", err));
    }, []);
    if(!products) return <p>Loading... </p>
    console.log(products)

    return (
        <main>
            <h1>Products</h1>
            <nav>
                <ul>
                    {products.map((p) => (
                        <Link 
                        href={`/products/${p.id}`}
                        key={p.id}
                        >
                        
                            <li key={p.id}>
                                {p.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </main>
    )
}
