import React from 'react'
import Image from "next/image";

function page() {
  return (
    <div>
     


    <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-6 shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-600">
          We aim to provide the best quality products for our customers worldwide.
        </p>
        <p className="text-gray-600">
                  EliteStore was born from a simple belief: everyone deserves access to products 
                  that are both beautiful and functional. Our founders, frustrated by the compromise 
                  between quality and affordability in the market, set out to create a different kind 
                  of shopping experience.
                </p>
                <br />

               
                
      </div>

      <div className="border rounded-lg p-6 shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-600">
          Building a sustainable business that enhances everyday lifestyle.
        </p>

         <p className="text-muted-foreground leading-relaxed">
                  We are committed to sustainability, ethical sourcing, and supporting the artisans 
                  and makers who pour their heart into every creation. 
                  Our goal is to create a 
                  shopping experience that not only meets your needs but also aligns with your values.
                </p>
      </div>

      <div className="border rounded-lg p-6 shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Our Team</h3>
        <p className="text-gray-600">
          A passionate group of designers and developers committed to excellence.
        </p>
           <p>
                  What started as a small collection of handpicked items has grown into a curated 
                  marketplace featuring products from independent makers and established brands who 
                  share our commitment to excellence.
                </p>
        
      </div>

      <div className="border rounded-lg p-6 shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Our Values</h3>
        <p className="text-gray-600">
          Integrity, innovation, and customer satisfaction are our priorities.
        </p>

         <p className="text-muted-foreground leading-relaxed">
                  We are committed to sustainability, ethical sourcing, and supporting the artisans 
                  and makers who pour their heart into every creation. Our goal is to create a 
                  shopping experience that not only meets your needs but also aligns with your values.
                </p>
      </div>
    </section>





     <div className="max-w-md mx-auto border rounded-lg p-6 shadow-md bg-white text-center">

      <h3 className="text-xl font-semibold mb-2">Happy customer </h3>
   
      <Image
        src="/customer1.png"
        alt="Customer photo"
        width={160}
        height={160}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

 
      

      <h3>Johanna blake</h3>

  
      <p className="text-gray-600 leading-relaxed">
        “These products are amazing, I love the quality and the design.
        I highly recommend this store to everyone looking for unique and
        high-quality items. The customer service is also top-notch — always
        ready to help and answer any questions. Overall, a fantastic shopping
        experience!”
      </p>

      <br />

         <Image
        src="/customer4.png"
        alt="Customer photo"
        width={160}
        height={160}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

   
      

      <h3>Jemes bake</h3>

    
      <p className="text-gray-600 leading-relaxed">
        “These products are amazing, I love the quality and the design.
        I highly recommend this store to everyone looking for unique and
        high-quality items. The customer service is also top-notch — always
        ready to help and answer any questions. Overall, a fantastic shopping
        experience!”
      </p>

      <br />

         <Image
        src="/customer2.png"
        alt="Customer photo"
        width={160}
        height={160}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

      

      <h3>Jossie bake</h3>

   
      <p className="text-gray-600 leading-relaxed">
        “These products are amazing, I love the quality and the design.
        I highly recommend this store to everyone looking for unique and
        high-quality items. The customer service is also top-notch — always
        ready to help and answer any questions. Overall, a fantastic shopping
        experience!”
      </p>


      <br />
         <Image
        src="/customer3.png"
        alt="Customer photo"
        width={160}
        height={160}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />

  
      

      <h3>Jane blake</h3>

     
      <p className="text-gray-600 leading-relaxed">
        “These products are amazing, I love the quality and the design.
        I highly recommend this store to everyone looking for unique and
        high-quality items. The customer service is also top-notch — always
        ready to help and answer any questions. Overall, a fantastic shopping
        experience!”
      </p>

    </div>
 






             

</div>
         

         
  

    
  )
}

export default page
