import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-leaf-50">
      <div className="container-wrap py-20 sm:py-28 grid gap-10 sm:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Lifelike Artificial Plants
            <span className="block text-leaf-600">Effortless Greenery</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-prose">Bring the calm of nature indoors without the upkeep. Our premium faux botanicals look stunning year?round in any space.</p>
          <div className="mt-8 flex gap-3">
            <Link className="btn-primary" href="/products">Shop Collection</Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-white/60" href="/about">Learn More</Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1611042553484-d61f84d2041b?q=80&w=1400&auto=format&fit=crop"
            alt="Close-up of realistic artificial plant leaves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-leaf-900/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
