import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NeonButton = ({ children, to, href, variant = 'outline', className = '', onClick, type, download }) => {
  const base = `
    relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5
    text-sm font-semibold tracking-wide transition-all duration-300
    overflow-hidden group w-full sm:w-auto
  `;

  const variants = {
    solid: `
      bg-gradient-to-r from-violet-600 to-blue-600 text-white border border-violet-500/50
      hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-violet-300 border border-violet-500/40
      hover:bg-violet-500/10 hover:border-violet-400/60
      hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
      hover:text-white
      active:scale-[0.98]
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-400/10 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
        <Link to={to} className={classes}>{inner}</Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
        <a href={href} download={download} target={download ? undefined : '_blank'} rel={download ? undefined : 'noreferrer'} className={classes}>{inner}</a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type || 'button'}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {inner}
    </motion.button>
  );
};

export default NeonButton;
