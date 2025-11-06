import ProductCard from '../../components/ProductCard';
import { products } from '../../lib/products';

export const metadata = {
  title: 'Products',
  description: 'Browse our collection of premium artificial plants.'
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container-wrap">
        <h1 className="text-3xl font-semibold">All Products</h1>
        <p className="text-gray-600 mt-2">Beautiful faux botanicals designed for modern living.</p>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
