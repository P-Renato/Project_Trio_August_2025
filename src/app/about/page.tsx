import React from 'react'
import Image from "next/image";

function page() {
  return (
    <div>
      about page

           <h2 className="text-4xl font-bold mb-6">Our Story</h2>

 <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  EliteStore was born from a simple belief: everyone deserves access to products 
                  that are both beautiful and functional. Our founders, frustrated by the compromise 
                  between quality and affordability in the market, set out to create a different kind 
                  of shopping experience.
                </p>
                <p>
                  What started as a small collection of handpicked items has grown into a curated 
                  marketplace featuring products from independent makers and established brands who 
                  share our commitment to excellence.
                </p>
                <p>
                  Today, we're proud to serve customers around the world, but our mission remains 
                  unchanged: to bring you products that truly enhance your life, backed by 
                  exceptional service and care.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At EliteStore, our mission is to empower you with products that inspire and
                  elevate your everyday experiences. We believe in the power of thoughtful design and 
                  quality craftsmanship, and we strive to bring you items that reflect these values.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to sustainability, ethical sourcing, and supporting the artisans 
                  and makers who pour their heart into every creation. Our goal is to create a 
                  shopping experience that not only meets your needs but also aligns with your values.
                </p>

              </div>

              <div className="mt-8"  >
                <h2 className="text-4xl font-bold mb-6">Happy customers</h2>

<Image
          src="/customer1.png"
          alt="picsum photo"
          width={50}
          height={50}
          className="w-40 h-40 rounded-full object-cover mb-4"
        />
                 
               
               <Image
          src="/customer2.png"
          alt="picsum photo"
          width={50}
          height={50}
          className="w-40 h-40 rounded-full object-cover mb-4"
        />

        <Image
          src="/customer3.png"
          alt="picsum photo"
          width={50}
          height={50}
          className="w-40 h-40 rounded-full object-cover mb-4"
        />
        <Image
          src="/customer4.png"
          alt="picsum photo"
          width={50}
          height={50}
          className="w-40 h-40 rounded-full object-cover mb-4"
        />



              </div>
    </div>

    
  )
}

export default page
