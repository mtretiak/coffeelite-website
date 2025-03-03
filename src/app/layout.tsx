import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CoffeeLite - Your Perfect Coffee Journal',
  description: 'Track your brews, manage your coffee collection, and discover your perfect cup with CoffeeLite.',
  keywords: 'coffee, journal, brewing, tracking, iOS app',
  openGraph: {
    title: 'CoffeeLite - Your Perfect Coffee Journal',
    description: 'Track your brews, manage your coffee collection, and discover your perfect cup with CoffeeLite.',
    images: [
      {
        url: '/IMG_6411.png',
        width: 1200,
        height: 630,
        alt: 'CoffeeLite App Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoffeeLite - Your Perfect Coffee Journal',
    description: 'Track your brews, manage your coffee collection, and discover your perfect cup with CoffeeLite.',
    images: ['/IMG_6411.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 