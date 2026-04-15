'use client';

import { useCallback, useRef } from 'react';
import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';
import 'cloudinary-video-player/playlist';
import 'cloudinary-video-player/adaptive-streaming';

export default function VideoPlayer() {
  const playerRef = useRef<any>(null);

  const videoRef = useCallback((el: HTMLVideoElement | null) => {
    if (!el || playerRef.current) return;

    const player = cloudinary.videoPlayer(el, {
      cloudName: 'tamas-demo',
      fluid: true,
    });

    player.playlist(
      [
        {
          publicId: 'baseball-cap-vid1',
          transformation: [{ width: 800, height: 450, crop: 'fill' }],
          posterOptions: { transformation: [{ width: 100, height: 100, crop: 'fill', gravity: 'auto' }] },
        },
        {
          publicId: 'baseball-cap-vid2',
          transformation: [{ width: 800, height: 450, crop: 'fill', gravity: 'auto' }],
          posterOptions: { transformation: [{ width: 100, height: 100, crop: 'fill', gravity: 'auto' }] },
        },
      ],
      {
        autoAdvance: true,
        repeat: false,
        presentUpcoming: 5,
      }
    );

    playerRef.current = player;
  }, []);

  return (
    <video
      ref={videoRef}
      className="cld-video-player w-full"
      controls
    />
  );
}
