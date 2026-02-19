'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-primary-600">Digital Presence?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s turn your vision into reality. Get in touch and let&apos;s build something great together.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center group text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center text-lg px-8 py-4"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Schedule Consultation
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Quick Response
              </h3>
              <p className="text-gray-600 text-sm">
                Get a response within 24 hours. We&apos;re here to help bring your ideas to life.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">💡</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Free Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                No obligation consultation to discuss your project needs and goals.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Custom Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Tailored digital solutions designed specifically for your business needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
