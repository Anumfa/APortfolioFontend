import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = ({ maxWidth = 400, delay = 0.3 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    style={{ flex: '1 1 260px', display: 'flex', justifyContent: 'center', width: '100%', maxWidth }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: Math.min(maxWidth, 360),
        aspectRatio: '1/1',
        borderRadius: '20px',
        background: 'var(--surface-color)',
        border: '2px solid var(--primary-color)',
        boxShadow: '0 0 30px rgba(102, 252, 241, 0.2)',
        overflow: 'hidden',
      }}
    >
      <img src="/profile.png" alt="Asad Khan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  </motion.div>
);

export default ProfileImage;
