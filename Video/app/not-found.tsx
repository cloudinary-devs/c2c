import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-9xl mb-4">🤷‍♂️</div>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 mb-4 font-[family-name:var(--font-fredoka)] pb-2">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 font-[family-name:var(--font-fredoka)]">
            Page Lost in the Cap Dimension! 🌀
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-cyan-200">
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Uh oh! This page must&apos;ve fallen off a delivery truck on its way to Cap HQ. 📦💥
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We&apos;ve looked everywhere — under the caps, behind the caps, even <em>inside</em> the
            caps. Still can&apos;t find it!
          </p>
          <p className="text-base text-gray-500 italic">
            Maybe it&apos;s chilling with the missing socks? 🧦
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 border-2 border-orange-300">
          <p className="text-lg font-bold text-gray-800 mb-2">🎯 Popular Destinations:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              🏠 Home
            </Link>
            <Link
              href="/admin"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              ⚙️ Admin
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            Still lost? Try using the navigation above or contact our cap support team!
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center gap-4 text-5xl opacity-50">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>
            🧢
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>
            ❓
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
            🧢
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>
            ❓
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>
            🧢
          </span>
        </div>
      </div>
    </div>
  );
}
