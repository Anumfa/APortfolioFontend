import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = ({ className = '', size = 'lg' }) => {
  const sizes = {
    lg: 'w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]',
    md: 'w-full max-w-[260px] sm:max-w-[300px]',
    sm: 'w-full max-w-[200px] sm:max-w-[240px]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className={`mx-auto px-2 ${sizes[size]} ${className}`}
    >
      <div
        className="relative overflow-hidden rounded-2xl p-[2px]"
        style={{
          boxShadow: '0 0 30px rgba(139,92,246,0.25), 0 0 60px rgba(99,102,241,0.1)',
        }}
      >
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/60 via-blue-500/40 to-cyan-400/50 p-[2px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] bg-[#0a0a1a]">
            <img
              src="/profile.png"
              alt="Asad Khan"
              className="h-full w-full object-cover object-[center_15%] brightness-[1.05] contrast-[1.08] saturate-[1.05]"
              onError={(e) => { e.target.style.display = 'none'; }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030014]/40 via-transparent to-[#030014]/40" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-violet-400/30 bg-black/50 px-4 py-1.5 text-xs font-medium text-violet-200 backdrop-blur-md">
              Data Analyst
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
