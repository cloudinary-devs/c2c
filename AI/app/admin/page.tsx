import Link from 'next/link';

export default function Admin() {
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

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-transparent hover:border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 mb-4 font-[family-name:var(--font-fredoka)] pb-2">
            ⚙️ Admin Interface
          </h1>
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-black px-4 py-2 rounded-full shadow-md">
            AUTHORISED ACCESS ONLY
          </div>
        </header>

        <section aria-labelledby="upload-methods mx-auto">
          <ul className="flex flex-wrap justify-center" role="list">
            <li>
              <Link
                href="admin/uw"
                className="group block bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-transparent hover:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl" aria-hidden="true">
                    📤
                  </span>
                  <h3 className="text-2xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all font-[family-name:var(--font-fredoka)]">
                    Upload Widget
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Use Cloudinary&apos;s pre-built upload widget for a quick and easy upload
                  experience.
                </p>
                <span className="inline-flex items-center gap-2 text-purple-600 font-bold group-hover:gap-4 transition-all">
                  Get Started →
                </span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
