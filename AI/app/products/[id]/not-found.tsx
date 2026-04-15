import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-9xl mb-4 animate-bounce">🧢</div>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-4 font-[family-name:var(--font-fredoka)] pb-2">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 font-[family-name:var(--font-fredoka)]">
            Cap Not Found! 🔍
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-purple-200">
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Whoa there, cap hunter! Looks like this cap flew off the shelf... or maybe it never
            existed? 🤔
          </p>
          <p className="text-lg text-gray-600">
            Either someone snagged it before you, or you&apos;re trying to find a legendary cap
            that&apos;s just a myth!
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-xl font-black px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            🏠 Back to All Caps
          </Link>
          <p className="text-gray-600 text-sm">
            Don&apos;t worry, we&apos;ve got plenty more funky caps waiting for you!
          </p>
        </div>

        <div className="mt-12 text-6xl opacity-50">😢 💨 🧢</div>
      </div>
    </div>
  );
}
