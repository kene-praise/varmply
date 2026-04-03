'use client';

import { Link, Image, FileText, CheckCircle } from 'lucide-react';

export default function SubmissionForm() {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid #E4E4EC', width: '320px' }}
    >
      <div className="px-4 py-3 border-b border-[#E4E4EC] flex items-center gap-2 bg-[#F7F7F9]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-xs text-[#8888AA]">Submit Content</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#EDE9FF] flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#7C3BED]">P</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F0F1A]">Paystack Q1 Campaign</p>
            <p className="text-[10px] text-[#8888AA]">Submission deadline: Apr 15</p>
          </div>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-3">
          <div>
            <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
              Content Link
            </label>
            <div className="flex items-center gap-2 border border-[#E4E4EC] rounded-lg px-3 py-2">
              <Link size={12} className="text-[#8888AA]" />
              <span className="text-xs text-[#8888AA]">https://instagram.com/...</span>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
              Screenshot
            </label>
            <div
              className="border-2 border-dashed border-[#E4E4EC] rounded-lg p-3 flex flex-col items-center gap-1 cursor-pointer hover:border-[#7C3BED] hover:bg-[#EDE9FF]/30 transition-all"
            >
              <Image size={16} className="text-[#8888AA]" />
              <p className="text-[10px] text-[#8888AA]">Drop or click to upload</p>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-[#4A4A6A] uppercase tracking-wide block mb-1">
              Notes (optional)
            </label>
            <div className="border border-[#E4E4EC] rounded-lg px-3 py-2 h-14">
              <span className="text-xs text-[#8888AA]">Add any extra context...</span>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="mt-3 bg-[#F7F7F9] rounded-lg p-2.5">
          <p className="text-[9px] font-semibold text-[#8888AA] uppercase tracking-wider mb-2">Requirements</p>
          {[
            { label: 'Tagged @Paystack', done: true },
            { label: 'Hashtag #Paystack2025', done: true },
            { label: 'Minimum 30s video', done: false },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-2 mb-1 last:mb-0">
              <CheckCircle
                size={11}
                style={{ color: r.done ? '#16A34A' : '#D1D1DE' }}
              />
              <span className="text-[10px]" style={{ color: r.done ? '#16A34A' : '#8888AA' }}>
                {r.label}
              </span>
            </div>
          ))}
        </div>

        <button className="btn-primary w-full justify-center mt-3 text-sm !py-2">
          Submit for Review →
        </button>
      </div>
    </div>
  );
}
