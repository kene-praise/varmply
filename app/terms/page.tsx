import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Varmply',
  description: 'Read the Varmply Terms of Service. Understand your rights and responsibilities when using the platform.',
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
      {/* Section number + title */}
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

      {/* Content */}
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TermsPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* ── Hero ── */}
      <section
        className="py-24"
        style={{ borderTop: '1px solid #E4E4EC', paddingTop: '9rem' }}
      >
        <div
          className="mx-auto px-6 md:px-10"
          style={{ maxWidth: 1160 }}
        >
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
              Terms of Service
            </h1>

            <div
              className="flex flex-col gap-1 md:text-right"
              style={{ color: '#8888AA' }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Last Updated</span>
              <span className="text-sm font-semibold" style={{ color: '#4A4A6A' }}>April 2026</span>
            </div>
          </div>

          {/* Intro */}
          <p
            className="text-base"
            style={{ color: '#4A4A6A', lineHeight: 1.7, maxWidth: 680, marginTop: 8 }}
          >
            These Terms of Service govern your access to and use of the Varmply platform, website,
            and related services. By accessing or using the platform, you agree to be bound by these
            Terms. If you do not agree, you must not use the platform.
          </p>

          {/* Quick links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'About Varmply', 'Eligibility', 'User Accounts', 'Payments & Escrow',
              'Content', 'Prohibited Activities', 'Limitation of Liability',
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

          <Clause number="01" title="About Varmply">
            <p>
              Varmply is a digital platform designed to connect creators, influencers, artists,
              and brands for collaboration, sponsorship, and campaign opportunities.
            </p>
            <p>Varmply provides tools that enable users to:</p>
            <BulletList items={[
              'Discover collaboration opportunities',
              'Create campaigns',
              'Track campaign performance',
              'Facilitate campaign payments',
            ]} />
            <p>
              Varmply acts solely as a technology platform and does not act as an employer,
              agency, or representative of any user.
            </p>
          </Clause>

          <Clause number="02" title="Eligibility">
            <p>To use Varmply, you must:</p>
            <BulletList items={[
              'Be at least 18 years old',
              'Provide accurate registration information',
              'Have a professional account on social media as a creator',
            ]} />
          </Clause>

          <Clause number="03" title="User Accounts">
            <p>Users must create an account to access certain features. Users agree to:</p>
            <BulletList items={[
              'Provide accurate information',
              'Maintain the security of login credentials',
              'Notify Varmply of unauthorized account access',
            ]} />
          </Clause>

          <Clause number="04" title="Types of Users">
            <p>
              <span className="font-semibold" style={{ color: '#0F0F1A' }}>Creators</span> may:
            </p>
            <BulletList items={[
              'Apply to join campaigns',
              'Publish promotional content on third-party platforms',
              'Receive payments',
            ]} />
            <p className="pt-2">
              <span className="font-semibold" style={{ color: '#0F0F1A' }}>Sponsors or brands</span> may:
            </p>
            <BulletList items={[
              'Create campaigns',
              'Define campaign deliverables',
              'Fund campaign payments',
            ]} />
          </Clause>

          <Clause number="05" title="Campaign Agreements">
            <p>
              Campaigns represent agreements between creators and sponsors. Varmply provides tools
              to facilitate collaborations but does not guarantee the performance of either party.
            </p>
          </Clause>

          <Clause number="06" title="Payments and Escrow">
            <p>Varmply may facilitate payments between sponsors and creators, including:</p>
            <BulletList items={[
              'Campaign deposits',
              'Escrow holding periods',
              'Creator payouts after metrics are validated',
            ]} />
          </Clause>

          <Clause number="07" title="Platform Fees and Revenue Share">
            <p>Varmply may charge:</p>
            <BulletList items={[
              'Campaign facilitation fees',
              'Transaction processing fees',
              'Platform service fees',
              'Revenue share or commission',
            ]} />
            <p>Applicable fees will be communicated before transactions occur.</p>
          </Clause>

          <Clause number="08" title="Payment Processing">
            <p>
              Payments may be processed through third-party payment providers. Varmply does not
              store full payment card information and may deduct platform fees before releasing
              payments.
            </p>
          </Clause>

          <Clause number="09" title="Content Ownership">
            <p>
              Creators retain ownership of content published on third-party platforms. Varmply does
              not host or store creator content but may analyze publicly available campaign
              performance data.
            </p>
          </Clause>

          <Clause number="10" title="Social Media Integration and Data Access">
            <p>
              Users may connect social media accounts to Varmply. By doing so, users authorize
              Varmply to access permitted information including:
            </p>
            <BulletList items={[
              'Public profile data',
              'Follower counts',
              'Engagement metrics',
            ]} />
          </Clause>

          <Clause number="11" title="Campaign Performance Tracking">
            <p>
              Campaign performance is tracked using publicly available data or authorized
              integrations including:
            </p>
            <BulletList items={[
              'Engagement metrics',
              'Impressions and reach',
              'Views or video plays',
            ]} />
          </Clause>

          <Clause number="12" title="Creator Deliverables">
            <p>Creators must:</p>
            <BulletList items={[
              'Follow campaign guidelines',
              'Publish content within agreed timelines',
              'Comply with advertising regulations',
            ]} />
          </Clause>

          <Clause number="13" title="Sponsor Payment Protection">
            <p>
              Sponsors creating campaigns on Varmply agree to fund campaign payments in accordance
              with the campaign terms. Sponsors are required to deposit campaign funds into an
              escrow system before a campaign begins — ensuring that creators who successfully
              complete their deliverables are able to receive payment.
            </p>
            <p>Sponsors are responsible for ensuring that:</p>
            <BulletList items={[
              'Campaign instructions and deliverables are clearly defined',
              'Campaign requirements comply with applicable laws and advertising standards',
              'If a campaign concludes with remaining or unused funds, such funds are refunded to the sponsor',
            ]} />
          </Clause>

          <Clause number="14" title="Fraud Prevention and Platform Integrity">
            <p>Users must not:</p>
            <BulletList items={[
              'Inflate engagement metrics',
              'Use fake followers',
              'Misrepresent social media statistics',
              'Manipulate campaign data',
            ]} />
          </Clause>

          <Clause number="15" title="Prohibited Activities">
            <p>Users must not:</p>
            <BulletList items={[
              'Provide false information',
              'Violate intellectual property rights',
              'Harass other users',
              'Use the platform for illegal purposes',
            ]} />
          </Clause>

          <Clause number="16" title="Advertising Compliance">
            <p>
              Creators and sponsors must comply with applicable advertising laws and disclosure
              regulations in all jurisdictions where their content is distributed.
            </p>
          </Clause>

          <Clause number="17" title="Intellectual Property">
            <p>
              All intellectual property related to the Varmply platform — including the name,
              logo, design, and technology — belongs to Varmply or its licensors. Unauthorized
              use is prohibited.
            </p>
          </Clause>

          <Clause number="18" title="No Agency or Guarantee">
            <p>
              Varmply acts solely as a technology platform facilitating connections between users.
              Varmply does not guarantee campaign outcomes, creator performance, or sponsor
              participation.
            </p>
          </Clause>

          <Clause number="19" title="Account Suspension or Termination">
            <p>
              Varmply may suspend or terminate accounts that violate these Terms, engage in
              fraudulent activities, or otherwise compromise platform integrity.
            </p>
          </Clause>

          <Clause number="20" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Varmply is not liable for disputes between
              users, loss of profits, or indirect damages arising from use of the platform.
            </p>
          </Clause>

          <Clause number="21" title="Indemnification">
            <p>
              Users agree to indemnify and hold Varmply harmless from any claims, damages, or
              expenses arising from misuse of the platform or violations of these Terms.
            </p>
          </Clause>

          <Clause number="22" title="Dispute Resolution">
            <p>
              Users are encouraged to resolve disputes directly. Varmply may provide tools to
              assist but is not obligated to mediate disputes between parties.
            </p>
          </Clause>

          <Clause number="23" title="Third-Party Services">
            <p>
              The platform may integrate with third-party services such as payment processors or
              social media platforms. Varmply is not responsible for the practices or availability
              of these external services.
            </p>
          </Clause>

          <Clause number="24" title="Privacy">
            <p>
              Use of the platform is governed by the{' '}
              <Link
                href="/privacy"
                className="font-semibold underline underline-offset-2"
                style={{ color: '#7C3BED' }}
              >
                Varmply Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </Clause>

          <Clause number="25" title="Changes to the Terms">
            <p>
              Varmply may update these Terms periodically. Continued use of the platform after
              updates are published constitutes acceptance of the revised Terms.
            </p>
          </Clause>

          <Clause number="26" title="Governing Law">
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any
              disputes shall be subject to the jurisdiction of Nigerian courts.
            </p>
          </Clause>

          <Clause number="27" title="Contact Information">
            <p>For questions regarding these Terms, contact us at:</p>
            <p>
              <a
                href="mailto:legal@varmply.com"
                className="font-semibold"
                style={{ color: '#7C3BED' }}
              >
                legal@varmply.com
              </a>
            </p>
          </Clause>

          {/* Bottom nav */}
          <div
            className="pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ borderTop: '1px solid #E4E4EC' }}
          >
            <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: '#8888AA' }}>
              Also see our{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-2 transition-colors"
                style={{ color: '#7C3BED' }}
              >
                Privacy Policy
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
