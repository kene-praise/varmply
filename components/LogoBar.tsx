'use client';

import { motion } from 'framer-motion';

const logos = ['Paystack', 'PiggyVest', 'Flutterwave', 'Cowrywise', 'Carbon'];

export default function LogoBar() {
  return (
    <section style={{ background: 'white', borderTop: '1px solid #EBEBF0', borderBottom: '1px solid #EBEBF0' }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#8888AA] mb-6 font-medium"
        >
          Trusted by teams and creators at
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-lg font-bold text-[#D1D1DE] hover:text-[#7C3BED] transition-colors duration-300 cursor-default select-none tracking-tight"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
