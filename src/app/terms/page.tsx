'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container-lg py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-display-sm font-bold mb-12 text-balance">
            Terms of
            <span className="text-gradient"> Service</span>
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-secondary-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-secondary-600">
                By accessing or using Last Notes ("App"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access or use the App.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="text-secondary-600 mb-4">
                Permission is granted to temporarily download and use the App for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-secondary-600">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in the App</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">User Content</h2>
              <p className="text-secondary-600">
                You retain all rights to any content you submit, post or display on or through the App. By submitting, posting or displaying content on or through the App, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-secondary-600">
                The App is provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
              <p className="text-secondary-600">
                In no event shall Last Notes or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the App.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-secondary-600">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-secondary-600">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on the App. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-secondary-600">
                If you have any questions about these Terms, please contact us at{' '}
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