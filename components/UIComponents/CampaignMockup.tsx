'use client';

import { CheckCircle, XCircle, Clock, Users, TrendingUp } from 'lucide-react';

interface CampaignItem {
  brand: string;
  amount: string;
  status: 'eligible' | 'not-eligible' | 'joined' | 'closed';
  deadline: string;
  applicants: number;
}

const campaigns: CampaignItem[] = [
  { brand: 'Paystack', amount: '₦25,000', status: 'eligible', deadline: '12 days left', applicants: 34 },
  { brand: 'PiggyVest', amount: '₦18,000', status: 'eligible', deadline: '7 days left', applicants: 58 },
  { brand: 'Flutterwave', amount: '₦40,000', status: 'not-eligible', deadline: '5 days left', applicants: 91 },
];

const statusConfig = {
  eligible: { label: 'Eligible', color: '#16A34A', bg: '#F0FDF4' },
  'not-eligible': { label: 'Not Eligible', color: '#DC2626', bg: '#FEF2F2' },
  joined: { label: 'Joined', color: '#7C3BED', bg: '#EDE9FF' },
  closed: { label: 'Closed', color: '#8888AA', bg: '#F0F0F4' },
};

export default function CampaignMockup() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '340px' }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center justify-between bg-[#F7F7F9]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-xs text-[#8888AA] font-medium">Campaign Marketplace</span>
        <div className="w-16" />
      </div>

      {/* Search bar */}
      <div className="px-4 pt-3 pb-2">
        <div className="bg-[#F0F0F4] rounded-lg px-3 py-2 text-xs text-[#8888AA] flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          Search campaigns...
        </div>
      </div>

      {/* Campaign list */}
      <div className="px-4 pb-4 flex flex-col gap-2.5">
        {campaigns.map((c, i) => {
          const s = statusConfig[c.status];
          return (
            <div
              key={i}
              className="bg-white rounded-xl p-3 border border-[#E4E4EC] hover:border-[#D1D1DE] transition-all"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="w-6 h-6 rounded-md bg-[#EDE9FF] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[#7C3BED]">{c.brand[0]}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#0F0F1A]">{c.brand}</span>
                  </div>
                  <span
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#0F0F1A' }}
                  >
                    {c.amount}
                  </span>
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-1 rounded-full"
                  style={{ color: s.color, background: s.bg }}
                >
                  {s.label}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-[#8888AA]">
                <span className="flex items-center gap-1">
                  <Clock size={9} /> {c.deadline}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={9} /> {c.applicants} applied
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
