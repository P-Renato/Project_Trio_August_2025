
'use client'

import { useEffect, useState } from "react"
import { Product } from "@/types/products"
import Link from "next/link";
import { fetchProducts } from "@/lib/products";
import Image from "next/image";


export default function page() {
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
                                <h3>{p.name}</h3>
                                <p>{p.category}</p>
                                <Image src={p.image[0]} alt={p.name} width={1000} height={250}/>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </main>
    )
}

