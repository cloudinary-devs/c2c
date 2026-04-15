import type { Product } from '@/types/types';
// import ProductImage from './ProductImage';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      role="group"
      aria-label={`${product.name} - ${product.description}`}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 border-transparent hover:border-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transform hover:-translate-y-2"
    >
      <Link
        href={`/products/${product.id}`}
        prefetch={true}
        className="block focus:outline-none focus:ring-4 focus:ring-purple-400 rounded-2xl"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="aspect-square">{/* Product Image Component */}</div>
        </div>

        <div className="p-5">
          <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all font-[family-name:var(--font-fredoka)]">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="relative">
              <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                $
                {(product.discount
                  ? product.price * 0.8
                  : product.price
                ).toFixed(2)}
              </p>
              {product.discount && (
                <span className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-black px-2 py-0.5 rounded-full transform rotate-12">
                  -20%
                </span>
              )}
            </div>
            <span
              className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full group-hover:scale-110 transition-transform"
              aria-hidden="true"
            >
              View Cap →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
