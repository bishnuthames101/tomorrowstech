import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-200 text-gray-400">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Tomorrow's Tech"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-heading font-bold">
                Tomorrow&apos;s Tech
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Building tomorrow&apos;s technology today. We specialize in cutting-edge
              web development, mobile applications, and digital marketing strategies
              that drive your business forward.
            </p>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Mon-Fri: {CONTACT_INFO.hours.weekdays}</div>
                  <div>Sat: {CONTACT_INFO.hours.saturday}</div>
                  <div>Sun: {CONTACT_INFO.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tomorrow&apos;s Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}