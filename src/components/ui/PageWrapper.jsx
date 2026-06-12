import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`content-container inner-pad ${className}`}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
