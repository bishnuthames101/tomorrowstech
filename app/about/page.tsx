import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Rocket, Heart, ArrowRight } from 'lucide-react';
import { FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us - Web Development & Digital Marketing Company',
  description: 'Tomorrow\'s Tech is a web development, mobile app development, and digital marketing company based in Lalitpur, Nepal. Building Tomorrow\'s Technology Today.',
  keywords: [
    'about tomorrow\'s tech',
    'web development company nepal',
    'mobile app development agency',
    'digital marketing experts',
    'software development team',
    'technology consulting nepal',
    'custom software solutions',
    'IT services company lalitpur'
  ],
  openGraph: {
    title: 'About Tomorrow\'s Tech - Web & Mobile Development',
    description: 'Meet the team behind Tomorrow\'s Tech — delivering cutting-edge technology solutions for businesses.',
    url: 'https://tomorrowstech.com.np/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tomorrow\'s Tech',
    description: 'Delivering innovative technology solutions for businesses.',
  },
  alternates: {
    canonical: 'https://tomorrowstech.com.np/about',
  },
};

export default function AboutPage() {
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
              Building Tomorrow&apos;s Technology Today
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We&apos;re a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Our Story</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Tomorrow&apos;s Tech Pvt. Ltd. was founded with a clear vision: to make high-quality digital solutions accessible to businesses of all sizes. Based in Lalitpur, Nepal, we are at the beginning of an exciting journey.
              </p>
              <p className="text-lg">
                We believe every business — whether a local startup or an established enterprise — deserves a strong digital presence. Our mission is to bridge the gap between great ideas and the technology that brings them to life.
              </p>
              <p className="text-lg">
                We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations. We are committed to building long-term partnerships based on trust, transparency, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-black">
                To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value in the digital age.
              </p>
            </div>

            {/* Vision */}
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-500/10 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-black">
                To be Nepal&apos;s most trusted partner for digital transformation, known for excellence, innovation, and unwavering commitment to client success.
              </p>
            </div>

            {/* Values */}
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-black">
                Excellence, integrity, innovation, and customer-centricity guide everything we do. We believe in building long-term relationships based on trust and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="card group hover:border-primary-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Meet the Founder
          </h2>

          <div className="flex justify-center mb-12">
            <div className="card text-center group hover:border-primary-500/50 transition-all max-w-sm w-full">
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500/30">
                  <Image
                    src="/ceo.jpeg"
                    alt="Bishnu Sah - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bishnu Sah</h3>
              <p className="text-primary-400 mb-3">Founder &amp; CEO</p>
              <p className="text-black text-sm">Passionate about building technology solutions that make a real difference for businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Let&apos;s discuss how we can help bring your vision to life and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get In Touch
              </Link>
              <Link href="/services/web-development" className="btn-secondary border-white text-white hover:bg-white/10 inline-flex items-center gap-2">
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
