import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { FaTruck, FaLock, FaHeadset, FaUndo } from "react-icons/fa";






function page() {


 const features = [
    { icon: FaTruck, title: "Free Delivery", desc: "On orders over $100" },
    { icon: FaLock, title: "Secure Payment", desc: "100% secure checkout" },
    { icon: FaHeadset, title: "24/7 Support", desc: "Dedicated customer service" },
    { icon: FaUndo, title: "Easy Returns", desc: "30-day return policy" },
  ];

  return (

    <div>
      <Image
          src="/watch.jpg"
          alt="picsum photo"
          width={1500}
          height={600}
          className="w-screen "
        />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       
      <p className="italic text-2xl md:text-4xl mb-8 text-dark backdrop-blur-3xl-600 max-w-3xl mx-auto leading-relaxed font-semibold">
        Curated collection of premium products that enhance your everyday life
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Discover Premium
        <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Lifestyle Products
        </span>
      </h1>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <main className="p-8">
      <Link href="/products">
       <button
        className="
          px-6 py-2 
          rounded-lg 
          bg-gradient-to-r from-gray-500 to-black 
          text-white 
          hover:from-gray-600 hover:to-gray-900 
          active:scale-95 
          transition-all duration-200 
          cursor-pointer
        "
      >
          Go to Products
        </button>
      </Link>
    </main>
</div>


      <div className="flex flex-wrap gap-4 justify-center">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>




      


        <div className="flex flex-wrap gap-4 justify-center">

        
    <section className="relative w-full h-[400px]">
      
      <Image
        src="/headphone.jpg" 
        alt="Best selling product"
        fill
        className="object-cover rounded-lg"
        priority
      />

      
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          The Best Selling Product <br /> of This Month
        </h2>
      </div>
    </section>
           


            <section className="relative w-full h-[400px]">
      
      <Image
        src="/customer4.png" 
        alt="Listening to customer feedback"
        
        fill
        className="object-cover rounded-lg"
        priority
      />

      
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          Our Happy customer<br /> of This Month
        </h2>
      </div>
    </section>
                  <div className="  flex flex-wrap gap-4 justify-center"><Image
                  src="/shopping.png"
                  alt="picsum photo"
                  width={200}
                  height={200}
                  className="w-screen"
                />
                </div>
      
      </div>

    </div>
    </div>
  )
}

export default page