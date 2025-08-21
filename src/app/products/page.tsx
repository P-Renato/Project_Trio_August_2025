'use client'

import { useEffect, useState } from "react"
import { Product } from "@/types/products"
import Link from "next/link"
import { fetchProducts } from "@/lib/products"
import Image from "next/image"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
})

export default function Page() {
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    loadMore()
  }, [])

  const loadMore = async () => {
    setLoading(true)
    try {
      const allProducts = await fetchProducts()
      const start = (page - 1) * 3
      const end = page * 3
      const newProducts = allProducts.slice(start, end)
      setProducts(prev => [...prev, ...newProducts])
      setPage(prev => prev + 1)
      if (newProducts.length === 0) setHasMore(false)
    } catch (err) {
      console.error("Error fetching products: ", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col justify-center items-center *:p-3">
      <h1 className={`${roboto.className} `}>Products</h1>
      <nav>
        <ul className="flex flex-wrap w-full">
          {products.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id}>
              <li className="border gap-1.5 m-3 p-4">
                <h3>{p.name}</h3>
                <p>{p.category}</p>
                <Image src={p.image[0]} alt={p.name} width={400} height={200} />
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </main>
  )
}
