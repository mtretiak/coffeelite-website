'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHeroImageLoading, setIsHeroImageLoading] = useState(true);
  const [isFeatureImageLoading, setIsFeatureImageLoading] = useState(true);
  const images = [
    { src: '/IMG_6411.png', alt: 'CoffeeLite Home Screen' },
    { src: '/IMG_6412.png', alt: 'CoffeeLite Brewing Screen' },
    { src: '/IMG_6413.png', alt: 'CoffeeLite Statistics Screen' },
    { src: '/IMG_6414.png', alt: 'CoffeeLite Settings Screen' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        "name": "CoffeeLite",
        "description": "Log each bag, track what works, and never lose a winning recipe again. Last Notes helps you record origins, brew parameters, and tasting notes so you can repeat your best cups.",
        "operatingSystem": "iOS",
        "applicationCategory": "LifestyleApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "screenshot": images.map(img => ({
          "@type": "ImageObject",
          "url": `https://coffeelite-website-jlpu.vercel.app${img.src}`,
          "caption": img.alt
        })),
        "featureList": [
          "Bag tracking with origin and roast date",
          "Brew parameters (grind, temp, ratio, method)",
          "Tasting notes to capture winning recipes"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "125",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is CoffeeLite?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Last Notes is a coffee journal app that helps you log each bag, record brew parameters, and capture tasting notes—so you never lose a winning recipe again."
            }
          },
          {
            "@type": "Question",
            "name": "Is CoffeeLite free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, CoffeeLite is currently available for free through TestFlight beta testing program."
            }
          },
          {
            "@type": "Question",
            "name": "What features does CoffeeLite offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Last Notes offers bag tracking with origin and roast date, brew parameter logging (grind, temp, ratio, method), and tasting notes to capture what worked so you can repeat it."
            }
          }
        ]
      }
    ]
  };

  const image = {
    src: '/coffee-journal-group.png',
    alt: 'CoffeeLite app screens showing coffee journal entries, brewing details, and statistics'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="bg-background/80 backdrop-blur-sm">
        <div className="container-lg">
          <div className="flex items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/coffee-icon.png"
                alt="Last Notes Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="text-xl font-semibold">Last Notes</span>
            </Link>
          </div>
        </div>
      </nav>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative min-h-[90vh] flex items-center bg-primary-50 py-12 md:py-0"
          aria-label="Introduction to CoffeeLite"
        >
          <div className="container-lg relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl px-4 md:px-0"
              >
                <h1 className="text-4xl md:text-display-lg font-bold mb-6 text-balance">
                  You made a great cup last week.
                  <span className="text-gradient"> You have no idea what you did.</span>
                </h1>
                <p className="text-lg md:text-xl text-secondary-600 mb-8 text-balance">
                  Last Notes connects your beans, your brews, and your tasting notes — so you can repeat the good ones and learn from the rest.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/app/last-notes/id6742664033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios-button-primary"
                  >
                    Download on App Store
                  </a>
                </div>
              </motion.div>
              <div className="relative flex justify-center px-4 md:px-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-[1000px]"
                >
                  <Image
                    src="/coffee-journal.png"
                    alt="Last Notes app screens showing coffee journal entries"
                    width={1000}
                    height={600}
                    className={`object-contain w-full h-auto ${isHeroImageLoading ? 'shimmer' : ''}`}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                    quality={90}
                    onLoadingComplete={() => setIsHeroImageLoading(false)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="ios-section bg-white py-12 md:py-24"
          aria-label="CoffeeLite Features"
        >
          <div className="container-lg px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
                Everything connects
                <span className="text-gradient"> back to the bag</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto text-balance">
                Your beans, your brews, your tasting notes — all in one place so you can repeat what works.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Bag Tracking</h3>
                <p className="text-secondary-600">Log each bag with origin, roast date, and tasting notes—so you know exactly what you&apos;re working with.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Brew Parameters</h3>
                <p className="text-secondary-600">Record grind size, water temp, ratio, and method for every cup—the details that make the difference.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Tasting Notes</h3>
                <p className="text-secondary-600">Capture what worked—flavor, body, finish—and never lose a winning recipe again.</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mt-12 md:mt-16 px-4 md:px-0"
            >
              <Image
                src="/coffee-journal-group.webp"
                alt="Last Notes detailed features showcase"
                width={800}
                height={400}
                className={`w-full h-auto max-w-[800px] ${isFeatureImageLoading ? 'shimmer' : ''}`}
                sizes="(max-width: 800px) 100vw, 800px"
                quality={85}
                loading="lazy"
                onLoadingComplete={() => setIsFeatureImageLoading(false)}
              />
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="ios-section bg-primary-50 py-12 md:py-24" aria-label="What users say about Last Notes">
          <div className="container-lg px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
                Loved by
                <span className="text-gradient"> coffee enthusiasts</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto text-balance">
                TestFlight users are already logging their bags and brewing better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <blockquote className="ios-card">
                <p className="text-secondary-700 italic mb-4">&ldquo;Finally I can remember what I did when a cup turns out great. Game changer for dialing in new beans.&rdquo;</p>
                <footer className="text-sm text-secondary-600">— James, V60 home brewer</footer>
              </blockquote>
              <blockquote className="ios-card">
                <p className="text-secondary-700 italic mb-4">&ldquo;The bag tracking is exactly what I needed. No more guessing which grind setting worked for that Ethiopian.&rdquo;</p>
                <footer className="text-sm text-secondary-600">— Sarah, pour-over enthusiast</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ios-section bg-white py-12 md:py-24">
          <div className="container-sm text-center px-4 md:px-6">
            <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
              Never forget
              <span className="text-gradient"> a great cup</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 text-balance">
              Your coffee memory starts here. Download Last Notes and start logging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/app/last-notes/id6742664033"
                target="_blank"
                rel="noopener noreferrer"
                className="ios-button-primary"
              >
                Download on App Store
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="ios-section bg-primary-50 py-12 md:py-24" aria-label="Contact and Support">
          <div className="container-sm text-center px-4 md:px-6">
            <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
              Need
              <span className="text-gradient"> help?</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 text-balance">
              We're here to assist you with any questions or concerns about Last Notes.
            </p>
            <div className="ios-card max-w-xl mx-auto">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <a href="mailto:coffeeliteapp@gmail.com" className="text-primary-600 hover:text-primary-700">
                    coffeeliteapp@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="flex justify-center gap-4">
                    <a href="https://www.instagram.com/lastnotesapp/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - at bottom per UX best practice */}
        <section id="faq" className="ios-section bg-white py-12 md:py-24" aria-label="Frequently Asked Questions">
          <div className="container-lg px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
                Frequently Asked
                <span className="text-gradient"> Questions</span>
              </h2>
            </div>
            <div className="grid gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">What is Last Notes?</h3>
                <p className="text-secondary-600">Last Notes is a coffee journal that helps you log each bag, record brew parameters, and capture tasting notes—so you never lose a winning recipe again.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">Is Last Notes free?</h3>
                <p className="text-secondary-600">Yes, Last Notes is currently available for free through TestFlight beta testing.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">What features does Last Notes offer?</h3>
                <p className="text-secondary-600">Bag tracking with origin and roast date, detailed brew parameters (grind, temp, ratio, method), and tasting notes so you can repeat what works.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">How do I get started?</h3>
                <p className="text-secondary-600">Download Last Notes from the App Store, add your first bag, and start logging brews. The app guides you through each step.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 px-4 md:px-6">
          <div className="container-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Last Notes</h3>
                <p className="text-sm text-secondary-600">Remember every great cup.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-sm text-secondary-600 hover:text-primary-600">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms" className="text-sm text-secondary-600 hover:text-primary-600">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#faq" className="text-sm text-secondary-600 hover:text-primary-600">FAQ</a>
                  </li>
                  <li>
                    <a href="mailto:coffeeliteapp@gmail.com" className="text-sm text-secondary-600 hover:text-primary-600">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.instagram.com/lastnotesapp/" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-600 hover:text-primary-600">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-center text-secondary-600">© {new Date().getFullYear()} Last Notes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 