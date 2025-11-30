'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with advanced features, payment integration, and inventory management.',
    image: '/portfolio/ecommerce.svg',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
    image: '/portfolio/healthcare.svg',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Digital Marketing Dashboard',
    category: 'Web Development',
    description: 'Comprehensive analytics dashboard for tracking marketing campaigns and social media performance.',
    image: '/portfolio/dashboard.svg',
    tech: ['React', 'D3.js', 'Express', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'Website Design',
    description: 'Beautiful restaurant website with online reservations, menu showcase, and location information.',
    image: '/portfolio/restaurant.svg',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function Portfolio() {
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
            Our <span className="text-primary-600">Portfolio</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mb-8">
            Explore some of our recent projects and see how we've helped businesses 
            transform their digital presence and achieve their goals.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* Project Links */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 transition-colors duration-200"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-5 h-5 text-primary-600" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 transition-colors duration-200"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5 text-primary-600" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-black mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-black mb-8">
            Want to see more of our work?
          </p>
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}