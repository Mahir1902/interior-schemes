import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </main>
  );
}
