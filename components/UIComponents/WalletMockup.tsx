'use client';

import { ArrowDownLeft, Info } from 'lucide-react';

const transactions = [
  { label: 'Paystack Campaign',  amount: '+₦25,000', date: 'Mar 28', status: 'Completed' as const },
  { label: 'PiggyVest Campaign', amount: '+₦18,000', date: 'Mar 22', status: 'Processing' as const },
  { label: 'Cowrywise Bonus',    amount: '+₦4,500',  date: 'Mar 18', status: 'Failed' as const },
];

const statusStyle: Record<'Completed' | 'Processing' | 'Failed', { color: string; bg: string }> = {
  Completed:  { color: '#16A34A', bg: '#DCFCE7' },
  Processing: { color: '#0EA5E9', bg: '#E0F2FE' },
  Failed:     { color: '#DC2626', bg: '#FEE2E2' },
};

export default function WalletMockup() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '320px' }}
    >
      {/* Faux browser chrome */}
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA] font-medium">My Earnings</span>
      </div>

      <div className="p-4 flex flex-col gap-3">

        {/* Available Balance — purple */}
        <div
          className="rounded-2xl p-4"
          style={{ background: '#7C3BED' }}
        >
          <p className="text-white/65 text-[11px] font-medium mb-1">Available Balance</p>
          <p className="text-white text-2xl font-bold leading-none mb-3">₦285,000</p>
          <button
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#7C3BED] bg-white"
          >
            Withdraw
          </button>
        </div>

        {/* Two smaller stat cards side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl p-3 border border-[#EBEBF0]">
            <p className="text-[10px] text-[#8888AA] font-medium mb-1">Tracking Earnings</p>
            <p className="text-[#0F0A2E] text-base font-bold leading-none">₦45,000</p>
          </div>
          <div className="rounded-xl p-3 border border-[#EBEBF0]">
            <p className="text-[10px] text-[#8888AA] font-medium mb-1">Pending Payout</p>
            <p className="text-[#0F0A2E] text-base font-bold leading-none">₦28,000</p>
          </div>
        </div>

        {/* Info banner */}
        <div
          className="flex items-start gap-2.5 rounded-xl px-3 py-2.5"
          style={{ background: '#EDE9FF', border: '1px solid #DDD6FE' }}
        >
          <Info size={13} className="text-[#7C3BED] mt-0.5 flex-shrink-0" />
          <p className="text-[11px] leading-relaxed text-[#5B21B6]">
            Pending payouts are released within 24–72h after submission review.
          </p>
        </div>

        {/* Transaction History */}
        <div>
          <p className="text-[10px] font-bold text-[#8888AA] uppercase tracking-widest mb-2">Transaction History</p>
          <div className="flex flex-col gap-1.5">
            {transactions.map((tx, i) => {
              const s = statusStyle[tx.status];
              return (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#F0F0F4] last:border-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#F0FDF4]">
                      <ArrowDownLeft size={13} className="text-[#16A34A]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#0F0F1A] leading-tight">{tx.label}</p>
                      <p className="text-[10px] text-[#8888AA]">{tx.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-sm font-bold text-[#16A34A]">{tx.amount}</p>
                    <span
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: s.color, background: s.bg }}
                    >
                      {tx.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
