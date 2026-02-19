'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="text-primary-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re just getting started — exciting projects are on the way.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects Coming Soon</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are actively working on new and exciting projects. Our portfolio will be updated as we complete them. In the meantime, feel free to reach out and discuss your project with us.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start a Project With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-blue-700 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Be Our First Featured Client?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let&apos;s build something great together. Get in touch and let&apos;s discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started
              </Link>
              <Link href="/services/web-development" className="btn-secondary border-white text-white hover:bg-white/10">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
