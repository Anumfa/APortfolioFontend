import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!hover || !ref.current || window.innerWidth < 1024) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="overflow-hidden rounded-2xl">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={hover ? { rotateX, rotateY, transformPerspective: 1000 } : {}}
        whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
        className={`
          relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6
          backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]
          transition-shadow duration-500
          hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
          ${className}
        `}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
};

export default GlassCard;
