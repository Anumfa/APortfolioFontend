import React from 'react';

const PremiumCard = ({ children, className = '' }) => (
  <div className={`figma-card ${className}`}>
    {children}
  </div>
);

export default PremiumCard;
