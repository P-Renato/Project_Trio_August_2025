import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sprint Onlineshop<",
  description: "Shopping cart demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />   
         
          <main  className="flex-1 bg-gray-200 text-gray-600">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
