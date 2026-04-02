'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import CampaignMockup from './UIComponents/CampaignMockup';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F7F7F9]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,92,252,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,92,252,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'var(--status-purple-bg)',
                border: '1px solid rgba(124,92,252,0.2)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] animate-pulse" />
              <span className="text-xs font-semibold text-[#7C5CFC]">Live Platform — Open Signups</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#0F0F1A] leading-[1.1] font-extrabold"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800 }}
              >
                Where Creators
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[1.12] font-extrabold"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800 }}
              >
                <span className="gradient-text">and Sponsors</span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#0F0F1A] leading-[1.12] font-extrabold"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800 }}
              >
                Build Together.
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#4A4A6A] text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              No scattered DMs. No vague agreements. Structured campaigns, verified performance, transparent payments — for everyone.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link href="/creators" className="btn-primary text-sm">
                Join as Creator <ArrowRight size={16} />
              </Link>
              <Link href="/sponsors" className="btn-ghost text-sm">
                Run a Campaign
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {['#7C5CFC', '#A78BFA', '#6748E8', '#5B3FE4', '#C4B5FD'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <p className="text-sm text-[#4A4A6A]">
                Trusted by creators and brands across{' '}
                <span className="font-semibold text-[#0F0F1A]">Nigeria.</span>
              </p>
            </motion.div>
          </div>

          {/* Right column — floating mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Floating mockup */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CampaignMockup />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute -top-4 -left-8 bg-white rounded-xl px-3 py-2 flex items-center gap-2"
                style={{ border: '1px solid #E4E4EC' }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#EDE9FF] flex items-center justify-center">
                  <Zap size={13} className="text-[#7C5CFC]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8888AA]">Distributed</p>
                  <p className="text-sm font-bold text-[#0F0F1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    ₦ 2.4M
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="absolute -bottom-4 -left-12 bg-white rounded-xl px-3 py-2 flex items-center gap-2"
                style={{ border: '1px solid #E4E4EC' }}
              >
                <div className="w-7 h-7 rounded-full bg-[#F0FDF4] flex items-center justify-center">
                  <span className="text-sm">👥</span>
                </div>
                <div>
                  <p className="text-[10px] text-[#8888AA]">Active creators</p>
                  <p className="text-sm font-bold text-[#0F0F1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    847+
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute top-1/3 -right-10 bg-white rounded-xl px-3 py-2 flex items-center gap-2"
                style={{ border: '1px solid #E4E4EC' }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#FFFBEB] flex items-center justify-center">
                  <span className="text-sm">📢</span>
                </div>
                <div>
                  <p className="text-[10px] text-[#8888AA]">Live campaigns</p>
                  <p className="text-sm font-bold text-[#0F0F1A]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    24
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
