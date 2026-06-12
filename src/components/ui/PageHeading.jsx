import React from 'react';
import { motion } from 'framer-motion';

const PageHeading = ({ children, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 md:mb-16"
  >
    {subtitle && <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#d4ff00]">{subtitle}</p>}
    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{children}</h1>
  </motion.div>
);

export default PageHeading;
