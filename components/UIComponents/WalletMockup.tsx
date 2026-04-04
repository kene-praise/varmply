'use client';

const Sk = ({ w, h, bg = 'bg-[#E4E4EC]/60', rounded = 'rounded-md', className = '' }: { w: string; h: string; bg?: string; rounded?: string; className?: string }) => (
  <div className={`animate-pulse ${w} ${h} ${bg} ${rounded} ${className}`} />
);

export default function WalletMockup() {
  return (
    <div className="bg-[#FAFAFA] overflow-hidden w-full h-full flex pt-0">
      {/* Sidebar Mockup */}
      <div className="w-56 bg-white p-5 flex flex-col gap-6 border-r border-[#EBEBF0] h-full">
        <Sk w="w-full" h="h-10" bg="bg-[#E4E4EC]/70" rounded="rounded-xl" />
        <div className="flex flex-col gap-4 mt-4">
          <Sk w="w-3/4" h="h-3" bg="bg-[#E4E4EC]/50" />
          <Sk w="w-2/3" h="h-3" bg="bg-[#E4E4EC]/50" />
          <Sk w="w-5/6" h="h-3" bg="bg-[#E4E4EC]/50" />
        </div>
        <div className="mt-auto">
          <Sk w="w-full" h="h-12" bg="bg-[#E4E4EC]/60" rounded="rounded-xl" />
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 p-8 flex flex-col gap-6">
        {/* Top Stats Row */}
        <div className="grid grid-cols-3 gap-5">
          {/* Primary Balance Stat */}
          <div className="col-span-2 rounded-3xl p-6 flex flex-col justify-between shadow-sm" style={{ background: '#7C3BED' }}>
            <div className="flex justify-between items-start">
              <Sk w="w-32" h="h-3" bg="bg-white/30" rounded="rounded-full" />
              <Sk w="w-8" h="h-8" bg="bg-white/30" rounded="rounded-full" />
            </div>
            <Sk w="w-56" h="h-12" bg="bg-white/60" rounded="rounded-full" className="mt-6" />
          </div>

          {/* Secondary Stat */}
          <div className="rounded-[24px] p-6 border border-[#EBEBF0] flex flex-col justify-between shadow-sm" style={{ background: 'white' }}>
            <Sk w="w-24" h="h-2" bg="bg-[#E4E4EC]" />
            <Sk w="w-3/4" h="h-6" bg="bg-[#D1D1DE]" className="mt-8" />
          </div>
        </div>

        {/* Transaction History Layout */}
        <div className="rounded-[24px] border border-[#EBEBF0] flex flex-col p-6 flex-1 shadow-sm" style={{ background: 'white' }}>
          <div className="flex justify-between items-center mb-6">
            <Sk w="w-40" h="h-3" bg="bg-[#D1D1DE]" />
            <Sk w="w-20" h="h-6" bg="bg-[#E4E4EC]" rounded="rounded-full" />
          </div>

          <div className="flex flex-col gap-5">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center justify-between pb-5 border-b border-[#F0F0F4] border-dashed last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <Sk w="w-10" h="h-10" rounded="rounded-full" bg="bg-[#F0F0F4]" />
                  <div className="flex flex-col gap-2">
                    <Sk w="w-48" h="h-3" bg="bg-[#D1D1DE]" />
                    <Sk w="w-24" h="h-2" bg="bg-[#E4E4EC]" />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Sk w="w-16" h="h-2" bg="bg-[#E4E4EC]" />
                  <Sk w="w-20" h="h-4" bg="bg-[#16A34A]/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
