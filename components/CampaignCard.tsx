'use client';

import { Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Status = 'eligible' | 'not-eligible' | 'joined' | 'closed';

interface CampaignCardProps {
  brand: string;
  category: string;
  amount: string;
  status: Status;
  deadline: string;
  applicants: number;
  description: string;
  requirements?: string[];
}

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  eligible: { label: 'Eligible', color: '#16A34A', bg: '#F0FDF4' },
  'not-eligible': { label: 'Not Eligible', color: '#DC2626', bg: '#FEF2F2' },
  joined: { label: 'Joined', color: '#7C5CFC', bg: '#EDE9FF' },
  closed: { label: 'Closed', color: '#8888AA', bg: '#F0F0F4' },
};

export default function CampaignCard({
  brand,
  category,
  amount,
  status,
  deadline,
  applicants,
  description,
}: CampaignCardProps) {
  const s = statusConfig[status];

  return (
    <div className="card-hover bg-white rounded-2xl p-6 border border-[#E4E4EC] flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#EDE9FF] flex items-center justify-center">
            <span className="text-sm font-bold text-[#7C5CFC]">{brand[0]}</span>
          </div>
          <div>
            <p className="font-semibold text-[#0F0F1A] text-sm">{brand}</p>
            <p className="text-xs text-[#8888AA]">{category}</p>
          </div>
        </div>
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
          style={{ color: s.color, background: s.bg }}
        >
          {s.label}
        </span>
      </div>

      {/* Amount */}
      <p
        className="text-2xl font-bold text-[#0F0F1A] mb-2"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        {amount}
      </p>

      {/* Description */}
      <p className="text-sm text-[#4A4A6A] leading-relaxed mb-4 flex-1">{description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-[#8888AA] mb-4">
        <span className="flex items-center gap-1.5">
          <Clock size={12} /> {deadline}
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={12} /> {applicants} applied
        </span>
      </div>

      {/* CTA */}
      <Link
        href="/creators"
        className={`flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-200 ${
          status === 'eligible'
            ? 'bg-[#7C5CFC] text-white hover:bg-[#6748E8]'
            : status === 'joined'
            ? 'bg-[#EDE9FF] text-[#7C5CFC] hover:bg-[#DDD6FE]'
            : status === 'not-eligible'
            ? 'bg-[#F7F7F9] text-[#8888AA] cursor-not-allowed'
            : 'bg-[#F7F7F9] text-[#8888AA] cursor-not-allowed'
        }`}
      >
        {status === 'eligible' ? 'Apply Now' : status === 'joined' ? 'View Submission' : status === 'not-eligible' ? 'Not Eligible' : 'Closed'}
        {(status === 'eligible' || status === 'joined') && <ArrowRight size={14} />}
      </Link>
    </div>
  );
}
