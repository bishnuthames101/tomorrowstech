import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <CTA />
    </div>
  );
}
