import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Residential Design',
    description:
      'Transforming houses into homes with bespoke design solutions tailored to your lifestyle, taste, and vision.',
  },
  {
    number: '02',
    title: 'Commercial Spaces',
    description:
      'Creating compelling, functional commercial environments that reflect your brand and inspire productivity.',
  },
  {
    number: '03',
    title: 'Design Consultation',
    description:
      'Expert guidance and professional advice to help you make confident, beautiful design decisions.',
  },
  {
    number: '04',
    title: 'Project Management',
    description:
      'Complete coordination from concept to completion — every detail executed to the highest standard.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-20">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[var(--teal)]" />
              <span
                className="text-[var(--teal)] text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Services
              </span>
            </div>
            <h2
              className="text-[var(--charcoal)] leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              }}
            >
              What We <em>Do</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="flex items-end">
            <p
              className="text-[var(--warm-gray)] font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
            >
              Interior Schemes offers comprehensive design services for
              residential and commercial clients. We believe great design is
              deeply personal — a true reflection of the people who inhabit a
              space.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid of services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--sand)]">
          {services.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.08}>
              <div className="bg-[var(--cream)] p-8 lg:p-10 group hover:bg-[var(--charcoal)] transition-colors duration-500 cursor-default h-full flex flex-col">
                <div
                  className="text-[var(--teal)] text-[10px] tracking-[0.35em] uppercase mb-6 group-hover:text-[var(--teal-light)] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.number}
                </div>
                <h3
                  className="text-[var(--charcoal)] group-hover:text-white transition-colors mb-4 leading-snug"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[var(--warm-gray)] font-light text-sm leading-relaxed group-hover:text-white/55 transition-colors flex-grow"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.description}
                </p>
                <div className="mt-8 w-8 h-px bg-[var(--teal)] group-hover:w-14 transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA link */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-4 text-[var(--charcoal)] text-[10px] tracking-[0.35em] uppercase group hover:text-[var(--teal)] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore All Services
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
