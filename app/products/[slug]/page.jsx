import { products, getProductBySlug } from '../../../lib/products';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const prod = getProductBySlug(params.slug);
  return {
    title: prod ? prod.name : 'Product',
    description: prod ? prod.short : 'Product details'
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return (
      <section className="section">
        <div className="container-wrap">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-2 text-gray-600">Please browse our <a className="text-leaf-700 underline" href="/products">collection</a>.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-wrap grid gap-10 lg:grid-cols-2">
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-gray-600">{product.short}</p>
          <div className="mt-4 text-2xl font-semibold">${product.price}</div>
          <p className="mt-6 text-gray-700 leading-7">{product.description}</p>
          <div className="mt-8 flex gap-3">
            <button className="btn-primary">Add to Cart</button>
            <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-white/60">Ask a Question</a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-gray-500">Height</dt>
              <dd className="font-medium">Varies by selection</dd>
            </div>
            <div>
              <dt className="text-gray-500">Material</dt>
              <dd className="font-medium">PE, Fabric, Wire</dd>
            </div>
            <div>
              <dt className="text-gray-500">Pot</dt>
              <dd className="font-medium">Neutral matte planter</dd>
            </div>
            <div>
              <dt className="text-gray-500">Care</dt>
              <dd className="font-medium">Dust with soft cloth</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
