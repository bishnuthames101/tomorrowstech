import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation | Tomorrow\'s Tech',
  description: 'Contact Tomorrow\'s Tech for web development, mobile app development, and digital marketing services. Free consultation available. Quick response within 24 hours. Get your project started today!',
  keywords: [
    'contact tomorrow\'s tech',
    'web development quote',
    'mobile app consultation',
    'digital marketing inquiry',
    'free consultation',
    'project estimate',
    'hire developers',
    'get in touch'
  ],
  openGraph: {
    title: 'Contact Tomorrow\'s Tech - Free Consultation Available',
    description: 'Get in touch for web development, mobile apps, and digital marketing. Free consultation. Response within 24 hours.',
    url: 'https://tomorrowstech.com.np/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tomorrow\'s Tech - Free Consultation',
    description: 'Get expert help for your digital projects. Free consultation available.',
  },
  alternates: {
    canonical: 'https://tomorrowstech.com.np/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text ">
              Let&apos;s Build Something Amazing
            </h1>
            <p className="text-xl text-black leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Get in touch and let&apos;s turn your ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <p className="text-black mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="card group hover:border-primary-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-black hover:text-primary-400 transition-colors"
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
                    <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-accent-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                      className="text-black hover:text-accent-400 transition-colors"
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
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-black">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card group hover:border-primary-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                      <Clock className="w-6 h-6 text-accent-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-black">
                      <p>Mon - Fri: {CONTACT_INFO.hours.weekdays}</p>
                      <p>Saturday: {CONTACT_INFO.hours.saturday}</p>
                      <p>Sunday: {CONTACT_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="card bg-gradient-to-br from-primary-600/20 to-accent-600/20 border-primary-500/30">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Quick Response
                </h3>
                <p className="text-sm text-black">
                  We typically respond within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'What is your typical response time?',
                  answer: 'We aim to respond to all inquiries within 24 hours during business days. Urgent requests are typically handled within a few hours.',
                },
                {
                  question: 'Do you offer free consultations?',
                  answer: 'Yes! We offer a free initial consultation to discuss your project requirements, timeline, and budget. This helps us provide you with an accurate proposal.',
                },
                {
                  question: 'What information should I include in my message?',
                  answer: 'Please include details about your project goals, timeline, budget range, and any specific requirements. The more information you provide, the better we can assist you.',
                },
                {
                  question: 'Do you work with clients remotely?',
                  answer: 'Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration and uses modern tools to ensure smooth communication.',
                },
              ].map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary-400">
                    {faq.question}
                  </h3>
                  <p className="text-black">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
