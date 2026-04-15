import Link from 'next/link';
import { promises as fs } from 'node:fs';
import type { Product } from '@/types/types';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/products/products.json', 'utf8');
  const parsed = JSON.parse(file);
  const products = parsed.filter((product: Product) => product.available);

  return (
    <>
      <nav className="mb-8 flex justify-end" aria-label="Admin navigation">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
          aria-label="Go to admin panel"
        >
          ⚙️ Admin Panel
        </Link>
      </nav>

      <section aria-labelledby="hero-heading" className="mb-12 text-center">
        <h2
          id="hero-heading"
          className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-4 font-[family-name:var(--font-fredoka)] pb-2"
        >
          Fresh Caps Dropping Daily! 🔥
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 font-semibold">
          Rock the headwear that makes you stand out
        </p>
      </section>

      <section aria-labelledby="products-heading">
        <h2
          id="products-heading"
          className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-8 font-[family-name:var(--font-fredoka)] pb-2"
        >
          Available Products
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>

      {products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl font-bold text-gray-600">
            No caps available right now. Check back soon! 🧢
          </p>
        </div>
      )}
    </>
  );
}
