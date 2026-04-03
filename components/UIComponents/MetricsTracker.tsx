'use client';

import { TrendingUp, Eye, Heart, MessageCircle } from 'lucide-react';

export default function MetricsTracker() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '320px' }}
    >
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Performance Tracker</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-[#8888AA] font-medium">Paystack Campaign</p>
            <p className="text-sm font-bold text-[#0F0F1A]">Q1 Creator Drive</p>
          </div>
          <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-[#F0FDF4] text-[#16A34A]">
            Tracking
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] text-[#8888AA] mb-1">
            <span>Campaign goal</span>
            <span className="font-semibold text-[#7C3BED]">67% reached</span>
          </div>
          <div className="bg-[#E4E4EC] rounded-full h-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#7C3BED] to-[#A78BFA]"
              style={{ width: '67%' }}
            />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: 'Views', value: '24.5K', icon: Eye, color: '#7C3BED', bg: '#EDE9FF' },
            { label: 'Engagements', value: '3.2K', icon: Heart, color: '#DC2626', bg: '#FEF2F2' },
            { label: 'Comments', value: '412', icon: MessageCircle, color: '#16A34A', bg: '#F0FDF4' },
            { label: 'Rate', value: '13.1%', icon: TrendingUp, color: '#D97706', bg: '#FFFBEB' },
          ].map((m, i) => (
            <div key={i} className="bg-[#F7F7F9] rounded-lg p-2.5">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center mb-1.5"
                style={{ background: m.bg }}
              >
                <m.icon size={12} style={{ color: m.color }} />
              </div>
              <p className="text-base font-bold text-[#0F0F1A]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {m.value}
              </p>
              <p className="text-[9px] text-[#8888AA] font-medium uppercase tracking-wide">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Payout info */}
        <div className="bg-[#EDE9FF] rounded-lg px-3 py-2 flex items-center justify-between">
          <span className="text-xs text-[#4A4A6A]">Projected payout</span>
          <span className="text-sm font-bold text-[#7C3BED]" style={{ fontFamily: 'Inter, sans-serif' }}>
            ₦16,750
          </span>
        </div>
      </div>
    </div>
  );
}
