'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, SERVICES } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Tomorrow's Tech"
              width={800}
              height={400}
              className="h-8 w-auto lg:h-12 lg:w-auto rounded-lg"
              priority
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <span className="text-lg mr-3">{service.icon}</span>
                          <span className="font-medium">{service.title}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div className="space-y-2">
                  <div className="text-gray-900 font-medium py-2">Services</div>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={closeMenu}
                      className="block pl-4 text-gray-600 hover:text-primary-600 py-2"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{service.icon}</span>
                        {service.title}
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/portfolio"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                >
                  Portfolio
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn-primary w-full text-center mt-4"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}