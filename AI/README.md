# Capital Caps - Baseball Cap Store (Course 2: AI)

A modern, full-stack e-commerce application for a baseball cap store built with Next.js 15 and Cloudinary. This project demonstrates media literacy best practices for developers, showcasing how to effectively manage and transform images using Cloudinary's powerful API enhanced with AI.

> This application supports the "Cloud to Crowd" Media IQ for Developers with AI course on Cloudinary Academy, free for all and designed for the Cloudinary Creators Program. Learn more at https://community.cloudinary.com and take the course at https://training.cloudinary.com/learn/course/devrel-c2c-ai

## 🚀 Features

- **Product Catalog**: Browse available baseball caps with detailed product pages
- **Cloudinary Integration**: Dynamic image optimization, transformations, and overlays
- **Responsive Design**: Beautiful, mobile-first UI built with Tailwind CSS
- **Admin Panel**: Access admin features and utilities
- **Image Transformations**: Automatic cropping, watermarking, and discount badges
- **AI Enhancements**: Color picker and AI-generated recoloring
- **Server-Side Rendering**: Fast, SEO-friendly pages with Next.js App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Image Management**: Cloudinary & next-cloudinary
- **Deployment**: Platform-agnostic (build/run from `final/`)
- **Runtime**: React 19+

## 📋 Prerequisites

- Node.js 20+ 
- npm or yarn
- Cloudinary account (free tier works)
- CodeSandbox account (if you want to try a sandbox rather than a local build)

## 🔧 Local installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd start # starter, or cd final # completed version
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   To run either version of this app, create a `.env.local` file in the `start/` or `final/` directory you're using with the following variables (see `start/.env.example` for the required variable names):

   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=baseball-cap-store
   NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME=baseball-cap-store
   ```

## 🏃 Running the Project

Run these commands from the directory you want to run: `start/` or `final/`.

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

## 📁 Project Structure

The `start/` directory contains the starter version; `final/` contains the completed version. The structure below is for `final/`.

```
final/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   ├── products/          # Product detail pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ProductCard.tsx    # Product card component
│   └── ProductImage.tsx   # Cloudinary image component
│   └── ImageModal.tsx     # Opening an image in a modal
│   └── ColorSelector.tsx  # An AI-enhanced color picker
├── lib/                   # Utility libraries
│   ├── cloudinary.ts      # Cloudinary configuration
├── products/              # Product data
│   └── products.json      # Product catalog
├── scripts/               # Utility scripts
│   └── add-logo.ts        # Logo upload script
├── types/                 # TypeScript type definitions
└── logo/                  # Logo assets
```

## 🌐 Deployment

This repo does not include a platform-specific deployment config (for example, no `netlify.toml`).

Build and run from the `final/` directory and set the required Cloudinary env vars:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
- `NEXT_PUBLIC_CLOUDINARY_FOLDER_NAME`

## 🎨 Cloudinary Features

This project demonstrates several Cloudinary capabilities:

- **Automatic Image Optimization**: Format and quality optimization
- **Smart Cropping**: Automatic gravity-based cropping (`gravity: 'auto'`)
- **Overlays**: Logo watermarking on product images
- **Dynamic Transformations**: Discount badges and text overlays
- **Responsive Images**: Automatic sizing and format selection

## 📝 Available Scripts

Run these scripts from `start/` or `final/`.

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔍 Key Files

- `final/app/page.tsx` - Home page with product listing
- `final/app/products/[id]/page.tsx` - Individual product detail page
- `final/components/ProductImage.tsx` - Cloudinary image component with transformations
- `final/components/ImageModal.tsx` - Modal window
- `final/ColorSelector.tsx` - Color picker with AI integration
- `final/lib/cloudinary.ts` - Cloudinary SDK configuration
- `final/next.config.ts` - Next.js configuration (Server Actions body size limit)

## 🐛 Troubleshooting

### Product pages show server error on your deployment platform

The app reads `products/products.json` from `process.cwd()`. If you still encounter issues:

1. Verify your build/run working directory is `final/`
2. Verify the deployed files include `final/products/products.json`

### Cloudinary images not loading

1. Verify all environment variables are set correctly
2. Check that the upload preset exists in your Cloudinary dashboard
3. Ensure product images are uploaded to the correct folder in Cloudinary
4. Run `npm run init` to upload the logo if it's missing

### Build fails on your deployment platform

1. Check that all required environment variables are set
2. Ensure the build/run working directory is `final/`
3. Ensure Node.js version is 20+ in your build settings

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [next-cloudinary Documentation](https://next-cloudinary.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is part of our 'Cloud to Crowd' course on media literacy for developers.

---

Built with ❤️ using Next.js by the Cloudinary Developer Relations Team
