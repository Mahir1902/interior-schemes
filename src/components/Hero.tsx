'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/306615966_5353311418037677_3863171647480930031_n.jpg"
          alt="Interior Schemes — Hampton style kitchen design"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover scale-[1.03]"
          style={{ transformOrigin: 'center bottom' }}
        />
        {/* layered overlays for readability + mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)]/70 via-[var(--charcoal)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-4 mb-7"
          >
            <div className="w-10 h-px bg-[var(--teal)]" />
            <span
              className="text-[var(--teal-light)] text-[10px] tracking-[0.45em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Interior Design Studio
            </span>
          </motion.div>

          {/* Headline — single h1 with staggered word spans */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
              fontWeight: 300,
            }}
          >
            <span className="block overflow-hidden mb-3">
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="block text-white leading-[0.88]"
              >
                Transform
              </motion.span>
            </span>
            <span className="block overflow-hidden mb-3">
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
                className="block leading-[0.88]"
                style={{
                  color: 'var(--teal-light)',
                  fontStyle: 'italic',
                }}
              >
                Your
              </motion.span>
            </span>
            <span className="block overflow-hidden mb-8">
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.81, ease: [0.22, 1, 0.36, 1] }}
                className="block text-white leading-[0.88]"
              >
                Space
              </motion.span>
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-white/65 font-light leading-relaxed max-w-md mb-10"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
          >
            Bespoke interior design that reflects your personality, elevates
            your lifestyle, and turns every room into a curated experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/portfolio"
              className="bg-[var(--teal)] text-white text-[10px] tracking-[0.35em] uppercase px-9 py-4 hover:bg-[var(--teal-dark)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="border border-white/50 text-white text-[10px] tracking-[0.35em] uppercase px-9 py-4 hover:border-[var(--teal)] hover:text-[var(--teal-light)] transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="text-white/35 text-[9px] tracking-[0.4em] uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
