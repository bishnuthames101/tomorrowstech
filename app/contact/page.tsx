import { Metadata } from 'next';
import { CONTACT_INFO } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Tomorrow\'s Tech',
  description: 'Get in touch with Tomorrow\'s Tech. Reach us by email or phone for web development, mobile app development, and digital marketing services.',
  keywords: [
    'contact tomorrow\'s tech',
    'web development inquiry',
    'mobile app consultation',
    'digital marketing inquiry',
    'hire developers nepal',
    'get in touch'
  ],
  openGraph: {
    title: 'Contact Tomorrow\'s Tech',
    description: 'Get in touch for web development, mobile apps, and digital marketing.',
    url: 'https://tomorrowstech.com.np/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tomorrow\'s Tech',
    description: 'Get expert help for your digital projects.',
  },
  alternates: {
    canonical: 'https://tomorrowstech.com.np/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Get In <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a project in mind? Reach out directly and let&apos;s turn your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-6">

            {/* Email */}
            <div className="card group hover:border-primary-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Email Us</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-700 hover:text-primary-600 transition-colors text-lg"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card group hover:border-primary-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Call Us</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className="text-gray-700 hover:text-primary-600 transition-colors text-lg"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card group hover:border-primary-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Our Location</h3>
                  <p className="text-gray-700 text-lg">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card group hover:border-primary-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Business Hours</h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Mon – Fri: {CONTACT_INFO.hours.weekdays}</p>
                    <p>Saturday: {CONTACT_INFO.hours.saturday}</p>
                    <p>Sunday: {CONTACT_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
