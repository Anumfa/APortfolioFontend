import React from 'react';
import { motion } from 'framer-motion';
import { sectionReveal } from './motionVariants';

const SectionTitle = ({ children, subtitle }) => (
  <motion.div variants={sectionReveal} className="mb-8 md:mb-10">
    {subtitle && <p className="section-label">{subtitle}</p>}
    <h2 className="section-heading">{children}</h2>
  </motion.div>
);

export default SectionTitle;
