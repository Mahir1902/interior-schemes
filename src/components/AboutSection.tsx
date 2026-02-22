import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--sand)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Image column */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/277357894_1113260372796705_5890230152890945135_n.jpg"
                  alt="Interior Schemes — design philosophy"
                  fill
                  className="object-cover hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              {/* Decorative teal frame */}
              <div className="absolute -bottom-5 -right-5 w-40 h-40 border border-[var(--teal)] -z-10 hidden lg:block" />
              {/* Floating stat badge */}
              <div className="absolute bottom-8 -right-6 bg-[var(--charcoal)] text-white p-6 shadow-2xl hidden lg:block">
                <div
                  className="leading-none text-[var(--teal)]"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '3rem' }}
                >
                  10+
                </div>
                <div
                  className="text-white/50 text-[9px] tracking-[0.3em] uppercase mt-2"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Years of Experience
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text column */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[var(--teal)]" />
              <span
                className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                About Us
              </span>
            </div>

            <h2
              className="text-[var(--charcoal)] mb-6 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              Design That <em>Tells Your Story</em>
            </h2>

            <p
              className="text-[var(--warm-gray)] font-light leading-relaxed mb-5"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
            >
              Interior Schemes is a boutique interior design studio with a
              passion for creating spaces that are as beautiful as they are
              liveable. Based in Australia, we work with clients across
              residential and commercial projects to craft interiors that feel
              genuinely personal.
            </p>
            <p
              className="text-[var(--warm-gray)] font-light leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
            >
              Our approach combines refined aesthetics with practical
              functionality — because the most beautiful spaces are the ones
              you actually want to live in.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-[var(--teal)] pl-4">
                  <div
                    className="text-[var(--charcoal)] leading-none"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[var(--warm-gray)] text-[9px] tracking-[0.3em] uppercase mt-1.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-4 text-(--charcoal) text-[10px] tracking-[0.35em] uppercase group hover:text-[var(--teal)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Learn More About Us
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
