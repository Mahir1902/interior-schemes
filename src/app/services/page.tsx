import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Expert interior design services across Australia — residential design, commercial spaces, design consultation, and complete project management serving Sydney, Melbourne, Brisbane and beyond.',
};

const services = [
  {
    number: '01',
    title: 'Residential Design',
    desc: "Your home is the most personal space in the world. We create residential interiors that go beyond aesthetics — spaces that reflect who you are and how you live. From full home renovations to single room makeovers, every project receives our complete attention and care.",
    image: '/images/306615966_5353311418037677_3863171647480930031_n.jpg',
    includes: [
      'Space planning & concept design',
      'Material & finish selection',
      'Furniture curation & procurement',
      'Trade coordination',
      'Styling & installation',
    ],
  },
  {
    number: '02',
    title: 'Commercial Spaces',
    desc: "Your commercial space is a powerful expression of your brand. We create beautiful, functional environments for offices, hospitality venues, retail spaces, and more — environments that inspire the people who work in them.",
    image: '/images/314915270_645837483928221_8655797893048199487_n.jpg',
    includes: [
      'Brand-aligned design concepts',
      'Functional space planning',
      'Custom joinery design',
      'Lighting design consultation',
      'Ongoing styling support',
    ],
  },
  {
    number: '03',
    title: 'Design Consultation',
    desc: "Not every project requires full design management. Our consultation service gives you access to expert guidance on specific design challenges — whether you're choosing a colour palette, planning furniture layout, or making renovation decisions.",
    image: '/images/277357894_1113260372796705_5890230152890945135_n.jpg',
    includes: [
      'In-home or virtual consultation',
      'Colour & material advice',
      'Furniture layout planning',
      'Budget recommendations',
      'Supplier & trade referrals',
    ],
  },
  {
    number: '04',
    title: 'Full Project Management',
    desc: "From initial concept through to final styling, we manage every aspect of your project. We coordinate all trades, suppliers, and deliveries — keeping your project on time, on budget, and to the highest standard.",
    image: '/images/252771494_316380016592927_8807306913493671885_n.jpg',
    includes: [
      'Full trade coordination',
      'Project scheduling & budgeting',
      'Site management & quality control',
      'Progress reporting',
      'Final installation & styling',
    ],
  },
];

const process = [
  { step: '1', title: 'Discovery', desc: 'An in-depth consultation to understand your vision, lifestyle, budget, and timeline.' },
  { step: '2', title: 'Design', desc: 'A detailed design concept — mood boards, floor plans, material palettes, and 3D visualisations.' },
  { step: '3', title: 'Procurement', desc: 'We source and manage all furniture, materials, and finishes — every order and delivery handled.' },
  { step: '4', title: 'Installation', desc: 'Full installation oversight and final styling to bring your space to life exactly as envisioned.' },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/306615966_5353311418037677_3863171647480930031_n.jpg"
            alt="Interior Schemes services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/52" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/50 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <AnimatedSection>
            <span
              className="text-[var(--teal-light)] text-[12px] font-semibold tracking-[0.4em] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What We Offer
            </span>
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 300,
              }}
            >
              Services
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Service details */}
      <section className="py-24 lg:py-36 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {services.map((service, i) => (
            <div key={service.number}>
              <AnimatedSection>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  {/* Image */}
                  <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div className="absolute top-5 left-5 bg-[var(--teal)] text-white text-[9px] tracking-[0.3em] uppercase px-4 py-2"
                         style={{ fontFamily: 'var(--font-body)' }}>
                      {service.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2
                      className="text-[var(--charcoal)] mb-5 leading-tight"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-[var(--warm-gray)] font-light leading-relaxed mb-8"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
                    >
                      {service.desc}
                    </p>
                    <div>
                      <h4
                        className="text-[var(--charcoal)] text-[10px] tracking-[0.35em] uppercase mb-4"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-2.5">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[var(--warm-gray)] font-light text-sm"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            <span className="w-1 h-1 bg-[var(--teal)] rounded-full mt-[7px] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {i < services.length - 1 && (
                <div className="my-24 lg:my-32 h-px bg-[var(--sand)]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-[var(--sand)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-8 h-px bg-[var(--teal)]" />
              <span
                className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                The Process
              </span>
              <div className="w-8 h-px bg-[var(--teal)]" />
            </div>
            <h2
              className="text-[var(--charcoal)] leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              How It Works
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border border-[var(--teal)] flex items-center justify-center mx-auto mb-6">
                    <span
                      className="text-[var(--teal)]"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3
                    className="text-[var(--charcoal)] mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[var(--warm-gray)] font-light text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
