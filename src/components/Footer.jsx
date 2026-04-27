import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">E-Bazar</h2>
          <p className="mt-3 text-sm">
            Your trusted online marketplace for smart and reliable shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-white font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/gift-card">Gift Cards</Link></li>
            <li><Link href="/membership">Membership</Link></li>
            <li><Link href="/seller">Become a Seller</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@ebazar.com</p>
          <p className="text-sm mt-1">Phone: +880 1234-567890</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <span className="bg-gray-700 px-3 py-1 rounded">FB</span>
            <span className="bg-gray-700 px-3 py-1 rounded">IG</span>
            <span className="bg-gray-700 px-3 py-1 rounded">TW</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} E-Bazar. All rights reserved.
      </div>
    </footer>
  );
}