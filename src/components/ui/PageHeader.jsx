import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, highlight, subtitle, center = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}
  >
    <h1 className="section-heading">
      {title} {highlight && <span className="lime">{highlight}</span>}
    </h1>
    {subtitle && (
      <p className={`section-sub mt-4 ${center ? 'mx-auto' : ''}`}>{subtitle}</p>
    )}
  </motion.div>
);

export default PageHeader;
