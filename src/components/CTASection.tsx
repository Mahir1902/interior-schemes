import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/314915270_645837483928221_8655797893048199487_n.jpg"
          alt="Luxury interior — ready to transform your space"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--charcoal)]/72" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <AnimatedSection>
          <span
            className="text-[var(--teal-light)] text-[12px] font-semibold tracking-[0.5em] uppercase block mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Let&apos;s Create Something Beautiful
          </span>
          <h2
            className="text-white mb-8 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              fontWeight: 300,
            }}
          >
            Ready to <em style={{ color: 'var(--teal-light)' }}>Transform</em>{' '}
            Your Space?
          </h2>
          <p
            className="text-white/55 font-light leading-relaxed max-w-md mx-auto mb-12"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
          >
            Whether you&apos;re renovating, building new, or simply refreshing
            a room — we&apos;d love to work with you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--teal)] text-white text-[10px] tracking-[0.35em] uppercase px-10 py-4 hover:bg-[var(--teal-dark)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/40 text-white text-[10px] tracking-[0.35em] uppercase px-10 py-4 hover:border-white transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Portfolio
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
