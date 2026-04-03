'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border transition-all duration-200"
          style={{
            borderColor: openIndex === i ? '#7C3BED' : '#E4E4EC',
          }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span
              className="font-semibold text-[#0F0F1A] pr-4"
              style={{ fontWeight: openIndex === i ? 700 : 600 }}
            >
              {item.question}
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
              style={{
                background: openIndex === i ? '#7C3BED' : '#F0F0F4',
                color: openIndex === i ? 'white' : '#8888AA',
              }}
            >
              {openIndex === i ? <Minus size={13} /> : <Plus size={13} />}
            </div>
          </button>

          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-[#E4E4EC] mb-4" />
                  <p className="text-[#4A4A6A] leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
