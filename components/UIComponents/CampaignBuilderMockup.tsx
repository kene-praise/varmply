'use client';

import { DollarSign, Users, Calendar, Target } from 'lucide-react';

export default function CampaignBuilderMockup() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '340px' }}
    >
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Campaign Builder</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#0F0F1A]">New Campaign</h3>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EDE9FF] text-[#7C5CFC]">Draft</span>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
              Campaign Name
            </label>
            <div className="border border-[#7C5CFC] bg-[#EDE9FF]/30 rounded-lg px-3 py-2 text-xs text-[#0F0F1A] font-medium">
              Q2 Paystack Creator Drive
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
                Budget
              </label>
              <div className="border border-[#E4E4EC] rounded-lg px-3 py-2 flex items-center gap-1.5">
                <DollarSign size={11} className="text-[#8888AA]" />
                <span className="text-xs font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>₦500,000</span>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
                Per Creator
              </label>
              <div className="border border-[#E4E4EC] rounded-lg px-3 py-2">
                <span className="text-xs font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>₦25,000</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
                Min. Followers
              </label>
              <div className="border border-[#E4E4EC] rounded-lg px-3 py-2 flex items-center gap-1.5">
                <Users size={11} className="text-[#8888AA]" />
                <span className="text-xs">5,000</span>
              </div>
            </div>
            <div>
              <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
                Deadline
              </label>
              <div className="border border-[#E4E4EC] rounded-lg px-3 py-2 flex items-center gap-1.5">
                <Calendar size={11} className="text-[#8888AA]" />
                <span className="text-xs">Apr 30</span>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1.5">
              Requirements
            </label>
            <div className="flex flex-col gap-1.5">
              {[
                'Tag @Paystack in post',
                'Use #Paystack2025',
                'Min. 30 second video',
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#F7F7F9] rounded-md px-2.5 py-1.5">
                  <Target size={10} className="text-[#7C5CFC]" />
                  <span className="text-[10px] text-[#4A4A6A]">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="btn-ghost flex-1 justify-center text-xs !py-2 !px-3">
            Save Draft
          </button>
          <button className="btn-primary flex-1 justify-center text-xs !py-2 !px-3">
            Activate →
          </button>
        </div>
      </div>
    </div>
  );
}
