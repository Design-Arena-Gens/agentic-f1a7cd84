import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-50">
      <div className="container-wrap flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold text-leaf-700">
          <span className="inline-block w-6 h-6 rounded-full bg-leaf-600" aria-hidden />
          <span>EverGreen</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/products" className="hover:text-leaf-700">Products</Link>
          <Link href="/about" className="hover:text-leaf-700">About</Link>
          <Link href="/contact" className="hover:text-leaf-700">Contact</Link>
          <a href="/products" className="btn-primary hidden sm:inline-flex">Shop Now</a>
        </nav>
      </div>
    </header>
  );
}
