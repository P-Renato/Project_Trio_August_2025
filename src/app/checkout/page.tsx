'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import ProductDetails from "../products/[pid]/page";


export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
    const { dispatch } = useCart();

  // Fetch cart on load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/cart")
        const data = await res.json()
        setCart(data.cart || [])
      } catch (err) {
        console.error("Error loading cart:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchCart()
  }, [])

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  // Confirm checkout (clear cart.json)
  const handleCheckout = async () => {
    try {
      await fetch("/api/cart", {
        method: "PUT", // clear the cart
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([]),
      })
      alert("✅ Order placed successfully!")
      router.push("/") // or /checkout/success
    } catch (err) {
      console.error("Checkout failed:", err)
      alert("❌ Something went wrong")
    }
  }

  if (loading) return <p>Loading cart...</p>

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, i) => (
              <li key={i} className="border p-2 mb-2">
                <div className="flex justify-between">
                  <span>
                    <span>{item.name} × {item.quantity || 1}</span>
                    <span className="ml-3">€{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                  </span>
                  <span><button onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload: item.id})}>Remove Item</button></span>
                </div>
              </li>
            ))}
          </ul>

          <p className="font-semibold mb-4">
            Total: €{total.toFixed(2)}
          </p>

          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Confirm Checkout
          </button>
        </>
      )}
    </main>
  )
}
