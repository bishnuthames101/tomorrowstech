import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/constants';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, MessageSquare } from 'lucide-react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Tomorrow's Tech`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Tomorrow's Tech`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dark-900">
      {/* Back Navigation */}
      <div className="container-custom py-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6 animate-float">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text ">
              {service.title}
            </h1>
            <p className="text-xl text-black leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="card group hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <Check className="w-5 h-5 text-primary-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{feature}</h3>
                      <p className="text-black text-sm">
                        Professional {feature.toLowerCase()} services tailored to your needs
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We understand your goals and requirements' },
                { step: '02', title: 'Planning', desc: 'Create a detailed roadmap and strategy' },
                { step: '03', title: 'Development', desc: 'Build your solution with best practices' },
                { step: '04', title: 'Launch', desc: 'Deploy and provide ongoing support' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary-500/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-black text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technologies We Use
            </h2>

            <div className="card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {getTechnologies(service.slug).map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <div className="text-4xl">{tech.icon}</div>
                    <span className="text-sm font-medium text-black">{tech.name}</span>
                  </div>
                ))}
              </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-50 mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                <MessageSquare className="w-5 h-5" />
                Get a Free Consultation
              </Link>
              <Link href="/#portfolio" className="btn-secondary border-white text-white hover:bg-white/10">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function getTechnologies(slug: string) {
  const techMap: Record<string, { icon: string; name: string }[]> = {
    'web-development': [
      { icon: '⚛️', name: 'React' },
      { icon: '▲', name: 'Next.js' },
      { icon: '📗', name: 'Node.js' },
      { icon: '🔷', name: 'TypeScript' },
      { icon: '🗄️', name: 'MongoDB' },
      { icon: '🐘', name: 'PostgreSQL' },
      { icon: '🎨', name: 'Tailwind' },
      { icon: '🔥', name: 'Firebase' },
    ],
    'app-development': [
      { icon: '📱', name: 'React Native' },
      { icon: '🍎', name: 'Swift' },
      { icon: '🤖', name: 'Kotlin' },
      { icon: '💙', name: 'Flutter' },
      { icon: '📲', name: 'Expo' },
      { icon: '🔔', name: 'Push.io' },
      { icon: '📊', name: 'Analytics' },
      { icon: '☁️', name: 'Cloud' },
      { icon: '🔥', name: 'Firebase' },
    ],
    'digital-marketing': [
      { icon: '🔍', name: 'SEO' },
      { icon: '📱', name: 'Social Media' },
      { icon: '✉️', name: 'Email' },
      { icon: '📊', name: 'Analytics' },
      { icon: '💰', name: 'PPC' },
      { icon: '📝', name: 'Content' },
      { icon: '📈', name: 'Growth' },
      { icon: '🎯', name: 'Targeting' },
    ],
    'websites': [
      { icon: '🎨', name: 'UI/UX' },
      { icon: '📱', name: 'Responsive' },
      { icon: '🛒', name: 'E-commerce' },
      { icon: '📄', name: 'CMS' },
      { icon: '🚀', name: 'Performance' },
      { icon: '🔒', name: 'Security' },
      { icon: '♿', name: 'Accessibility' },
      { icon: '🔍', name: 'SEO' },
    ],
  };

  return techMap[slug] || [];
}
