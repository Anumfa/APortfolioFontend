import React from 'react';

const PremiumProfile = ({ className = '' }) => (
  <div className={`relative mx-auto w-full max-w-[280px] py-6 sm:max-w-[320px] md:max-w-[360px] ${className}`}>
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 text-[#d4ff00]"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path d="M 138 28 A 72 72 0 1 1 62 172" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
    </svg>
    <div className="relative z-10 mx-auto aspect-square w-[72%] overflow-hidden rounded-full border-[5px] border-[#1a1a1a] bg-[#111] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
      <img src="/profile.png" alt="Asad Khan" className="h-full w-full object-cover object-[center_20%]" />
    </div>
  </div>
);

export default PremiumProfile;
