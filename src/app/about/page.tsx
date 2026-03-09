import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Interior Schemes — an award-winning interior design studio based in Australia. Discover our story, philosophy, and approach to luxury residential and commercial design in Sydney, Melbourne, Brisbane and beyond.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[380px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/277357894_1113260372796705_5890230152890945135_n.jpg"
            alt="Interior Schemes — our story"
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
              Our Story
            </span>
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 300,
              }}
            >
              About Us
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-36 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-[var(--teal)]" />
                <span
                  className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Who We Are
                </span>
              </div>
              <h2
                className="text-[var(--charcoal)] mb-8 leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                }}
              >
                A Studio Built on <em>Passion</em>
              </h2>
              <div
                className="space-y-5 text-[var(--warm-gray)] font-light leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
              >
                <p>
                  Interior Schemes was founded with a singular vision: to create
                  interiors that feel genuinely personal, beautifully crafted,
                  and deeply liveable.
                </p>
                <p>
                  We believe that great interior design is about far more than
                  aesthetics. It&apos;s about understanding how you live, how
                  you move through your spaces, what inspires you, and what
                  brings you comfort. Every design decision we make is grounded
                  in a deep understanding of our clients.
                </p>
                <p>
                  From Hampton-style kitchens to dramatic marble bathrooms, from
                  light-filled living rooms to curated commercial spaces — we
                  approach each project with the same dedication to craft,
                  quality, and connection.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  '/images/314915270_645837483928221_8655797893048199487_n.jpg',
                  '/images/306615966_5353311418037677_3863171647480930031_n.jpg',
                  '/images/252771494_316380016592927_8807306913493671885_n.jpg',
                  '/images/291996564_436787081787813_6867247883648533145_n.jpg',
                ].map((src, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden aspect-square ${i % 2 !== 0 ? 'mt-6' : ''}`}
                  >
                    <Image
                      src={src}
                      alt="Interior Schemes project detail"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-600"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values / How we work */}
      <section className="py-24 lg:py-32 bg-[var(--sand)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-8 h-px bg-[var(--teal)]" />
              <span
                className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Values
              </span>
              <div className="w-8 h-px bg-[var(--teal)]" />
            </div>
            <h2
              className="text-[var(--charcoal)] leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              }}
            >
              How We Work
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--stone)]">
            {[
              {
                number: '01',
                title: 'Listen First',
                desc: 'Every project begins with a deep conversation. We listen carefully to understand your vision, lifestyle, and aspirations before a single sketch is made.',
              },
              {
                number: '02',
                title: 'Design with Purpose',
                desc: 'Our designs are never arbitrary. Every element — material, colour, proportion — is chosen intentionally to serve both beauty and function.',
              },
              {
                number: '03',
                title: 'Execute Flawlessly',
                desc: 'We manage every detail of the project process, coordinating trades, suppliers, and timelines so you can trust the process completely.',
              },
            ].map((v, i) => (
              <AnimatedSection key={v.number} delay={i * 0.12}>
                <div className="bg-[var(--sand)] p-10 lg:p-14 h-full">
                  <div
                    className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.35em] uppercase mb-5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {v.number}
                  </div>
                  <h3
                    className="text-[var(--charcoal)] mb-4"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem' }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[var(--warm-gray)] font-light leading-relaxed text-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {v.desc}
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
