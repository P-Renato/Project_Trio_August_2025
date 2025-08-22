"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { HiUser } from "react-icons/hi2";

export default function Header() {
  const { state } = useCart();

  return (
    <header  className="py-4 px-6 md:px-12 bg-gray-50 text-gray-600 flex justify-between">
        <span className="font-bold"> Sprint online shop</span>
      <nav>
        <ul className="flex gap-4">
         <li className="hover:text-orange-600 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                <Link href="/products">Products</Link>
              </li>
        </ul>
      </nav>
      <nav className="flex items-center gap-2">
        <Link href="/login">
         <HiUser />
        </Link>
        <Link href="/checkout" className="flex items-center gap-1">
          <FaShoppingCart size={20} />
          <span>{state.cart.length}</span> 
        </Link>
      </nav>
    </header>
  );
}
