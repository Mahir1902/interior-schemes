import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedConnector from '@/components/AnimatedConnector';
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

const serviceOfferings = [
  { number: '01', name: 'Initial Consultation', detail: 'Up to 1.5 hours, in-person' },
  { number: '02', name: 'Furniture Selection', detail: 'Per room — mood board, FF&E and costings' },
  { number: '03', name: 'Additional Revisions', detail: 'Per revision' },
  { number: '04', name: 'Shopping Assistance & Sourcing Support', detail: 'Per hour' },
  { number: '05', name: 'In-Home Styling & Setup', detail: 'Per hour' },
];

const timeline = [
  { week: 'Week 1', milestone: 'Initial Consultation' },
  { week: 'Weeks 2–3', milestone: 'Mood Board & Selections' },
  { week: 'Week 4', milestone: 'Final Presentation' },
];

const termsAndConditions = [
  '50% deposit required to begin design development',
  'Final balance due upon delivery of final presentation',
  'Recommendations subject to product availability at time of purchase',
  'Styling fees do not include the cost of furniture or décor',
  'Proposal pricing valid for 30 days from issue date',
];

const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v'];

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

      {/* Process — 2 phases + engagement options */}
      <section className="py-24 lg:py-32 bg-[var(--cream)]">
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
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              How It Works
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Phase 01 */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="relative overflow-hidden bg-[var(--charcoal)]/[0.04] border border-[var(--charcoal)]/10 p-10 h-full">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--teal)]" />
                <span
                  className="absolute -top-4 -right-2 text-[8rem] leading-none text-[var(--charcoal)]/5 select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  01
                </span>
                <span
                  className="text-[var(--teal)] text-[11px] font-semibold tracking-[0.4em] uppercase block mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Phase 01
                </span>
                <h3
                  className="text-[var(--charcoal)] mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  Initial Client Meeting
                </h3>
                <ul className="space-y-3">
                  {[
                    'Face-to-face or video consultation',
                    'Walkthrough of your space and lifestyle needs',
                    'Discussion of preferences, style, and goals',
                    'Style discovery session to align on your vision',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[var(--warm-gray)] font-light text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full mt-[6px] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Phase 02 */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative overflow-hidden bg-[var(--charcoal)]/[0.04] border border-[var(--charcoal)]/10 p-10 h-full">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--teal)]" />
                <span
                  className="absolute -top-4 -right-2 text-[8rem] leading-none text-[var(--charcoal)]/5 select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  02
                </span>
                <span
                  className="text-[var(--teal)] text-[11px] font-semibold tracking-[0.4em] uppercase block mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Phase 02
                </span>
                <h3
                  className="text-[var(--charcoal)] mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  Design Development
                </h3>
                <ul className="space-y-3">
                  {[
                    'Digital mood boards (one revision per room)',
                    'FF&E selection tailored to your space',
                    'Source list with supplier links',
                    'Itemised product costing',
                    'Final design presentation',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[var(--warm-gray)] font-light text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full mt-[6px] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Engagement options separator */}
          <div className="flex items-center gap-6 my-16">
            <div className="flex-1 h-px bg-[var(--sand)]" />
            <span
              className="text-[var(--warm-gray)] text-[11px] tracking-[0.4em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              What You Can Engage Us For
            </span>
            <div className="flex-1 h-px bg-[var(--sand)]" />
          </div>

          {/* 5 service offerings */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {serviceOfferings.map((svc, i) => (
              <AnimatedSection key={svc.number} delay={i * 0.08}>
                <div className={`px-6 py-8 h-full ${i < serviceOfferings.length - 1 ? 'border-r border-[var(--sand)] lg:border-r lg:border-b-0 border-b sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r' : ''}`}>
                  <span
                    className="text-[var(--teal)] block mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', lineHeight: 1 }}
                  >
                    {svc.number}
                  </span>
                  <h3
                    className="text-[var(--charcoal)] leading-snug"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
                  >
                    {svc.name}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-[var(--charcoal)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-8 h-px bg-[var(--teal)]" />
              <span
                className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Estimated Timeline
              </span>
              <div className="w-8 h-px bg-[var(--teal)]" />
            </div>
            <h2
              className="text-white leading-none"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              From First Call to Final Design
            </h2>
          </AnimatedSection>

          <div className="relative flex flex-col lg:flex-row items-start gap-0">
            {timeline.map((item, i) => (
              <Fragment key={item.week}>
                <AnimatedSection delay={i * 0.15} className="flex-shrink-0">
                  {/* Milestone */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-0">
                    <div className="flex flex-col lg:items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-[var(--teal)] flex items-center justify-center flex-shrink-0 mb-0 lg:mb-4">
                        <span
                          className="text-[var(--teal)]"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
                        >
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    <div className="lg:text-center lg:ml-0 ml-4 lg:mt-4">
                      <p
                        className="text-[var(--teal)] text-[11px] font-semibold tracking-[0.3em] uppercase mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.week}
                      </p>
                      <p
                        className="text-white font-light text-sm"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.milestone}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                {/* Connector line (not after last item) */}
                {i < timeline.length - 1 && <AnimatedConnector index={i} />}
              </Fragment>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <p
              className="text-white/50 text-sm italic"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Timeline may vary depending on the number of rooms and supplier responsiveness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms & Conditions */}
  <section className="py-24 lg:py-32 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Left col — sticky heading */}
            <AnimatedSection className="lg:col-span-1 lg:sticky lg:top-32 lg:self-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[var(--teal)]" />
                <span
                  className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Please Note
                </span>
              </div>
              <h2
                className="text-[var(--charcoal)] mb-5 leading-tight"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Terms &amp; Conditions
              </h2>
              <p
                className="italic text-[var(--warm-gray)] text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Please read carefully before engaging our services.
              </p>
            </AnimatedSection>

            {/* Right col — editorial divide-y list */}
            <div className="lg:col-span-2 divide-y divide-[var(--sand)]">
              {termsAndConditions.map((term, i) => (
                <AnimatedSection key={term} delay={i * 0.08}>
                  <div className="py-7 flex items-start gap-6 lg:gap-10">
                    <span
                      className="w-8 flex-shrink-0 text-right text-[var(--teal)]"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}
                    >
                      {romanNumerals[i]}
                    </span>
                    <p
                      className="text-[var(--warm-gray)] font-light text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {term}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
