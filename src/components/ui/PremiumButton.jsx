import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PremiumButton = ({ children, to, href, variant = 'solid', className = '', onClick, type, download }) => {
  const base = 'inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 sm:w-auto';

  const variants = {
    solid: 'bg-[#d4ff00] text-black hover:scale-105 hover:shadow-[0_0_24px_rgba(212,255,0,0.3)]',
    outline: 'border border-[#1f1f1f] bg-transparent text-white hover:border-[#d4ff00]/50 hover:text-[#d4ff00]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.98 }} className="inline-block w-full sm:w-auto">
        <Link to={to} className={classes}>{children}</Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.98 }} className="inline-block w-full sm:w-auto">
        <a href={href} download={download} target={download ? undefined : '_blank'} rel={download ? undefined : 'noreferrer'} className={classes}>{children}</a>
      </motion.div>
    );
  }

  return (
    <motion.button type={type || 'button'} onClick={onClick} whileTap={{ scale: 0.98 }} className={classes}>
      {children}
    </motion.button>
  );
};

export default PremiumButton;
