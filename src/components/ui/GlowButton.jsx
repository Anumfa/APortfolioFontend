import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlowButton = ({ children, to, href, onClick, type = 'button', variant = 'outline', className = '' }) => {
  const base = `inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 ${className}`;
  const styles = {
    outline: 'rounded-xl border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 glow-cyan-hover',
    solid: 'rounded-xl border-2 border-cyan-400 bg-cyan-400/10 text-white hover:bg-cyan-400/25 glow-cyan-hover',
  };
  const cls = `${base} ${styles[variant]}`;

  if (to) {
    return (
      <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={cls}>{children}</Link>
      </motion.div>
    );
  }
  if (href) {
    return (
      <motion.a href={href} whileHover={{ y: -4 }} className={cls} target="_blank" rel="noreferrer">
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className={cls}>
      {children}
    </motion.button>
  );
};

export default GlowButton;
