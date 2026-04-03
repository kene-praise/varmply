'use client';

import Image from 'next/image';
import { BarChart2, ArrowRight } from 'lucide-react';

type Status = 'eligible' | 'not-eligible' | 'joined' | 'closed';

interface CampaignCardProps {
  brand: string;
  category: string;
  amount: string;
  status: Status;
  deadline: string;
  applicants: number;
  description: string;
  engagement?: string;
  budgetTotal?: string;
  progressPct?: number;
  imageSeed?: string;
}

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  eligible:     { label: 'Eligible',     color: '#16A34A', bg: '#DCFCE7' },
  'not-eligible':{ label: 'Not Eligible', color: '#DC2626', bg: '#FEE2E2' },
  joined:       { label: 'Tracking',     color: '#0EA5E9', bg: '#E0F2FE' },
  closed:       { label: 'Closed',       color: '#8888AA', bg: '#F0F0F4' },
};

export default function CampaignCard({
  brand,
  category,
  amount,
  status,
  deadline,
  applicants,
  engagement = '240K',
  budgetTotal,
  progressPct = 71,
  imageSeed,
}: CampaignCardProps) {
  const s = statusConfig[status];
  const seed = imageSeed ?? brand.toLowerCase().replace(/\s+/g, '');

  return (
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col" style={{ border: '1px solid #EBEBF0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>

      {/* Campaign image */}
      <div className="relative w-full overflow-hidden" style={{ height: '160px' }}>
        <Image
          src={`https://picsum.photos/seed/${seed}/400/200`}
          alt={brand}
          fill
          className="object-cover"
        />
        {/* Status badge floats over image */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ color: s.color, background: s.bg }}
          >
            {s.label}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">

        {/* Brand + category */}
        <p className="font-bold text-[#0F0A2E] text-base leading-tight mb-0.5">{brand}</p>
        <p className="text-xs text-[#8888AA] mb-3">{category}</p>

        {/* Metric tiles */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="rounded-xl p-3" style={{ background: '#F3EEFF' }}>
            <p className="text-[10px] font-semibold text-[#7C3BED] mb-1 uppercase tracking-wider">Engagement</p>
            <p className="text-lg font-bold text-[#7C3BED] leading-none">{engagement}</p>
          </div>
          <div className="rounded-xl p-3" style={{ background: '#DCFCE7' }}>
            <p className="text-[10px] font-semibold text-[#16A34A] mb-1 uppercase tracking-wider">Payout</p>
            <p className="text-lg font-bold text-[#16A34A] leading-none">{amount}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-[#4A4A6A] mb-2">
          <span>Campaign ends in</span>
          <span className="font-bold text-[#0F0A2E]">{deadline}</span>
        </div>
        {budgetTotal && (
          <div className="flex items-center justify-between text-xs text-[#4A4A6A] mb-3">
            <span>Campaign Budget</span>
            <span className="font-bold text-[#0F0A2E]">{budgetTotal}</span>
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-1">
          <div className="flex items-center justify-between text-[10px] text-[#8888AA] mb-1.5">
            <span>Progress</span>
            <span>{progressPct}% filled</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#F0F0F4] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${Math.min(progressPct, 100)}%`, background: '#7C3BED' }}
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <button
          className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl text-sm font-semibold transition-all"
          style={
            status === 'eligible' || status === 'joined'
              ? { background: '#F3EEFF', color: '#7C3BED' }
              : { background: '#F4F3F5', color: '#8888AA', cursor: 'not-allowed' }
          }
          disabled={status === 'not-eligible' || status === 'closed'}
        >
          <BarChart2 size={14} />
          {status === 'eligible' ? 'Apply Now' : status === 'joined' ? 'View Stats' : status === 'not-eligible' ? 'Not Eligible' : 'Closed'}
          {(status === 'eligible' || status === 'joined') && <ArrowRight size={13} />}
        </button>
      </div>
    </div>
  );
}
