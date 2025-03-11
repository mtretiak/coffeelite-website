'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
        "description": "Track your daily coffee consumption effortlessly with CoffeeLite. Get insights into your coffee habits, monitor weekly stats, and improve your coffee journey.",
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
          "Quick coffee consumption logging",
          "Daily coffee intake insights",
          "Weekly statistics tracking"
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
              "text": "CoffeeLite is a simple iOS app that helps you track your daily coffee consumption, providing insights into your coffee drinking habits and weekly statistics."
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
              "text": "CoffeeLite offers quick coffee consumption logging, daily insights into your coffee intake patterns, and detailed weekly statistics to track your coffee drinking habits."
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
                  Your perfect
                  <span className="text-gradient"> coffee journal</span>
                </h1>
                <p className="text-lg md:text-xl text-secondary-600 mb-8 text-balance">
                  Track your brews, discover new recipes, and perfect your coffee journey with Last Notes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://testflight.apple.com/join/AZuAmmFb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ios-button-primary text-center"
                  >
                    Download Beta
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
                    alt="CoffeeLite app screens showing coffee journal entries"
                    width={1000}
                    height={600}
                    className="object-contain w-full h-auto"
                    priority
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
                Craft the perfect cup,
                <span className="text-gradient"> every time</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto text-balance">
                Everything you need to elevate your coffee experience, right at your fingertips.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Quick Add</h3>
                <p className="text-secondary-600">Easily log your daily coffee consumption with just a few taps.</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5M8 8v8m8 0h1a3 3 0 003-3V8a3 3 0 00-3-3h-1m0 0V3m0 2H8m0 0V3m0 2H7a3 3 0 00-3 3v5a3 3 0 003 3h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Daily Insights</h3>
                <p className="text-secondary-600">Track your daily coffee intake and view your consumption patterns over time.</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Weekly Stats</h3>
                <p className="text-secondary-600">View detailed weekly statistics and track your coffee drinking habits.</p>
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
                src="/coffee-journal-group.png"
                alt="CoffeeLite detailed features showcase"
                width={800}
                height={400}
                className="w-full h-auto max-w-[800px]"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ios-section bg-primary-50 py-12 md:py-24">
          <div className="container-sm text-center px-4 md:px-6">
            <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
              Start your coffee
              <span className="text-gradient"> journey today</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 text-balance">
              Join thousands of coffee enthusiasts who are already using Last Notes to perfect their brew.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://testflight.apple.com/join/AZuAmmFb"
                target="_blank"
                rel="noopener noreferrer"
                className="ios-button-primary text-center"
              >
                Download Beta
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="ios-section bg-white py-12 md:py-24" aria-label="Frequently Asked Questions">
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
                <p className="text-secondary-600">Last Notes is a simple iOS app that helps you track your daily coffee consumption, providing insights into your coffee drinking habits and weekly statistics.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">Is Last Notes free?</h3>
                <p className="text-secondary-600">Yes, Last Notes is currently available for free through TestFlight beta testing program.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">What features does Last Notes offer?</h3>
                <p className="text-secondary-600">Last Notes offers quick coffee consumption logging, daily insights into your coffee intake patterns, and detailed weekly statistics to track your coffee drinking habits.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-xl font-semibold mb-3">How do I get started?</h3>
                <p className="text-secondary-600">Simply download Last Notes through TestFlight, create your account, and start logging your coffee consumption. The app will guide you through the process.</p>
              </div>
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
                    <a href="https://twitter.com/coffeelite" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Twitter
                    </a>
                    <a href="https://instagram.com/coffeelite" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Instagram
                    </a>
                  </div>
                </div>
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
                <p className="text-sm text-secondary-600">Your perfect coffee companion for tracking and improving your coffee journey.</p>
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
                    <a href="https://twitter.com/coffeelite" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-600 hover:text-primary-600">Twitter</a>
                  </li>
                  <li>
                    <a href="https://instagram.com/coffeelite" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-600 hover:text-primary-600">Instagram</a>
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