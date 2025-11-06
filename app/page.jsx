import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section className="section bg-white">
        <div className="container-wrap">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured Artificial Plants</h2>
          <p className="text-gray-600 mt-2">Handpicked greenery that requires zero maintenance.</p>
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.slug} product={p} />)
            )}
          </div>
        </div>
      </section>

      <section className="section bg-leaf-50">
        <div className="container-wrap grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Why Choose EverGreen?</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-leaf-700">?</span><span>Zero watering or sunlight required ? always vibrant.</span></li>
              <li className="flex gap-3"><span className="text-leaf-700">?</span><span>Premium textures that look and feel real.</span></li>
              <li className="flex gap-3"><span className="text-leaf-700">?</span><span>Eco?friendly materials, built to last for years.</span></li>
            </ul>
            <a className="btn-primary mt-6" href="/products">Browse All Products</a>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1545249390-6b1c0b5f51f4?q=80&w=1400&auto=format&fit=crop" alt="Artificial plants in a bright living room" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wrap text-center">
          <h3 className="text-2xl font-semibold">Join Our Newsletter</h3>
          <p className="text-gray-600 mt-2">Get early access to new releases and seasonal sales.</p>
          <form className="mt-6 flex max-w-md mx-auto">
            <input type="email" required placeholder="you@example.com" className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none" />
            <button type="submit" className="btn-primary rounded-l-none rounded-r-md">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
