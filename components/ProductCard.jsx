import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition block">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="text-gray-600 text-sm line-clamp-2 mt-1">{product.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold">${product.price}</span>
          <span className="text-leaf-700 text-sm">View details ?</span>
        </div>
      </div>
    </Link>
  );
}
