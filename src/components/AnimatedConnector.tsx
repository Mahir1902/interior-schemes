'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedConnector({ index }: { index: number }) {
  const refH = useRef(null);
  const refV = useRef(null);
  const isInViewH = useInView(refH, { once: true, margin: '0px' });
  const isInViewV = useInView(refV, { once: true, margin: '0px' });

  return (
    <>
      {/* Desktop horizontal connector */}
      <div ref={refH} className="hidden lg:block flex-1 mx-6 self-start mt-6 overflow-hidden">
        <motion.div
          className="h-px bg-[var(--teal)]/50 origin-left"
          animate={{ scaleX: isInViewH ? 1 : 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: 'easeInOut' }}
        />
      </div>
      {/* Mobile vertical connector */}
      <motion.div
        ref={refV}
        className="lg:hidden ml-6 w-px h-8 bg-[var(--teal)]/30 origin-top"
        animate={{ scaleY: isInViewV ? 1 : 0 }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: 'easeInOut' }}
      />
    </>
  );
}
