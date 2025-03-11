import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://coffeelite-website-jlpu.vercel.app'),
  title: 'Last Notes - Coffee Brewing Journal & Recipe Tracker for iOS',
  description: 'Track your coffee brewing recipes, save detailed parameters, and perfect your coffee making process. Log origins, flavor notes, and brewing methods in this simple iOS app for coffee enthusiasts.',
  keywords: 'coffee journal, coffee recipe tracker, coffee brewing app, coffee parameters, pour over coffee, V60 coffee, coffee brewing journal, coffee logging app, coffee tasting notes, coffee origin tracker',
  applicationName: 'Last Notes',
  authors: [{ name: 'Last Notes Team' }],
  creator: 'Last Notes Team',
  publisher: 'Last Notes',
  formatDetection: {
    telephone: true,
    date: true,
    email: true,
    address: true,
  },
  category: 'lifestyle',
  openGraph: {
    title: 'Last Notes - Coffee Brewing Journal & Recipe Tracker',
    description: 'Track your coffee brewing recipes, save detailed parameters, and perfect your coffee making process. From bean origins to brewing parameters, capture every detail.',
    type: 'website',
    locale: 'en_US',
    url: 'https://coffeelite-website-jlpu.vercel.app',
    siteName: 'Last Notes',
    images: [
      {
        url: '/IMG_6411.png',
        width: 1200,
        height: 630,
        alt: 'CoffeeLite App - Coffee Brewing Journal and Recipe Tracker',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Notes - Coffee Brewing Journal & Recipe Tracker',
    description: 'Track your coffee brewing recipes and perfect your coffee making process. Log origins, parameters, and flavor notes.',
    site: '@lastnotes',
    creator: '@lastnotes',
    images: ['/IMG_6411.png'],
  },
  icons: {
    icon: [
      { url: '/coffee-icon.png', type: 'image/png' },
      { url: '/coffee-icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/coffee-icon.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/coffee-icon.png', type: 'image/png' },
      { url: '/coffee-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/coffee-icon.png', sizes: '152x152', type: 'image/png' },
      { url: '/coffee-icon.png', sizes: '120x120', type: 'image/png' },
      { url: '/coffee-icon.png', sizes: '76x76', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/coffee-icon.png', color: '#261b18' }
    ]
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://coffeelite-website-jlpu.vercel.app',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
      'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3f2' },
    { media: '(prefers-color-scheme: dark)', color: '#261b18' },
  ],
  appleWebApp: {
    capable: true,
    title: 'Last Notes',
    statusBarStyle: 'default',
  },
  other: {
    'apple-itunes-app': 'app-id=yourAppID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CoffeeLite",
              "url": "https://coffeelite-website-jlpu.vercel.app",
              "logo": "https://coffeelite-website-jlpu.vercel.app/icon.png",
              "sameAs": [
                "https://twitter.com/coffeelite",
                "https://instagram.com/coffeelite"
              ]
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
} 