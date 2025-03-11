'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-lg py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-display-sm font-bold mb-12 text-balance">
            Privacy
            <span className="text-gradient"> Policy</span>
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-secondary-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-secondary-600">
                Last Notes ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your information when you use our mobile application ("App").
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-secondary-600 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-secondary-600">
                <li>Coffee consumption data you input into the app</li>
                <li>Usage statistics and app interaction data</li>
                <li>Device information and identifiers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-secondary-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-secondary-600">
                <li>Provide and improve our services</li>
                <li>Generate insights and statistics about your coffee consumption</li>
                <li>Send you important updates about the app</li>
                <li>Respond to your support requests</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
              <p className="text-secondary-600">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-secondary-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-secondary-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-secondary-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:coffeeliteapp@gmail.com" className="text-primary-600 hover:text-primary-700">
                  coffeeliteapp@gmail.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link href="/" className="ios-button-primary">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 