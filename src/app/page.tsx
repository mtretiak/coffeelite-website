'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary-50">
        <div className="container-lg relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-display-lg font-light mb-6 text-balance">
                Your perfect
                <span className="text-gradient"> coffee journal</span>
              </h1>
              <p className="text-xl text-secondary-600 mb-8 text-balance">
                Track your brews, discover new recipes, and perfect your coffee journey with CoffeeLite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://testflight.apple.com/join/AZuAmmFb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ios-button-primary"
                >
                  Download Beta
                </a>
                <button className="ios-button-secondary">
                  Learn More
                </button>
              </div>
            </motion.div>
            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[280px] aspect-[9/19.5] rounded-[2rem] overflow-hidden shadow-feature"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-primary-600 w-4' : 'bg-primary-200'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ios-section bg-white">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-display-sm mb-6 text-balance">
              Craft the perfect cup,
              <span className="text-gradient"> every time</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto text-balance">
              Everything you need to elevate your coffee experience, right at your fingertips.
            </p>
          </div>
          <div className="feature-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="feature-card"
            >
              <div className="feature-icon">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Recipe Tracking</h3>
              <p className="text-secondary-600">Save and organize your favorite coffee recipes with detailed brewing parameters.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Brewing Timer</h3>
              <p className="text-secondary-600">Built-in timer with presets for various brewing methods to ensure consistency.</p>
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
              <h3 className="text-xl font-semibold">Taste Analytics</h3>
              <p className="text-secondary-600">Track your taste preferences and discover patterns in your coffee journey.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ios-section bg-primary-50">
        <div className="container-sm text-center">
          <h2 className="text-display-sm mb-6 text-balance">
            Start your coffee
            <span className="text-gradient"> journey today</span>
          </h2>
          <p className="text-xl text-secondary-600 mb-8 text-balance">
            Join thousands of coffee enthusiasts who are already using CoffeeLite to perfect their brew.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://testflight.apple.com/join/AZuAmmFb"
              target="_blank"
              rel="noopener noreferrer"
              className="ios-button-primary"
            >
              Download Beta
            </a>
            <button className="ios-button-secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 