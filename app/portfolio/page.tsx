'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Filter } from 'lucide-react';

const categories = ['All', 'Web Development', 'Mobile Development', 'Website Design', 'Digital Marketing'];

const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with advanced features, payment integration, and inventory management.',
    image: '🛒',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
    image: '🏥',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Digital Marketing Dashboard',
    category: 'Web Development',
    description: 'Comprehensive analytics dashboard for tracking marketing campaigns and social media performance.',
    image: '📊',
    tech: ['React', 'D3.js', 'Express', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'Website Design',
    description: 'Beautiful restaurant website with online reservations, menu showcase, and location information.',
    image: '🍽️',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'Cross-platform fitness app with workout tracking, nutrition planning, and progress analytics.',
    image: '💪',
    tech: ['Flutter', 'Firebase', 'Dart', 'Cloud Functions'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'SaaS Platform',
    category: 'Web Development',
    description: 'Enterprise SaaS solution with team collaboration, project management, and reporting features.',
    image: '💼',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'SEO Campaign for Tech Startup',
    category: 'Digital Marketing',
    description: 'Complete SEO overhaul resulting in 300% increase in organic traffic and improved search rankings.',
    image: '🔍',
    tech: ['SEO', 'Content Strategy', 'Link Building', 'Analytics'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'Real Estate Portal',
    category: 'Website Design',
    description: 'Modern real estate website with property listings, virtual tours, and mortgage calculator.',
    image: '🏠',
    tech: ['Next.js', 'Tailwind', 'Mapbox', 'Strapi CMS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'Social Media App',
    category: 'Mobile Development',
    description: 'Social networking app with real-time messaging, photo sharing, and community features.',
    image: '📱',
    tech: ['React Native', 'GraphQL', 'AWS', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#'
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text ">
              Our Portfolio
            </h1>
            <p className="text-xl text-black leading-relaxed">
              Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-black">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-black hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card group hover:border-primary-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-dark-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-primary-600/90 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-black text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-800 text-xs text-black rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-dark-700">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-black text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: '✅' },
              { number: '30+', label: 'Happy Clients', icon: '😊' },
              { number: '15+', label: 'Industries Served', icon: '🏢' },
              { number: '100%', label: 'Success Rate', icon: '🎯' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-black text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Let&apos;s create something amazing together. Get in touch and let&apos;s discuss your vision.
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
