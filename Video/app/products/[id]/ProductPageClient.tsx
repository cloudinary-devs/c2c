'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ProductImage from '@/components/ProductImage';
import ColourSelector from '@/components/ColourSelector';
import ImageModal from '@/components/ImageModal';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false });

export default function ProductPageClient({
  image,
  discount,
  productId,
}: {
  image: string;
  discount: boolean;
  productId: number;
}) {
  const [selectedColour, setSelectedColour] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="relative group aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg">
        <ProductImage
          publicId={image}
          width={800}
          height={800}
          discount={discount}
          colour={selectedColour ?? undefined}
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

      <ColourSelector
        selectedColour={selectedColour}
        onColourChangeAction={setSelectedColour}
      />

      {productId === 2 && (
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-lg font-bold py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Watch Videos
        </button>
      )}

      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full">
          <ProductImage
            publicId={image}
            width={3413}
            height={1920}
            discount={discount}
            colour={selectedColour ?? undefined}
            widescreen={true}
          />
        </div>
      </ImageModal>

      <ImageModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)}>
        <VideoPlayer />
      </ImageModal>
    </div>
  );
}
