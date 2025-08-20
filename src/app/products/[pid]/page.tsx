
"use client";

import { Product } from "@/types/products";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/products";
import { useCart } from "@/context/CartContext";

function ProductDetails() {
  const { pid } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    if (!pid) return;
    fetchProductById(pid as string)
      .then(setProduct)
      .catch((err) => console.error(err));
  }, [pid]);

  console.log(product)

  return (
    <div>
        
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>&euro;{product.price.toFixed(2)}</p>
          <ul className="flex flex-wrap">
            {product.image.map((img, i) => (
              <li key={i} className="w-xs">
                <img src={img} alt={`${product.name} ${i}`} />
              </li>
            ))}
          </ul>
          <button onClick={()=>dispatch({type: 'ADD_TO_CART', payload:product})}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}

export default ProductDetails;
