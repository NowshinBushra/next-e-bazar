import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const HeroSection = () => {
    return (
      <section className="relative w-full h-[200px] md:h-[500px] flex items-center mt-0 md:mt-10 bg-gray-50 overflow-hidden">
      
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/deals.png"
          alt="Deals Background"
          fill
          className="object-contain object-left opacity-100 -ml-3 md:ml-14" 
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
       
        <div className="flex justify-end md:pr-20"> 
          <div className="max-w-[160px] md:max-w-md text-amber-900 text-right flex flex-col items-end">
            <h2 className="text-xl md:text-5xl  pt-3 md:pt-0 font-extrabold leading-tight">
              🔥 Today’s <br /> Special Deals
            </h2>

            <p className="mt-2 md:mt-6 text-[10px] md:text-lg font-medium text-amber-950">
              Go on Flash Sale! <br className="md:hidden" /> Get the best discounts. <br className="hidden md:block" /> Limited time offer!
            </p>

            <Link
              href="/sale"
              className="inline-block my-2 md:mt-8 bg-[#b45309] text-white px-5 py-1.5 md:px-10 md:py-3 rounded-full text-xs md:text-lg font-bold hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/20"
            >
              Shop Deals
            </Link>
          </div>

        </div>
      </div>
    </section>
    );
};

export default HeroSection;