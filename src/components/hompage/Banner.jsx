import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 md:py-24">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            🚀 Quality You Can Trust
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Fresh Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Delivered Fast
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
            Shop from a wide range of daily essentials and premium groceries at 
            unbeatable prices, delivered right to your doorstep.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg shadow-slate-200 hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
          
          {/* Stats Bar */}
          <div className="mt-12 flex items-center justify-center md:justify-start gap-8 border-t border-slate-100 pt-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">10k+</p>
              <p className="text-sm text-slate-500">Products</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">24h</p>
              <p className="text-sm text-slate-500">Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-[550px]">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-blue-400 opacity-10 blur-[100px] rounded-full" />
            
            <Image
              src="/banner.png"  
              alt="E-bazar Fresh Products"
              width={600}
              height={500}
              priority
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}