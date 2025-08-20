
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>sprint onlineshop</title>
      </head>
      <body className="flex flex-col h-screen">
        <header className="py-4 px-6 md:px-12 bg-gray-50 text-gray-600 flex justify-between">
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
              {/* <li className="hover:text-orange-600 cursor-pointer">
                <Link href="/checkout">Checkout</Link>
              </li> */}
            </ul>
          </nav>
          <nav>
            <Link href="/checkout">
              <FaShoppingCart size={20} />
            </Link>
          </nav>
        </header>
        <Image
          src="/watch.jpg"
          alt="picsum photo"
          width={1500}
          height={600}
          className="w-screen"
        />
        <main className="flex-1 bg-gray-200 text-gray-600">{children}</main>
        <footer className="py-8 px-6 md:px-12 bg-gray-50 text-gray-600">
          <p className="text-sm">
            Contact Us by dialling 123123{" "}
            <span className="underline decoration-dotted">email sprint@yahoo.com</span>
          </p>
        </footer>
      </body>
    </html>
  );

}