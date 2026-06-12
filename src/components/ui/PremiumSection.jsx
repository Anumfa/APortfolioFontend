import React from 'react';
import { motion } from 'framer-motion';
import { sectionReveal } from './motionVariants';

const PremiumSection = ({ children, id, className = '' }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '0px 0px -40px 0px' }}
    variants={sectionReveal}
    className={`page-container ${className}`}
  >
    {children}
  </motion.section>
);

export default PremiumSection;
