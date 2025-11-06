export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="container-wrap py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} EverGreen. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/about" className="hover:text-leaf-700">About</a>
          <a href="/contact" className="hover:text-leaf-700">Contact</a>
          <a href="/products" className="hover:text-leaf-700">Products</a>
        </div>
      </div>
    </footer>
  );
}
