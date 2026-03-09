import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  themeColor: '#5BBFC0',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://interiorschemes.com.au'),
  title: {
    default: 'Interior Schemes | Luxury Interior Design Studio',
    template: '%s | Interior Schemes',
  },
  description:
    'Boutique interior design studio crafting beautiful, liveable spaces across Australia. Residential and commercial design services.',
  keywords: [
    'interior design',
    'interior designer',
    'Australia',
    'residential design',
    'commercial design',
    'luxury interiors',
    'Hampton style',
    'Sydney interior designer',
    'Melbourne interior designer',
  ],
  openGraph: {
    title: 'Interior Schemes | Luxury Interior Design Studio',
    description: 'Boutique interior design studio crafting beautiful, liveable spaces across Australia.',
    type: 'website',
    url: 'https://interiorschemes.com.au',
    siteName: 'Interior Schemes',
    locale: 'en_AU',
    images: [
      {
        url: '/images/306615966_5353311418037677_3863171647480930031_n.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Schemes — Hampton style kitchen design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Schemes | Luxury Interior Design Studio',
    description: 'Boutique interior design studio crafting beautiful, liveable spaces across Australia.',
    images: ['/images/306615966_5353311418037677_3863171647480930031_n.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://interiorschemes.com.au/#organization',
      name: 'Interior Schemes',
      url: 'https://interiorschemes.com.au',
      logo: {
        '@type': 'ImageObject',
        url: 'https://interiorschemes.com.au/images/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@interiorschemes.com.au', // TODO: replace with real email
        telephone: '+61400000000', // TODO: replace with real phone
        contactType: 'customer service',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://interiorschemes.com.au/#localbusiness',
      name: 'Interior Schemes',
      description: 'Boutique interior design studio crafting beautiful, liveable spaces across Australia.',
      url: 'https://interiorschemes.com.au',
      telephone: '+61400000000', // TODO: replace with real phone
      email: 'hello@interiorschemes.com.au', // TODO: replace with real email
      areaServed: ['Sydney', 'Melbourne', 'Brisbane', 'Australia'],
      priceRange: '$$$$',
      image: 'https://interiorschemes.com.au/images/306615966_5353311418037677_3863171647480930031_n.jpg',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
