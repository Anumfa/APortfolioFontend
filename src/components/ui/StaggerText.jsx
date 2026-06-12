import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from './motionVariants';

const StaggerText = ({ text, className = '', as: Tag = 'span' }) => {
  const words = text.split(' ');

  return (
    <motion.span
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={staggerItem} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default StaggerText;
