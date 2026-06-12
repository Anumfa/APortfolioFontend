import React from 'react';
import { motion } from 'framer-motion';

const ProfileRing = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className={`relative mx-auto w-full max-w-[280px] py-4 sm:max-w-[320px] md:max-w-[360px] ${className}`}
  >
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 text-[#c1ff72]"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path d="M 138 28 A 72 72 0 1 1 62 172" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
    </svg>
    <div className="relative z-10 mx-auto aspect-square w-[72%] overflow-hidden rounded-full border-[5px] border-[#1a1a1a] bg-[#111]">
      <img src="/profile.png" alt="Asad Khan" className="h-full w-full object-cover object-[center_20%]" />
    </div>
  </motion.div>
);

export default ProfileRing;
