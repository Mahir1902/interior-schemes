import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-14">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Interior Schemes"
              width={72}
              height={72}
              className="mb-6 brightness-0 invert opacity-80"
            />
            <p className="text-white/45 font-light text-sm leading-relaxed max-w-xs"
               style={{ fontFamily: 'var(--font-body)' }}>
              Boutique interior design studio creating beautiful, liveable
              spaces across Australia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[var(--teal)] text-[10px] tracking-[0.35em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)' }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm font-light transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--teal)] text-[10px] tracking-[0.35em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)' }}>
              Get in Touch
            </h4>
            <div className="space-y-3 text-white/50 font-light text-sm"
                 style={{ fontFamily: 'var(--font-body)' }}>
              <p>hello@interiorschemes.com.au</p>
              <p>+61 400 000 000</p>
              <p>Australia — servicing nationwide</p>
            </div>
            <div className="flex gap-5 mt-8">
              {['Instagram', 'Facebook', 'Pinterest'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-[0.25em] text-white/30 hover:text-[var(--teal)] transition-colors duration-200 uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Interior Schemes. All rights reserved.
          </p>
          <p className="text-white/20 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}
