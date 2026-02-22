'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const images = [
  {
    src: '/images/314915270_645837483928221_8655797893048199487_n.jpg',
    alt: 'Marble bathroom vanity with timber paneling',
    category: 'Bathroom',
  },
  {
    src: '/images/306615966_5353311418037677_3863171647480930031_n.jpg',
    alt: 'Hampton style kitchen',
    category: 'Kitchen',
  },
  {
    src: '/images/277357894_1113260372796705_5890230152890945135_n.jpg',
    alt: 'Classic porch with lantern lighting',
    category: 'Outdoor',
  },
  {
    src: '/images/252771494_316380016592927_8807306913493671885_n.jpg',
    alt: 'Curated living space',
    category: 'Living',
  },
  {
    src: '/images/291996564_436787081787813_6867247883648533145_n.jpg',
    alt: 'Elegant bedroom design',
    category: 'Bedroom',
  },
  {
    src: '/images/312073040_548873043908211_8095510106361589166_n.jpg',
    alt: 'Styled living room',
    category: 'Living',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 lg:py-36 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-(--teal)" />
              <span
                className="text-(--teal) text-[12px] font-semibold tracking-[0.4em] uppercase"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our Work
              </span>
            </div>
            <h2
              className="text-[var(--charcoal)] leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              }}
            >
              Featured <em>Projects</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-4 text-[var(--charcoal)] text-[10px] tracking-[0.35em] uppercase group hover:text-[var(--teal)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Full Portfolio
              <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="relative overflow-hidden group aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-[var(--charcoal)]/0 group-hover:bg-[var(--charcoal)]/45 transition-colors duration-500 flex items-end p-5">
                  <span
                    className="text-white text-[9px] tracking-[0.35em] uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {img.category}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
