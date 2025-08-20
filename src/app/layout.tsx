import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Trio project</title>
      </head>
      <body>
        <header className="flex flex-row w-full justify-between">
          <nav >
            <ul className="flex p-3 ">
              <li><Link href="/">home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/products">Products</Link></li>
            </ul>
          </nav>
          <nav>
            <Link href="/checkout">
              <FaShoppingCart size={20} />
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}