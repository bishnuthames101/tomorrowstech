'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, Headphones, Rocket } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data and applications are protected with industry-leading security measures.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance. Our applications load quickly and provide smooth user experiences across all devices.'
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'We work closely with your team throughout the development process, ensuring your vision becomes reality.'
  },
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description: 'Recognized for excellence in web development and digital solutions. Quality is at the heart of everything we create.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to keep your business running smoothly. We\'re here when you need us most.'
  },
  {
    icon: Rocket,
    title: 'Future-Ready',
    description: 'Built with cutting-edge technologies and scalable architecture to grow with your business needs.'
  }
];

export default function Features() {
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
            Why Choose <span className="text-primary-600">Tomorrow&apos;s Tech</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with creative innovation to deliver digital solutions 
            that exceed expectations and drive real business results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card text-center hover:scale-105 transition-all duration-300">
                  {/* Feature Icon */}
                  <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-black leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-primary-600 rounded-2xl py-16 px-8 lg:py-20 lg:px-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center text-black">
            <div>
              <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">5+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">50+</div>
              <div className="text-primary-100">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">30+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}