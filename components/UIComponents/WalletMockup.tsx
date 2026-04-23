'use client';

export default function WalletMockup() {
  return (
    <div className="bg-[#FAFAFA] overflow-hidden w-full h-full flex pt-0 font-sans cursor-default select-none">
      {/* Sidebar Mockup */}
      <div className="w-56 bg-white p-5 flex flex-col gap-6 border-r border-[#EBEBF0] h-full shrink-0">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-sm">V</div>
            <span className="font-bold text-[#0F0F1A] text-sm">Varmply</span>
        </div>
        
        <div className="flex flex-col gap-1.5">
           {['Dashboard', 'Campaigns', 'Analytics'].map((L) => (
             <div key={L} className="text-[11px] font-semibold text-[#4A4A6A] px-3 py-2 rounded-lg hover:bg-[#F5F5F7] cursor-pointer">
                {L}
             </div>
           ))}
           <div className="text-[11px] font-bold text-[#2563EB] bg-[rgba(37,99,235,0.08)] px-3 py-2 rounded-lg border border-[rgba(37,99,235,0.12)]">
              Wallet
           </div>
        </div>
        
        <div className="mt-auto">
          <div className="bg-[#F9F9FB] border border-[#EBEBF2] rounded-xl p-3 flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-[#EAEAF0] shrink-0" />
             <div className="min-w-0">
               <p className="text-[10px] font-bold text-[#0F0F1A] truncate">Melanie Trump</p>
               <p className="text-[9px] text-[#A0A0BA] truncate">Creator</p>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 p-8 flex flex-col gap-6 overflow-hidden h-full">
        {/* Top Stats Row */}
        <div className="grid grid-cols-3 gap-5 shrink-0">
          {/* Primary Balance Stat */}
          <div className="col-span-2 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden" style={{ background: '#0F0A2E' }}>
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at right top, #2563EB 0%, transparent 60%)' }} />
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Available Balance</span>
              <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 shadow-sm backdrop-blur-md">Withdraw</div>
            </div>
            <div className="relative z-10 mt-6">
               <span className="text-4xl font-black text-white tracking-tight">₦145,200</span>
               <p className="text-[10px] text-white/50 mt-2 font-medium">Last updated: Just now</p>
            </div>
          </div>

          {/* Secondary Stat */}
          <div className="rounded-[24px] p-6 border border-[#EBEBF2] flex flex-col justify-between shadow-sm bg-white">
             <span className="text-[10px] font-bold text-[#A0A0BA] uppercase tracking-wide">Pending Escrow</span>
             <div className="mt-8">
               <span className="text-2xl font-black text-[#0F0F1A] tracking-tight">₦45,000</span>
               <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A40B8] animate-pulse" />
                  <span className="text-[9px] font-bold text-[#2563EB]">From 2 campaigns</span>
               </div>
             </div>
          </div>
        </div>

        {/* Transaction History Layout */}
        <div className="rounded-[24px] border border-[#EBEBF2] flex flex-col p-6 flex-1 shadow-sm bg-white overflow-hidden">
          <div className="flex justify-between items-center mb-6 shrink-0 border-b border-[#EBEBF2] pb-4">
            <span className="text-[13px] font-bold text-[#0F0F1A]">Recent Activity</span>
            <div className="bg-[#F5F5F7] px-3 py-1.5 rounded-full text-[9px] font-bold text-[#4A4A6A] shadow-inner">View All</div>
          </div>

          <div className="flex flex-col gap-0 overflow-y-auto pr-2">
            {[
               { t: 'Campaign Payout', st: 'Universal Music — Viral Dance', amt: '+₦45,000', date: 'Today, 2:40 PM', status: 'Success' },
               { t: 'Withdrawal', st: 'To GTBank **** 4492', amt: '-₦120,000', date: 'Yesterday, 11:30 AM', status: 'Success' },
               { t: 'Escrow Locked', st: 'PiggyVest Q3 Promo', amt: '₦25,000', date: 'Apr 12, 09:15 AM', status: 'Pending' }
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-[#F0F0F4] border-dashed last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F9F9FB] border border-[#EBEBF2] flex items-center justify-center text-[16px] shadow-sm">
                     {tx.amt.startsWith('+') ? '💸' : tx.amt.startsWith('-') ? '🏦' : '🔒'}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] font-bold text-[#0F0F1A] leading-none">{tx.t}</span>
                    <span className="text-[10px] text-[#A0A0BA] font-medium leading-none">{tx.st}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                   <span className={`text-[12px] font-bold leading-none ${tx.amt.startsWith('+') ? 'text-[#00A050]' : tx.amt.startsWith('-') ? 'text-[#0F0F1A]' : 'text-[#D97706]'}`}>{tx.amt}</span>
                   <div className="flex items-center gap-2">
                      <span className="text-[9px] text-[#A0A0BA]">{tx.date}</span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm ${tx.status === 'Success' ? 'bg-[#E6F4EA] text-[#137333]' : 'bg-[#FEF7E0] text-[#B06000]'}`}>{tx.status}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
