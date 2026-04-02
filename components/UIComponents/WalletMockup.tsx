'use client';

import { ArrowDownLeft, ArrowUpRight, Clock } from 'lucide-react';

const transactions = [
  { label: 'Paystack Campaign', amount: '+₦25,000', type: 'credit', date: 'Mar 28', status: 'completed' },
  { label: 'PiggyVest Campaign', amount: '+₦18,000', type: 'credit', date: 'Mar 22', status: 'completed' },
  { label: 'Cowrywise Bonus', amount: '+₦4,500', type: 'credit', date: 'Mar 18', status: 'pending' },
];

export default function WalletMockup() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '320px' }}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Wallet</span>
      </div>

      {/* Balance Card */}
      <div className="p-4">
        <div
          className="rounded-xl p-4 mb-4"
          style={{
            background: 'linear-gradient(135deg, #7C5CFC 0%, #5B3FE4 100%)',
          }}
        >
          <p className="text-white/70 text-xs mb-1">Available Balance</p>
          <p
            className="text-white text-3xl font-bold mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            ₦47,500
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/30">
                Withdraw
              </button>
              <button className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
                History
              </button>
            </div>
            <span className="text-white/60 text-xs">NGN</span>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-[#FFFBEB] rounded-lg px-3 py-2.5 flex items-center gap-2 mb-3">
          <Clock size={14} className="text-[#D97706]" />
          <span className="text-xs text-[#D97706] font-medium">₦4,500 pending validation</span>
        </div>

        {/* Transactions */}
        <p className="text-xs font-semibold text-[#8888AA] uppercase tracking-wider mb-2">Recent</p>
        <div className="flex flex-col gap-2">
          {transactions.map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: tx.type === 'credit' ? '#F0FDF4' : '#FEF2F2' }}
                >
                  {tx.type === 'credit' ? (
                    <ArrowDownLeft size={13} className="text-[#16A34A]" />
                  ) : (
                    <ArrowUpRight size={13} className="text-[#DC2626]" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-medium text-[#0F0F1A]">{tx.label}</p>
                  <p className="text-[10px] text-[#8888AA]">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    color: tx.type === 'credit' ? '#16A34A' : '#DC2626',
                  }}
                >
                  {tx.amount}
                </p>
                <span
                  className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                  style={{
                    color: tx.status === 'completed' ? '#16A34A' : '#D97706',
                    background: tx.status === 'completed' ? '#F0FDF4' : '#FFFBEB',
                  }}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
