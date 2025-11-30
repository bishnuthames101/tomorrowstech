import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Users, Rocket, Heart, ArrowRight } from 'lucide-react';
import { FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us - Web Development & Digital Marketing Company',
  description: 'Tomorrow\'s Tech is a leading web development, mobile app development, and digital marketing agency. Expert team delivering innovative technology solutions worldwide. Building Tomorrow\'s Technology Today.',
  keywords: [
    'about tomorrow\'s tech',
    'web development company',
    'mobile app development agency',
    'digital marketing experts',
    'software development team',
    'technology consulting',
    'custom software solutions',
    'IT services company'
  ],
  openGraph: {
    title: 'About Tomorrow\'s Tech - Expert Web & Mobile Development Team',
    description: 'Meet the team behind Tomorrow\'s Tech. Expert developers, designers, and digital strategists delivering cutting-edge technology solutions for businesses worldwide.',
    url: 'https://tomorrowstech.com.np/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tomorrow\'s Tech - Expert Development Team',
    description: 'Expert developers and digital strategists delivering innovative technology solutions.',
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
            <p className="text-xl text-black leading-relaxed mb-8">
              We&apos;re a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-black leading-relaxed">
              <p className="text-lg">
                Founded with a vision to bridge the gap between cutting-edge technology and business needs, Tomorrow&apos;s Tech has grown from a small startup to a trusted digital partner for businesses worldwide.
              </p>
              <p className="text-lg">
                Our journey began with a simple belief: every business deserves access to world-class digital solutions that drive growth and innovation. Today, we&apos;ve helped over 50 companies transform their digital presence and achieve their business goals.
              </p>
              <p className="text-lg">
                We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations. Our commitment to excellence and customer satisfaction has made us a leader in the digital services industry.
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
                To be the world&apos;s most trusted partner for digital transformation, known for excellence, innovation, and unwavering commitment to client success.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Alex Thompson',
                role: 'Founder & CEO',
                icon: '👨‍💼',
                bio: 'Visionary leader with 10+ years in tech innovation',
              },
              {
                name: 'Sarah Martinez',
                role: 'Lead Designer',
                icon: '🎨',
                bio: 'Creative genius crafting beautiful user experiences',
              },
              {
                name: 'David Chen',
                role: 'Tech Lead',
                icon: '👨‍💻',
                bio: 'Full-stack expert building scalable solutions',
              },
            ].map((member, index) => (
              <div key={index} className="card text-center group hover:border-primary-500/50 transition-all">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-400 mb-3">{member.role}</p>
                <p className="text-black text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="card bg-gradient-to-br from-primary-600/20 to-accent-600/20 border-primary-500/30 text-center max-w-2xl mx-auto">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary-400" />
            <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
            <p className="text-black mb-6">
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years Experience', icon: '📅' },
              { number: '50+', label: 'Projects Delivered', icon: '🚀' },
              { number: '30+', label: 'Happy Clients', icon: '😊' },
              { number: '100%', label: 'Satisfaction Rate', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-black">{stat.label}</div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Let&apos;s discuss how we can help bring your vision to life and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Start a Project
              </Link>
              <Link href="/portfolio" className="btn-secondary border-white text-white hover:bg-white/10">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
