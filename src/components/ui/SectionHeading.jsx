import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6 }}
    className="mb-8 px-2 text-center sm:mb-12"
  >
    {subtitle && (
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-violet-400 sm:text-sm sm:tracking-[0.2em]">
        {subtitle}
      </p>
    )}
    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
      <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 sm:mt-4 sm:w-20" />
  </motion.div>
);

export default SectionHeading;
