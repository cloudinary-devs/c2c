'use client';
import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from 'react';

export default function ProductImage({
  publicId,
  width,
  height,
  discount = false,
  colour,
  widescreen = false,
}: {
  publicId: string;
  width: number;
  height: number;
  discount?: boolean;
  colour?: string;
  widescreen?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (colour || widescreen) {
      setIsLoading(true);
    }
  }, [colour, widescreen]);
  const transformations = [];

  if (widescreen) {
    transformations.push('c_pad,w_3413,ar_16:9,b_gen_fill');
  }

  if (colour) {
    // Remove # from hex code for Cloudinary
    const hexValue = colour.startsWith('#') ? colour.substring(1) : colour;
    transformations.push(`e_gen_recolor:prompt_baseball cap;to-color_${hexValue}`);
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      )}
      <CldImage
        key={`${colour || 'default'}-${widescreen}`}
        onLoad={() => setIsLoading(false)}
      src={`${publicId}`}
      alt={`Product: ${publicId}`}
      width={width}
      height={height}
      crop={widescreen ? undefined : {
        type: 'fill',
        source: true,
        gravity: 'auto',
      }}
      rawTransformations={transformations}
      overlays={[
        {
          publicId: `capital-caps-logo`,
          width: 300,
          position: {
            x: 0,
            y: 0,
            gravity: 'north_east',
          },
          effects: [
            {
              opacity: 50,
            },
          ],
        },
        ...(discount
          ? [
              {
                text: {
                  fontFamily: 'Lobster',
                  fontSize: 80,
                  text: ' 20% OFF ',
                  color: 'white',
                },
                position: {
                  gravity: 'north_west',
                  angle: -45,
                },
                effects: [
                  {
                    background: 'rgb:FF1744',
                  },
                ],
              },
            ]
          : []),
      ]}
    />
    </>
  );
}
