'use client';

import { Star, Building2 } from 'lucide-react';

export default function RoleSelectMockup() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '320px' }}
    >
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Create Account</span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-[#0F0F1A] mb-1">Choose your role</h3>
        <p className="text-xs text-[#8888AA] mb-4">You can switch later if needed.</p>
        <div className="flex flex-col gap-3">
          <div
            className="rounded-xl p-4 border-2 border-[#7C3BED] bg-[#EDE9FF] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#7C3BED] flex items-center justify-center">
                <Star size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F0F1A]">Creator</p>
                <p className="text-xs text-[#4A4A6A]">Join campaigns, earn from your audience</p>
              </div>
            </div>
          </div>
          <div
            className="rounded-xl p-4 border border-[#E4E4EC] cursor-pointer hover:border-[#D1D1DE] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F0F0F4] flex items-center justify-center">
                <Building2 size={16} className="text-[#4A4A6A]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F0F1A]">Sponsor / Brand</p>
                <p className="text-xs text-[#4A4A6A]">Launch campaigns, control budgets</p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-primary w-full justify-center mt-4 text-sm">
          Continue →
        </button>
        <p className="text-center text-xs text-[#8888AA] mt-3">
          Already have an account? <span className="text-[#7C3BED] font-medium cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
}
