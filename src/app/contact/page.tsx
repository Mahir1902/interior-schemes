import type { Metadata } from 'next';
import Script from 'next/script';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Interior Schemes — we'd love to discuss your design project.",
};

const contactDetails = [
  { label: 'Email', value: 'hello@interiorschemes.com.au' },
  { label: 'Phone', value: '+61 400 000 000' },
  { label: 'Location', value: 'Australia — servicing nationwide' },
  { label: 'Hours', value: 'Mon–Fri, 9am–5pm AEST' },
];

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen bg-[var(--cream)]">
      <section className="py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — contact info */}
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-8 h-px bg-[var(--teal)]" />
                <span
                  className="text-[var(--teal)] text-[10px] tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Get in Touch
                </span>
              </div>
              <h1
                className="text-[var(--charcoal)] mb-8 leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                }}
              >
                Let&apos;s Start a <em>Conversation</em>
              </h1>
              <p
                className="text-[var(--warm-gray)] font-light leading-relaxed mb-14"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
              >
                Ready to transform your space? We&apos;d love to hear about
                your project. Fill in the form and one of our designers will be
                in touch within 24 hours.
              </p>

              <div className="space-y-8">
                {contactDetails.map((item) => (
                  <div key={item.label} className="border-l-2 border-[var(--teal)] pl-5">
                    <div
                      className="text-[var(--teal)] text-[9px] tracking-[0.4em] uppercase mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[var(--charcoal)] font-light"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <div className="mt-16 pt-14 border-t border-[var(--stone)]">
                <p
                  className="text-[var(--charcoal)] italic leading-relaxed"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}
                >
                  &ldquo;Great design is never just about how something
                  looks — it&apos;s about how it makes you feel.&rdquo;
                </p>
                <div
                  className="text-[var(--warm-gray)] text-[10px] tracking-[0.3em] uppercase mt-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Interior Schemes
                </div>
              </div>
            </AnimatedSection>

            {/* Right — GHL form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="bg-white shadow-sm overflow-hidden"
                style={{ minHeight: '600px', height: 'auto', borderRadius: '4px' }}
              >
                <iframe
                  src="https://api.webl4b.com/widget/form/1XAlQoLpifROHIxONlLo"
                  style={{ width: '100%', minHeight: '967px', height: '967px', border: 'none', borderRadius: '4px', display: 'block' }}
                  id="inline-1XAlQoLpifROHIxONlLo"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Interior form"
                  data-height="967"
                  data-layout-iframe-id="inline-1XAlQoLpifROHIxONlLo"
                  data-form-id="1XAlQoLpifROHIxONlLo"
                  title="Interior form"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* GHL form embed script */}
      <Script
        src="https://api.webl4b.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
