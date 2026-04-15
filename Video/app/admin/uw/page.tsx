'use client';
import { useState } from 'react';
import Link from 'next/link';

import { CldUploadWidget } from 'next-cloudinary';

export default function UW() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="mb-6" aria-label="Breadcrumb">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg px-2 py-1"
        >
          ← Back to Admin
        </Link>
      </nav>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-transparent hover:border-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4 font-[family-name:var(--font-fredoka)] pb-2">
            📤 Upload Widget Upload
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use Cloudinary&apos;s pre-built upload widget for a quick and seamless upload experience
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-inner">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center space-y-3">
                <div className="text-6xl" aria-hidden="true">
                  ☁️
                </div>
                <h2 className="text-2xl font-black text-gray-800 font-[family-name:var(--font-fredoka)]">
                  Ready to Upload?
                </h2>
                <p className="text-gray-600">
                  Click the button below to open the upload widget and select your images
                </p>
              </div>

              <CldUploadWidget
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                options={{
                  sources: ['local', 'url'],
                  multiple: true,
                  maxFiles: 12,
                  clientAllowedFormats: ['jpg', 'jpeg'],
                }}
                onOpen={() => {
                  setIsOpen(true);
                }}
                onClose={() => setIsOpen(false)}
              >
                {({ open }) => {
                  return (
                    <button
                      onClick={() => open()}
                      disabled={isOpen}
                      className={`
                        px-8 py-4 text-xl font-black rounded-full shadow-lg transition-all duration-300 hover:cursor-pointer
                        ${
                          isOpen
                            ? 'bg-gray-400 text-white cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:shadow-2xl hover:scale-105'
                        }
                      `}
                    >
                      {isOpen ? 'Uploading...' : '📤 Upload Images'}
                    </button>
                  );
                }}
              </CldUploadWidget>

              <div className="w-full bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-500 flex-shrink-0" aria-hidden="true">
                    ℹ️
                  </span>
                  <span>
                    <strong className="font-bold">Upload Guidelines:</strong> You can upload up to
                    12 images at once. Only JPG/JPEG formats are supported. Images can be selected
                    from your device or via URL.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
