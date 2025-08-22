
"use client";

import { Product } from "@/types/products";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Geist } from 'next/font/google';
import productStyle from './product.module.css'
 
const geist = Geist({
  subsets: ['latin'],
  weight: '600',
  
})

function ProductDetails() {
  const { pid } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    if (!pid) return;
    fetchProductById(pid as string)
      .then(setProduct)
      .catch((err)=> console.error(err))
  }, [pid]);

  console.log(product)

  return (
    <div>
        
      {product ? (
        <div className="flex flex-row">
          
          <nav className={`${productStyle.image_container}` }>
            <ul className="flex flex-wrap *:m-2 ">
              {product.image.map((img, i) => (
                <li key={i} className="w-xs">
                  <Image src={img} alt={`${product.name} ${i}` } width={400} height={200}/>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="m-6 p-6 *:m-3 border border-white h-[12em] bg-gray-300">
            <h2 className={geist.className}>{product.name}</h2>
            <p>{product.category}</p>
            <p>&euro;{product.price.toFixed(2)}</p>
            <button className={`${productStyle.add_to_cart_button}`} onClick={()=>dispatch({type: 'ADD_TO_CART', payload:product})}>Add to Cart</button>
          </nav>

        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}

export default ProductDetails;
