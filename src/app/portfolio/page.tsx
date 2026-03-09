import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse the Interior Schemes project portfolio — beautiful residential and commercial interior design across Australia, including Hampton style kitchens, marble bathrooms, and bespoke living spaces in Sydney, Melbourne, Brisbane and beyond.',
};

const allImages = [
  { src: '/images/314915270_645837483928221_8655797893048199487_n.jpg', category: 'Bathroom', alt: 'Marble bathroom vanity' },
  { src: '/images/306615966_5353311418037677_3863171647480930031_n.jpg', category: 'Kitchen', alt: 'Hampton style kitchen' },
  { src: '/images/277357894_1113260372796705_5890230152890945135_n.jpg', category: 'Outdoor', alt: 'Classic porch with lantern' },
  { src: '/images/252771494_316380016592927_8807306913493671885_n.jpg', category: 'Living', alt: 'Curated living space' },
  { src: '/images/291996564_436787081787813_6867247883648533145_n.jpg', category: 'Bedroom', alt: 'Elegant bedroom' },
  { src: '/images/312073040_548873043908211_8095510106361589166_n.jpg', category: 'Living', alt: 'Styled living room' },
  { src: '/images/348868852_130737400013944_6939289477807882251_n.jpg', category: 'Kitchen', alt: 'Kitchen detail' },
  { src: '/images/137664759_2798122187114458_7411224597314421607_n.jpg', category: 'Bedroom', alt: 'Bedroom interior' },
  { src: '/images/168400569_445550276536324_6986687949910837016_n.jpg', category: 'Living', alt: 'Living space design' },
  { src: '/images/140644142_857672944775969_5717414856713909775_n.jpg', category: 'Detail', alt: 'Interior detail' },
  { src: '/images/264498508_638208227364140_995133523292569229_n.jpg', category: 'Bathroom', alt: 'Bathroom design' },
  { src: '/images/275541525_139492201911336_6726682392778986318_n.jpg', category: 'Kitchen', alt: 'Kitchen styling' },
  { src: '/images/119458997_381696716157941_2855728403467852217_n.jpg', category: 'Living', alt: 'Living area' },
  { src: '/images/233968670_266641978630663_1257074986619189818_n.jpg', category: 'Outdoor', alt: 'Outdoor design' },
  { src: '/images/153423019_267170744925222_6375797646061842692_n.jpg', category: 'Bedroom', alt: 'Bedroom detail' },
  { src: '/images/158804930_472334083948387_6300709943305487447_n.jpg', category: 'Living', alt: 'Interior space' },
  { src: '/images/145047807_250319863268892_3417826043732141705_n.jpg', category: 'Kitchen', alt: 'Kitchen space' },
  { src: '/images/269688281_458199825690789_8638981731278935395_n.jpg', category: 'Bathroom', alt: 'Bathroom space' },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[360px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/314915270_645837483928221_8655797893048199487_n.jpg"
            alt="Interior Schemes portfolio"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--charcoal)]/58" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/50 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <AnimatedSection>
            <span
              className="text-[var(--teal-light)] text-[10px] tracking-[0.4em] uppercase block mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our Portfolio
            </span>
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 300,
              }}
            >
              Our Work
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="py-16 lg:py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-10">
            <p
              className="text-[var(--warm-gray)] font-light max-w-xl"
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
            >
              A selection of our residential and commercial projects — each one
              unique, each one crafted to reflect the people who live and work
              in them.
            </p>
          </AnimatedSection>

          {/* CSS columns masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
            {allImages.map((image, i) => (
              <AnimatedSection
                key={i}
                delay={Math.min(i * 0.04, 0.35)}
                className="mb-3 break-inside-avoid"
              >
                <div className="relative overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[var(--charcoal)]/0 group-hover:bg-[var(--charcoal)]/45 transition-colors duration-500 flex items-end p-5">
                    <span
                      className="text-white text-[9px] tracking-[0.35em] uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {image.category}
                    </span>
                  </div>
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
