# Capital Caps - Baseball Cap Store (Course 3: Video)

A modern, full-stack e-commerce application for a baseball cap store built with Next.js and Cloudinary. This project extends the same store used in the earlier Cloud to Crowd modules, adding **video delivery** and the **Cloudinary Video Player** so you can practice video workflows alongside images.

> This application supports the "Cloud to Crowd" Media IQ for Developers with Video course on Cloudinary Academy, free for all and designed for the Cloudinary Creators Program. Learn more at https://community.cloudinary.com and take the course at https://training.cloudinary.com/learn/course/devrel-c2c-video

## 🚀 Features

- **Product Catalog**: Browse available baseball caps with detailed product pages
- **Cloudinary Integration**: Dynamic image optimization, transformations, and overlays
- **Video (course focus)**: Cloudinary Video Player dependency and patterns for playlists, posters, and adaptive streaming (wired up as you progress through the lessons)
- **Responsive Design**: Mobile-first UI built with Tailwind CSS
- **Admin Panel**: Admin home and Upload Widget flow
- **Image Transformations**: Cropping, watermarking, and discount badges
- **Color Picker**: Client-side color selection on product imagery
- **Image Modal**: Full-size / widescreen product view
- **Server-Side Rendering**: Fast, SEO-friendly pages with the Next.js App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Images**: Cloudinary & next-cloudinary
- **Video**: cloudinary-video-player
- **Deployment**: Platform-agnostic (no bundled `netlify.toml`; configure your host as needed)
- **Runtime**: React 19+

## 📋 Prerequisites

- Node.js 20+
- npm or yarn
- Cloudinary account (free tier works)
- CodeSandbox account (optional, if you prefer a cloud sandbox over a local setup)

## 🔧 Local installation

1. **Go to this project folder** (from the repo root):

   ```bash
   cd Video
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local` and fill in your Cloudinary values:

   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_unsigned_or_signed_preset
   NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME=your_folder_name
   ```

   Use an upload preset and folder that match how you upload cap assets in the course (for example the same convention as the Next.js / AI modules if you are continuing the same Cloudinary project).

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### One-off logo upload (optional)

```bash
npm run init
```

Requires `.env.local` (the script loads it via Node’s `--env-file` flag).

## 📁 Project Structure

```
Video/
├── app/                         # Next.js App Router
│   ├── admin/                   # Admin panel
│   ├── admin/uw/                # Upload Widget page
│   ├── products/[id]/           # Product detail route
│   ├── layout.tsx
│   ├── page.tsx                 # Store home
│   └── globals.css
├── components/
│   ├── ProductCard.tsx
│   ├── ProductImage.tsx
│   ├── ImageModal.tsx
│   ├── ColorSelector.tsx
│   └── VideoPlayer.tsx          # Cloudinary Video Player (course exercises)
├── lib/
│   └── cloudinary.ts            # Server-side Cloudinary config
├── products/
│   ├── products.json
│   └── images/                  # Local reference images (as needed)
├── scripts/
│   └── add-logo.ts
├── types/
│   └── types.ts
└── logo/
```

## 🌐 Deployment

This directory does not ship a platform-specific deployment file. Build and run from the `Video/` directory and set the same environment variables you use locally:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
- `NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME`

## 🎨 Cloudinary Features

- **Image optimization**: Format and quality (`f_auto`, `q_auto`) via `next-cloudinary`
- **Smart cropping**: Gravity-aware crops for catalog and hero imagery
- **Overlays and badges**: Branding and promotional overlays
- **Video**: Delivery and player integration (see course and [Video Player docs](https://cloudinary.com/documentation/cloudinary_video_player))

## 📝 Available Scripts

- `npm run dev` - Development server (Turbopack)
- `npm run build` - Production build (Turbopack)
- `npm run start` - Production server
- `npm run lint` - ESLint
- `npm run init` - Run `scripts/add-logo.ts` with `.env.local`

## 🔍 Key Files

- `app/page.tsx` - Home page and product grid
- `app/products/[id]/page.tsx` - Product detail shell
- `app/products/[id]/ProductPageClient.tsx` - Client UI: image, modal, color selector, video entry points
- `components/ProductImage.tsx` - Cloudinary-powered product image
- `components/VideoPlayer.tsx` - Video player component for the module
- `lib/cloudinary.ts` - Cloudinary SDK configuration
- `next.config.ts` - Next.js configuration (including Server Actions body size limit)

## 🐛 Troubleshooting

### Cloudinary images or uploads fail

1. Confirm every variable in `.env.local` matches the Cloudinary dashboard (cloud name, key, secret, preset, folder).
2. Ensure the upload preset exists and allows the upload method you use in the course.
3. Verify assets exist under the folder you configured.

### Video: `MEDIA_ERR_SRC_NOT_SUPPORTED` (Video.js code 4)

Common causes:

1. **React 18 Strict Mode (dev)** — The player must be created in `useEffect` and torn down with `player.dispose()` on unmount. A ref callback that bails out when a player instance already exists can leave the second mount’s `<video>` without a source. `VideoPlayer` follows the dispose pattern for this.

2. **Wrong or missing Cloudinary public IDs** — The sample playlist uses `baseball-cap-vid1` and `baseball-cap-vid2`. When `NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME` is set, the same prefix is applied as for product images (`{folder}/{stem}`). If your videos live elsewhere, unset that variable for a bare `public_id`, or edit the stems / resolution logic in `components/VideoPlayer.tsx`.

3. **Codec / delivery** — Very old or unusual encodes may not play in every browser; re-upload or re-encode to a common format (for example H.264 + AAC in MP4) per Cloudinary’s guidance.

### Product pages error in production

The app reads `products/products.json` from `process.cwd()`. Ensure your host’s build output includes the `products/` directory and that the working directory for `next start` is `Video/`.

### Build fails on your host

1. Set all required environment variables in the host’s dashboard.
2. Use Node.js 20+ in build settings.
3. Run `npm run build` from `Video/` so paths resolve consistently.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [next-cloudinary Documentation](https://next-cloudinary.dev/)
- [Cloudinary Video Player](https://cloudinary.com/documentation/cloudinary_video_player)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is part of our 'Cloud to Crowd' course on media literacy for developers.

---

Built with ❤️ using Next.js by the Cloudinary Developer Relations Team
