import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-amber-600 leading-tight">
            Fresh Products Delivered <br />
            <span className="text-blue-600 text-3xl md:text-4xl">Right To Your Door</span>
          </h1>

          <p className="mt-4 text-gray-600">
            Shop from a wide range of daily essentials, groceries, and more at
            the best prices.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <Image
            src="/banner.png"  
            alt="Banner"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}