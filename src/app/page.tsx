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
          "Vision scanning - photograph coffee bags to extract roaster, origin, process, variety, flavors",
          "Bag tracking with roaster, origin, process, variety, flavors, rating, price, roast date, photos",
          "Brew tracking - home and café brews with method, device, grind, dose, water, time, temp, rating",
          "Analytics - flavor profiles, roaster stats, brew history, origin map, price history, peak brew time",
          "Gear tracking, shareable cards, dark mode, iCloud photo backup"
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
              "text": "Last Notes offers vision scanning to read bag labels from a photo, bag tracking (roaster, origin, process, variety, flavors, rating, price, roast date, photos), brew tracking for home and café with location, analytics (flavor profiles, roaster stats, brew history, origin map, price history), plus gear tracking, shareable cards, dark mode, and iCloud photo backup."
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
                <span className="text-gradient"> back to the bag.</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto text-balance">
                Start with the bean. Build from there.
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
                <p className="text-secondary-600">Capture roaster, origin, process, variety, flavors, rating, price, and roast date. Add up to 3 photos per bag—no more forgetting what you bought.</p>
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
                <h3 className="text-xl font-semibold">Brew Tracking</h3>
                <p className="text-secondary-600">Home brews: method, device, grind, dose, water, time, temp, rating. Café brews include location—so you know exactly where you had that perfect cup.</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Vision Scanning</h3>
                <p className="text-secondary-600">Take a photo of the bag. The app reads the label—roaster, origin, process, variety, flavors—and fills in the details. No typing required.</p>
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

        {/* Vision Scanning Section */}
        <section className="ios-section bg-primary-50 py-12 md:py-24" aria-label="Vision scanning - scan coffee bag labels">
          <div className="container-lg px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
                  Scan the bag.
                  <span className="text-gradient"> Skip the typing.</span>
                </h2>
                <p className="text-lg text-secondary-600 mb-6">
                  Take a photo of the bag. The app reads the label and pulls out roaster, origin, process, variety, and flavor notes—so you can add a bag in seconds instead of minutes.
                </p>
                <p className="text-secondary-600">
                  Less typing, more brewing. It&apos;s the fastest way to start your coffee journal.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="ios-card max-w-sm w-full aspect-square flex items-center justify-center text-primary-200">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Analytics & Insights Section */}
        <section className="ios-section bg-white py-12 md:py-24" aria-label="Analytics and insights">
          <div className="container-lg px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-display-sm font-bold mb-6 text-balance">
                See patterns
                <span className="text-gradient"> you didn&apos;t know were there.</span>
              </h2>
              <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto text-balance">
                Your brews tell a story. Last Notes helps you read it.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="ios-card">
                <h3 className="text-lg font-semibold mb-2">Flavor profile explorer</h3>
                <p className="text-secondary-600 text-sm">Which tasting notes show up most? See your flavor habits at a glance.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-lg font-semibold mb-2">Roaster stats</h3>
                <p className="text-secondary-600 text-sm">Your favorite roasters, bag counts, ratings, and how much you&apos;ve spent.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-lg font-semibold mb-2">Brew history charts</h3>
                <p className="text-secondary-600 text-sm">Track brews over time and spot what&apos;s working.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-lg font-semibold mb-2">Origin map</h3>
                <p className="text-secondary-600 text-sm">Pins across the coffee belt—see where your beans come from.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-lg font-semibold mb-2">Price history</h3>
                <p className="text-secondary-600 text-sm">Filter by price range and keep tabs on your coffee spend.</p>
              </div>
              <div className="ios-card">
                <h3 className="text-lg font-semibold mb-2">Peak brew time</h3>
                <p className="text-secondary-600 text-sm">When do you brew the most? Find your perfect coffee rhythm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Features */}
        <section className="ios-section bg-primary-50 py-12 md:py-24" aria-label="More features">
          <div className="container-lg px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-display-sm font-bold mb-8 text-center text-balance">
                And a few more things
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="feature-icon shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Gear & equipment tracking</h3>
                    <p className="text-sm text-secondary-600">Log your grinders, brewers, and go-to setup.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="feature-icon shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Shareable bag & brew cards</h3>
                    <p className="text-sm text-secondary-600">Dark and light styles—ready to share.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="feature-icon shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dark mode</h3>
                    <p className="text-sm text-secondary-600">Easy on the eyes, day or night.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="feature-icon shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">iCloud photo backup</h3>
                    <p className="text-sm text-secondary-600">Your bag photos stay safe and synced.</p>
                  </div>
                </div>
              </div>
            </div>
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
                <footer className="text-sm text-secondary-600">— James, home brewer</footer>
              </blockquote>
              <blockquote className="ios-card">
                <p className="text-secondary-700 italic mb-4">&ldquo;The bag tracking is exactly what I needed. No more guessing which grind setting worked for that Ethiopian.&rdquo;</p>
                <footer className="text-sm text-secondary-600">— Sarah, espresso dialer</footer>
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
              Free on iOS. No spreadsheets required.
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
            <div className="ios-card max-w-xl mx-auto mt-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <a href="mailto:coffeeliteapp@gmail.com" className="text-primary-900 hover:text-primary-950">
                    coffeeliteapp@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="flex justify-center gap-4">
                    <a href="https://www.instagram.com/lastnotesapp/" target="_blank" rel="noopener noreferrer" className="text-primary-900 hover:text-primary-950">
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
                <p className="text-secondary-600">Vision scanning reads bag labels from a photo. Bag tracking captures roaster, origin, process, variety, flavors, rating, price, roast date, and photos. Brew tracking covers home and café (with location). Analytics include flavor profiles, roaster stats, brew history, origin map, and price history. Plus gear tracking, shareable cards, dark mode, and iCloud backup.</p>
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