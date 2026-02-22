import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Interior Schemes | Luxury Interior Design Studio',
    template: '%s | Interior Schemes',
  },
  description:
    'Boutique interior design studio crafting beautiful, liveable spaces across Australia. Residential and commercial design services.',
  keywords: ['interior design', 'interior designer', 'Australia', 'residential design', 'commercial design', 'luxury interiors'],
  openGraph: {
    title: 'Interior Schemes | Luxury Interior Design Studio',
    description: 'Boutique interior design studio crafting beautiful, liveable spaces across Australia.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        <a href="#main-content" className="skip-link" style={{ fontFamily: 'var(--font-body)' }}>
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
        {children}
        </div>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
