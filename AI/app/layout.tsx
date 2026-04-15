import type { Metadata, Viewport } from 'next';
import { Fredoka, Lobster, Poppins } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});

const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CapZone - Funky Baseball Caps',
  description: 'Your one-stop shop for the coolest baseball caps around!',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fredoka.variable} ${lobster.variable} ${poppins.variable} bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 min-h-screen font-[family-name:var(--font-poppins)] antialiased`}
      >
        <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl md:text-6xl font-black text-white text-center tracking-tight drop-shadow-lg font-[family-name:var(--font-lobster)]">
              🧢 CapZone
            </h1>
            <p className="text-center text-white text-lg mt-2 font-semibold font-[family-name:var(--font-fredoka)]">
              The Funkiest Caps in Town!
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">{children}</main>

        <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-bold font-[family-name:var(--font-fredoka)]">
              © {new Date().getFullYear()} CapZone - Keep it Funky! 🎨
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
