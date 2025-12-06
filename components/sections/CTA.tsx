'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-primary-600 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mt-20 bg-blue rounded-2xl p-8 lg:p-12 shadow-2xl">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-white-200">Digital Presence?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-black-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s turn your vision into reality. Join hundreds of satisfied clients
              who have revolutionized their business with our cutting-edge digital solutions.
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
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg inline-flex items-center group"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg inline-flex items-center group"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Schedule Consultation
            </Link>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                Quick Response
              </h3>
              <p className="text-black-100 text-sm">
                Get a response within 24 hours. We&apos;re here to help bring your ideas to life.
              </p>
            </div>

            {/* Free Consultation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">💡</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                Free Consultation
              </h3>
              <p className="text-black-100 text-sm">
                No obligation consultation to discuss your project needs and goals.
              </p>
            </div>

            {/* Custom Solutions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🚀</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                Custom Solutions
              </h3>
              <p className="text-black-100 text-sm">
                Tailored digital solutions designed specifically for your business needs.
              </p>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-black-100">
              Join the digital revolution today • No hidden fees • 100% satisfaction guarantee
            </p>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}