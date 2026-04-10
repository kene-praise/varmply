import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Varmply',
  description: 'Learn how Varmply collects, uses, and protects your personal data. Aligned with the Nigeria Data Protection Act 2023.',
};

// ─── Section label chip ───────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
      style={{ background: 'rgba(124,59,237,0.08)', color: '#7C3BED' }}
    >
      {children}
    </span>
  );
}

// ─── Individual clause section ────────────────────────────────────────────────
function Clause({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="py-10 flex flex-col md:flex-row md:gap-16"
      style={{ borderTop: '1px solid #E4E4EC' }}
    >
      <div className="md:w-64 shrink-0 mb-4 md:mb-0">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.18em] block mb-1"
          style={{ color: '#7C3BED' }}
        >
          {number}
        </span>
        <h2
          className="text-base font-bold"
          style={{ color: '#0F0F1A', lineHeight: 1.4 }}
        >
          {title}
        </h2>
      </div>

      <div
        className="flex-1 text-sm leading-relaxed space-y-3"
        style={{ color: '#4A4A6A', maxWidth: 620 }}
      >
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: '#7C3BED', opacity: 0.5 }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Info category block ──────────────────────────────────────────────────────
function DataCategory({ label, items }: { label: string; items: string[] }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: 'rgba(124,59,237,0.04)',
        border: '1px solid rgba(124,59,237,0.10)',
      }}
    >
      <p
        className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
        style={{ color: '#7C3BED' }}
      >
        {label}
      </p>
      <BulletList items={items} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* ── Hero ── */}
      <section
        className="py-24"
        style={{ borderTop: '1px solid #E4E4EC', paddingTop: '9rem' }}
      >
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 1160 }}>
          <SectionLabel>Legal</SectionLabel>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.0,
                color: '#0F0F1A',
                maxWidth: 560,
              }}
            >
              Privacy Policy
            </h1>

            <div className="flex flex-col gap-1 md:text-right" style={{ color: '#8888AA' }}>
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Last Updated</span>
              <span className="text-sm font-semibold" style={{ color: '#4A4A6A' }}>April 2026</span>
            </div>
          </div>

          <p
            className="text-base"
            style={{ color: '#4A4A6A', lineHeight: 1.7, maxWidth: 680, marginTop: 8 }}
          >
            Varmply respects your privacy and is committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use the platform. It aligns with the{' '}
            <span className="font-semibold" style={{ color: '#0F0F1A' }}>
              Nigeria Data Protection Act 2023 (NDPA)
            </span>{' '}
            and internationally recognized privacy principles.
          </p>

          {/* Quick links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'Data We Collect', 'How We Use It', 'Sharing', 'Data Retention',
              'Your Rights', 'Security', 'Contact Us',
            ].map((label) => (
              <span
                key={label}
                className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{
                  background: 'rgba(124,59,237,0.05)',
                  color: '#7C3BED',
                  border: '1px solid rgba(124,59,237,0.14)',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clauses ── */}
      <section className="pb-24">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 1160 }}>

          <Clause number="01" title="Who We Are">
            <p>
              Varmply is a digital platform that connects creators, influencers, musicians, and
              brands to collaborate on campaigns and sponsorship opportunities. For the purposes
              of data protection laws, Varmply acts as the{' '}
              <span className="font-semibold" style={{ color: '#0F0F1A' }}>Data Controller</span>{' '}
              of personal data collected through the platform.
            </p>
            <div
              className="rounded-xl p-4 mt-2"
              style={{
                background: 'rgba(124,59,237,0.04)',
                border: '1px solid rgba(124,59,237,0.10)',
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#7C3BED' }}>
                Contact
              </p>
              <p>Email: <a href="mailto:privacy@varmply.com" className="font-semibold" style={{ color: '#7C3BED' }}>privacy@varmply.com</a></p>
              <p>Website: <span className="font-medium" style={{ color: '#0F0F1A' }}>www.varmply.com</span></p>
            </div>
          </Clause>

          <Clause number="02" title="Information We Collect">
            <p>
              We collect personal information necessary to operate and improve the Varmply
              platform. This includes:
            </p>
            <div className="space-y-3 pt-1">
              <DataCategory
                label="Information You Provide"
                items={[
                  'Full name',
                  'Email address',
                  'Phone number',
                  'Username and password',
                  'Profile photo',
                  'Creator bio or portfolio',
                  'Social media handles',
                  'Business information (for brands or sponsors)',
                ]}
              />
              <DataCategory
                label="Campaign and Collaboration Data"
                items={[
                  'Campaign details',
                  'Creator deliverables',
                  'Engagement and performance metrics',
                  'Sponsorship agreements',
                ]}
              />
              <DataCategory
                label="Payment and Financial Information"
                items={[
                  'Payment account details',
                  'Transaction history',
                  'Campaign payout records',
                ]}
              />
              <DataCategory
                label="Automatically Collected Data"
                items={[
                  'IP address',
                  'Device information',
                  'Browser type and operating system',
                  'Pages visited',
                  'Platform usage data',
                ]}
              />
            </div>
            <p className="text-xs" style={{ color: '#8888AA' }}>
              Payment processing may be handled through third-party providers.
            </p>
          </Clause>

          <Clause number="03" title="Cookies and Tracking Technologies">
            <p>
              Varmply uses cookies and similar technologies to maintain login sessions, analyze
              usage patterns, improve website performance, and personalize user experience.
              Users can control cookies through their browser settings.
            </p>
          </Clause>

          <Clause number="04" title="How We Use Your Information">
            <div className="space-y-3">
              <div>
                <p className="font-semibold mb-1" style={{ color: '#0F0F1A' }}>Platform Operations</p>
                <p>Account creation, connecting creators with brands, managing campaigns, processing payments.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#0F0F1A' }}>Platform Improvement</p>
                <p>Monitoring usage patterns, improving features, detecting fraud.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#0F0F1A' }}>Communication</p>
                <p>Platform updates, customer support, and marketing communications where permitted.</p>
              </div>
            </div>
          </Clause>

          <Clause number="05" title="Legal Basis for Processing">
            <p>
              Varmply processes personal data based on user consent, contractual necessity, legal
              obligations, and legitimate business interests. Users may withdraw consent where
              processing is based on consent.
            </p>
          </Clause>

          <Clause number="06" title="Sharing Your Information">
            <p>
              Varmply does not sell personal information. Information may be shared with:
            </p>
            <BulletList items={[
              'Other platform users for campaign collaboration',
              'Service providers such as payment processors, hosting providers, and analytics services',
              'Relevant authorities where required by law',
            ]} />
          </Clause>

          <Clause number="07" title="Data Retention">
            <p>
              Personal data is retained only as long as necessary to provide services, comply
              with legal obligations, resolve disputes, and enforce agreements. Users may request
              deletion of their data at any time.
            </p>
          </Clause>

          <Clause number="08" title="Data Security">
            <p>
              Varmply implements reasonable security measures including:
            </p>
            <BulletList items={[
              'Encryption of sensitive data',
              'Secure cloud infrastructure',
              'Restricted data access controls',
              'Active monitoring systems',
            ]} />
            <p>
              However, no system can guarantee complete security. We encourage users to maintain
              strong passwords and report suspicious activity immediately.
            </p>
          </Clause>

          <Clause number="09" title="International Data Transfers">
            <p>
              Because Varmply may operate globally, data may be transferred to countries outside
              the user's country of residence. Appropriate safeguards are implemented to protect
              personal data during such transfers.
            </p>
          </Clause>

          <Clause number="10" title="Your Privacy Rights">
            <p>
              Users may have rights to:
            </p>
            <BulletList items={[
              'Access the personal data we hold about you',
              'Correct inaccurate or incomplete data',
              'Request deletion of your data',
              'Restrict or object to processing',
              'Request portability of your data',
            ]} />
            <p>
              Requests may be sent to{' '}
              <a
                href="mailto:privacy@varmply.com"
                className="font-semibold underline underline-offset-2"
                style={{ color: '#7C3BED' }}
              >
                privacy@varmply.com
              </a>
              .
            </p>
          </Clause>

          <Clause number="11" title="Children's Privacy">
            <p>
              Varmply services are intended for individuals aged 18 or older. We do not
              knowingly collect personal data from minors. If you believe a minor has provided
              us with personal data, please contact us immediately.
            </p>
          </Clause>

          <Clause number="12" title="Data Breach Notification">
            <p>
              If a data breach occurs, Varmply will investigate promptly and notify relevant
              authorities and affected users where required by applicable law.
            </p>
          </Clause>

          <Clause number="13" title="Third-Party Links">
            <p>
              The platform may contain links to external websites. Varmply is not responsible
              for the privacy practices or content of third-party sites. We recommend reviewing
              the privacy policy of any external site you visit.
            </p>
          </Clause>

          <Clause number="14" title="Updates to This Privacy Policy">
            <p>
              This Privacy Policy may be updated periodically. Updates will be reflected by
              revising the "Last Updated" date at the top of this page. Continued use of the
              platform after updates constitutes acceptance of the revised policy.
            </p>
          </Clause>

          <Clause number="15" title="Contact Us">
            <p>For questions, concerns, or data requests regarding this Privacy Policy:</p>
            <div
              className="rounded-xl p-4 mt-2"
              style={{
                background: 'rgba(124,59,237,0.04)',
                border: '1px solid rgba(124,59,237,0.10)',
              }}
            >
              <p className="font-semibold mb-1" style={{ color: '#0F0F1A' }}>Varmply</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:privacy@varmply.com"
                  className="font-semibold"
                  style={{ color: '#7C3BED' }}
                >
                  privacy@varmply.com
                </a>
              </p>
              <p>Website: <span className="font-medium" style={{ color: '#0F0F1A' }}>www.varmply.com</span></p>
            </div>
          </Clause>

          {/* Bottom nav */}
          <div
            className="pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ borderTop: '1px solid #E4E4EC' }}
          >
            <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: '#8888AA' }}>
              Also see our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-2 transition-colors"
                style={{ color: '#7C3BED' }}
              >
                Terms of Service
              </Link>
            </p>
            <p className="text-xs" style={{ color: '#8888AA' }}>
              © 2026 Varmply. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
