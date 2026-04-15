import { promises as fs } from 'node:fs';
import type { Product } from '@/types/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const file = await fs.readFile(process.cwd() + '/products/products.json', 'utf8');
  const products: Product[] = JSON.parse(file);
  const { id } = await params;
  const product = products.find((product: Product) => product.id === Number(id));
  console.log(product);
  if (!product) notFound();

  return (
    <>
      <nav className="mb-6" aria-label="Breadcrumb">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg px-2 py-1"
        >
          ← Back to Store
        </Link>
      </nav>

      <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-transparent hover:border-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Image Section */}
          <div className="space-y-6">
            <figure className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg">
                {/*Product Image*/}
              </div>
              <figcaption className="sr-only">{product.name}</figcaption>
            </figure>

            {/* Details Section - Mobile position */}
            <section
              aria-labelledby="details-heading"
              className="md:hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-inner"
            >
              <h2
                id="details-heading"
                className="text-xl font-black text-gray-700 mb-4 font-[family-name:var(--font-fredoka)]"
              >
                Product Details
              </h2>
              <dl className="space-y-3">
                <div className="flex justify-between items-center">
                  <dt className="font-semibold text-gray-600">SKU:</dt>
                  <dd className="font-bold text-gray-800">
                    <data value={String(product.id)}>{product.id}</data>
                  </dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="font-semibold text-gray-600">Image Key:</dt>
                  <dd className="font-mono text-sm text-gray-800 bg-gray-200 px-3 py-1 rounded">
                    {product.image}
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-2 font-[family-name:var(--font-fredoka)] pb-2">
                {product.name}
              </h1>
            </header>

            <section aria-labelledby="description-heading" className="space-y-3">
              <h2
                id="description-heading"
                className="text-2xl font-black text-gray-800 font-[family-name:var(--font-fredoka)]"
              >
                Description
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
            </section>

            <section
              aria-labelledby="purchase-heading"
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border-2 border-green-200"
            >
              <h2 id="purchase-heading" className="sr-only">
                Purchase Information
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-700">Price:</span>
                <div className="text-right">
                  {product.discount && (
                    <div className="text-lg text-gray-500 line-through mb-1">
                      ${product.price.toFixed(2)}
                    </div>
                  )}
                  <data
                    value={(product.discount ? product.price * 0.8 : product.price).toFixed(2)}
                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 pb-1"
                  >
                    <span content="USD">$</span>
                    <span>
                      {(product.discount ? product.price * 0.8 : product.price).toFixed(2)}
                    </span>
                  </data>
                  {product.discount && (
                    <div className="inline-block ml-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-black px-3 py-1 rounded-full">
                      20% OFF
                    </div>
                  )}
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-xl font-black py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300">
                Add to Cart
              </button>
            </section>

            {/* Details Section - Desktop position */}
            <section
              aria-labelledby="details-heading-desktop"
              className="hidden md:block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-inner"
            >
              <h2
                id="details-heading-desktop"
                className="text-xl font-black text-gray-700 mb-4 font-[family-name:var(--font-fredoka)]"
              >
                Product Details
              </h2>
              <dl className="space-y-3">
                <div className="flex justify-between items-center">
                  <dt className="font-semibold text-gray-600">SKU:</dt>
                  <dd className="font-bold text-gray-800">
                    <data value={String(product.id)}>{product.id}</data>
                  </dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="font-semibold text-gray-600">Image Key:</dt>
                  <dd className="font-mono text-sm text-gray-800 bg-gray-200 px-3 py-1 rounded">
                    {product.image}
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 md:px-10 py-4 border-t border-gray-300">
          <small className="text-gray-600 text-sm">
            All product information is provided as-is. 🧢
          </small>
        </footer>
      </article>
    </>
  );
}
