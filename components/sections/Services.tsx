'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section className="section-padding bg-gray-50">
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
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive 
            in today's competitive landscape. From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/services/${service.slug}`}>
                <div className="card h-full hover:scale-105 transition-all duration-300 cursor-pointer bg-white group-hover:shadow-2xl">
                  {/* Service Icon */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Description */}
                  <p className="text-black text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-black">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center justify-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-black mb-8">
            Ready to transform your business with our digital solutions?
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}