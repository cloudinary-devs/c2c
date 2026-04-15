'use client';

import { useState } from 'react';
import ProductImage from '@/components/ProductImage';
// import ColorSelector from '@/components/ColorSelector';
import ImageModal from '@/components/ImageModal';

export default function ProductPageClient({
  image,
  discount,
}: {
  image: string;
  discount: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg">
        <ProductImage
          publicId={image}
          width={800}
          height={800}
          discount={discount}
          color={selected ?? undefined}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-4 focus:ring-purple-300"
          aria-label="View widescreen"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* <ColorSelector selected={selected} onChangeAction={setSelected} /> */}

      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full">
          <ProductImage
            publicId={image}
            width={3413}
            height={1920}
            discount={discount}
            color={selected ?? undefined}
            widescreen={true}
          />
        </div>
      </ImageModal>
    </div>
  );
}
