'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  const isLight = !isHome || scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--cream)]/96 backdrop-blur-sm shadow-[0_1px_0_0_rgba(30,30,28,0.08)]'
            : isHome
            ? 'bg-transparent'
            : 'bg-[var(--cream)]/96 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Interior Schemes — Home">
            <Image
              src="/images/logo.png"
              alt="Interior Schemes"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 group ${
                    isLight
                      ? active
                        ? 'text-[var(--teal)]'
                        : 'text-[var(--charcoal)] hover:text-[var(--teal)]'
                      : active
                      ? 'text-[var(--teal-light)]'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[var(--teal)] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-[var(--teal)] text-white text-[10px] tracking-[0.3em] uppercase px-6 py-2.5 hover:bg-[var(--teal-dark)] transition-colors duration-300 ml-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${
                menuOpen
                  ? 'rotate-45 translate-y-[8.5px] bg-[var(--charcoal)]'
                  : isLight
                  ? 'bg-[var(--charcoal)]'
                  : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : isLight ? 'bg-[var(--charcoal)]' : 'bg-white'
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 origin-center ${
                menuOpen
                  ? '-rotate-45 -translate-y-[8.5px] bg-[var(--charcoal)]'
                  : isLight
                  ? 'bg-[var(--charcoal)]'
                  : 'bg-white'
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--cream)] flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="block text-5xl italic text-[var(--charcoal)] hover:text-[var(--teal)] transition-colors duration-300 text-center"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-4"
            >
              <Link
                href="/contact"
                className="bg-[var(--teal)] text-white text-[10px] tracking-[0.35em] uppercase px-10 py-3.5 inline-block hover:bg-[var(--teal-dark)] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
