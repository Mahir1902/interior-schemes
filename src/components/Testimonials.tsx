'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote:
      'Interior Schemes completely transformed our home. The attention to detail, the ability to understand our brief, and the final result exceeded every expectation. We couldn\'t be happier.',
    author: 'Sarah & James M.',
    location: 'Sydney, NSW',
  },
  {
    quote:
      'Working with Interior Schemes was an absolute joy. They managed the entire project seamlessly and created a space that we are truly proud to call home.',
    author: 'Emma R.',
    location: 'Melbourne, VIC',
  },
  {
    quote:
      'The team at Interior Schemes brought an incredible vision to our commercial space. Our clients constantly comment on how beautiful and welcoming it feels.',
    author: 'Michael T.',
    location: 'Brisbane, QLD',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  return (
    <section className="py-24 lg:py-36 bg-[var(--charcoal)] relative overflow-hidden">
      {/* Decorative large S in background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none text-white/[0.025] pr-8"
        aria-hidden="true"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(200px, 35vw, 400px)' }}
      >
        S
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-14">
            <div className="w-8 h-px bg-[var(--teal)]" />
            <span
              className="text-[var(--teal)] text-[12px] font-semibold tracking-[0.4em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Client Stories
            </span>
          </div>
        </AnimatedSection>

        {/* Quotation mark */}
        <div
          className="text-[var(--teal)] leading-none mb-4 opacity-60 select-none"
          aria-hidden="true"
          style={{ fontFamily: 'var(--font-display)', fontSize: '6rem' }}
        >
          &ldquo;
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white italic leading-relaxed mb-10"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                fontWeight: 300,
              }}
            >
              {testimonials[current].quote}
            </p>

            <div>
              <div
                className="text-white font-medium tracking-wide"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {testimonials[current].author}
              </div>
              <div
                className="text-white/40 text-[10px] tracking-[0.35em] uppercase mt-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {testimonials[current].location}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-14">
          <button
            onClick={prev}
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-[var(--teal)] hover:text-[var(--teal)] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Progress bars */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-px transition-all duration-400 ${
                  i === current
                    ? 'w-12 bg-[var(--teal)]'
                    : 'w-6 bg-white/25 hover:bg-white/50 transition-all duration-300'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:border-[var(--teal)] hover:text-[var(--teal)] transition-all duration-300"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
