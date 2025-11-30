'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-600">Clients Say</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with Tomorrow's Tech.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:scale-105 transition-all duration-300">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                    <Quote className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-black text-center mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center border-t border-gray-100 pt-6">
                  <h4 className="font-heading font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-black text-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-black max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our digital solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary-600 mb-2">
                98%
              </div>
              <div className="text-black text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary-600 mb-2">
                150+
              </div>
              <div className="text-black text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary-600 mb-2">
                5.0
              </div>
              <div className="text-black text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary-600 mb-2">
                24h
              </div>
              <div className="text-black text-sm">Response Time</div>
            </div>
          </div>
        </motion.div>

        {/* Client Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-black mb-8">Proud to work with amazing companies</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Logo</span>
            </div>
            <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Logo</span>
            </div>
            <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Logo</span>
            </div>
            <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Logo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}