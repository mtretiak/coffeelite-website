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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop"
            alt="Coffee background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white">
                  Your Perfect
                  <span className="block text-secondary">Coffee Journal</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light max-w-xl">
                  Track your brews, manage your coffee collection, and discover your perfect cup with CoffeeLite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://testflight.apple.com/join/AZuAmmFb"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="ios-button text-lg px-12 py-4 text-center"
                  >
                    Download on TestFlight
                  </motion.a>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="ios-button text-lg px-12 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    Learn More
                  </motion.button>
                </div>
                <div className="flex items-center gap-8 pt-8">
                  <div className="text-white">
                    <div className="text-3xl font-light">4.9/5</div>
                    <div className="text-sm text-gray-300">App Store Rating</div>
                  </div>
                  <div className="text-white">
                    <div className="text-3xl font-light">10K+</div>
                    <div className="text-sm text-gray-300">Happy Users</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-[280px] aspect-[9/19.5] rounded-[3rem] overflow-hidden shadow-ios-lg"
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
                        index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-light text-primary mb-6">Beautiful, Intuitive Design</h2>
            <p className="text-xl text-gray-600 font-light">Experience the perfect blend of style and functionality with our thoughtfully crafted interface.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: '/IMG_6411.png', alt: 'CoffeeLite Home Screen', title: 'Clean Home Screen' },
              { src: '/IMG_6412.png', alt: 'CoffeeLite Brewing Screen', title: 'Smart Brewing' },
              { src: '/IMG_6413.png', alt: 'CoffeeLite Statistics Screen', title: 'Detailed Analytics' },
              { src: '/IMG_6414.png', alt: 'CoffeeLite Settings Screen', title: 'Custom Settings' }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[9/19.5] rounded-[3rem] overflow-hidden shadow-ios hover:shadow-ios-lg transition-all duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-light text-primary mt-6 text-center">{image.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-light text-primary mb-6">Track Your Coffee Journey</h2>
            <p className="text-xl text-gray-600 font-light">Everything you need to perfect your coffee game, all in one beautiful app.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="ios-card text-center group hover:bg-white/50 transition-colors duration-300"
              >
                <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-light text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-light text-primary mb-6">Everything You Need</h2>
            <p className="text-xl text-gray-600 font-light">From brewing to tracking, we've got you covered with powerful features.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-8 group"
              >
                <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-8">Ready to Start Your Coffee Journey?</h2>
          <p className="text-2xl mb-16 text-gray-100 font-light">Join thousands of coffee enthusiasts who are already using CoffeeLite.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://testflight.apple.com/join/AZuAmmFb"
              target="_blank"
              rel="noopener noreferrer"
              className="ios-button text-lg px-16 py-5 bg-white text-primary hover:bg-gray-100 text-center"
            >
              Download on TestFlight
            </a>
            <button className="ios-button text-lg px-16 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: '📱',
    title: 'Track Your Brews',
    description: 'Record every coffee you make with detailed brewing parameters and ratings.'
  },
  {
    icon: '☕',
    title: 'Manage Coffee Bags',
    description: 'Keep track of your coffee collection and never forget a great bean.'
  },
  {
    icon: '📊',
    title: 'View Statistics',
    description: 'Analyze your brewing habits and preferences with detailed insights.'
  }
];

const keyFeatures = [
  {
    icon: '🎯',
    title: 'Personalized Experience',
    description: 'Track your favorite brewing methods, coffee origins, and flavor profiles.'
  },
  {
    icon: '⚙️',
    title: 'Gear Management',
    description: 'Organize your coffee equipment and track maintenance schedules.'
  },
  {
    icon: '📝',
    title: 'Detailed Notes',
    description: 'Record tasting notes, brewing parameters, and personal preferences.'
  },
  {
    icon: '📈',
    title: 'Progress Tracking',
    description: 'Monitor your coffee journey and see how your preferences evolve.'
  }
]; 