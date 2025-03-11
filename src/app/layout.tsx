import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://coffeelite-website-jlpu.vercel.app'),
  title: 'CoffeeLite - Your Perfect Coffee Journal',
  description: 'Track your brews, manage your coffee collection, and discover your perfect cup with CoffeeLite.',
  keywords: 'coffee, journal, brewing, tracking, iOS app, coffee app, coffee tracking, brewing journal',
  openGraph: {
    title: 'CoffeeLite - Your Perfect Coffee Journal',
    description: 'Track your brews, manage your coffee collection, and discover your perfect cup with CoffeeLite.',
    type: 'website',
    locale: 'en_US',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 