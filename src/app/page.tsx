import React from 'react'
import Link from 'next/link'
import Image from "next/image";

function page() {
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   <p className="italic text-2xl md:text-4xl mb-8 text-dark backdrop-blur-3xl-600 max-w-3xl mx-auto leading-relaxed font-semibold">
  Curated collection of premium products that enhance your everyday life
</p>


        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Premium
            <span className="block gradient-text bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Lifestyle Products
            </span>
          </h1>

      <div className="flex flex-wrap gap-4 justify-center">
     
      </div>

        <div className="flex flex-wrap gap-4 justify-center">

                <div className=" border-2 flex flex-wrap gap-4 justify-center"><Image
                  src="/shopping.png"
                  alt="picsum photo"
                  width={200}
                  height={200}
                  className="w-screen"
                /></div>
           


           <div className=" border-2 flex flex-wrap gap-4 justify-center"><Image
                  src="/customer4.png"
                  alt="picsum photo"
                  width={200}
                  height={200}
                  className="w-screen"
                /></div>
                  <div className=" border-2 flex flex-wrap gap-4 justify-center"><Image
                  src="/headphone.jpg"
                  alt="picsum photo"
                  width={200}
                  height={200}
                  className="w-screen"
                /></div>
      
      </div>

    </div>
  )
}

export default page